import { connectDB, getAllDocs, insertDoc } from "../../../helpers/db-utils";

async function handler(req, res) {
  const eventId = req.query.eventId;
  //req.query = get access to value in path//
  let client;

  try {
    client = await connectDB();
  } catch (err) {
    res.status(500).json({ message: "Failed to Connect to the Database" });
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    let result;
    try {
      result = await insertDoc(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "Comment Added!", comment: newComment });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to Insert the Comment into the Database" });
    }
  }
  if (req.method === "GET") {
    try {
      const docs = await getAllDocs(client, "comments", { _id: -1 });
      res.status(200).json({ comments: docs });
    } catch (err) {
      res.status(500).json({ message: "Failed to Retrieve Comments" });
    }
  }

  client.close();
  //dont return catch to close client
}

export default handler;
