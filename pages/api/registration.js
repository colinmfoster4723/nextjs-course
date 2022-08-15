import { connectDB, insertDoc } from "../../helpers/db-utils";
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address. " });
      return;
    }

    let client;

    try {
      client = await connectDB();
    } catch (err) {
      res.status(500).json({ message: "Failed to Connect to the Database" });
    }

    try {
      await insertDoc(client, "newsletter", { email: userEmail });
      client.close();
    } catch (err) {
      res.status(500).json({ message: "Failed to Insert Data into Database" });
    }
    res.status(201).json({ message: "Success!", email: userEmail });
  }
}
export default handler;
