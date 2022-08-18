import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://colin:garados@cluster0.ojeelxs.mongodb.net/auth?retryWrites=true&w=majority"
  );

  return client;
}
