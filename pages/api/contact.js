import { MongoClient } from "mongodb";

// api/contact
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    // Store data
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    //CONNECT TO MONGODB
    try {
      client = await MongoClient.connect(
        "mongodb+srv://colin:garados@cluster0.ojeelxs.mongodb.net/blog?retryWrites=true&w=majority"
      );
    } catch (err) {
      res.status(500).json({ message: "Could not connect to the Database" });
      return;
    }
    //DEFINE DB
    const db = client.db();
    //DEFINE COLLECTION, ADD DOC
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Failed to store message" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message", message: newMessage });
  }
}

export default handler;
