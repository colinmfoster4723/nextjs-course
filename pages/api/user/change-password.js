import { getSession } from "next-auth/client";
import { hashPassword, verifyPasssword } from "../../../lib/auth";
import { connectToDB } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "PATCH") return;

  const session = await getSession({ req: req });
  //session checks req for cookie token

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDB();

  const usersCollection = client.db().collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "User not found." });
    client.close();
    return;
  }

  const currentPassword = user.password;

  const equal = await verifyPasssword(oldPassword, currentPassword);

  //Check if oldPassword and user.password are the same
  if (!equal) {
    res.status(403).json({ message: "Invalid password." });
    client.close();
    return;
  }

  //hash newPassword
  const hashedPassword = await hashPassword(newPassword);

  //Update MongoDB
  usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  client.close();
  res.status(200).json({ message: "Password updated!" });
}

export default handler;
