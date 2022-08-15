import { MongoClient } from "mongodb";

export async function connectDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://colin:garados@cluster0.ojeelxs.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertDoc(client, collection, doc) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(doc);
  return result;
}

export async function getAllDocs(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
