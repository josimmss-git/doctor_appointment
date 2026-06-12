import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB তে connect করার জন্য
const client = new MongoClient(process.env.MONGODB_URI);

// GET — user এর সব booking আনবে
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email"); // URL থেকে email নেবে

  await client.connect();
  const db = client.db("doctorDB");

  const bookings = await db
    .collection("bookings")
    .find({ userEmail: email }) // শুধু এই user এর booking
    .toArray();

  return NextResponse.json(bookings);
}

// POST — নতুন booking save করবে
export async function POST(req) {
  const body = await req.json();

  await client.connect();
  const db = client.db("doctorDB");

  const result = await db.collection("bookings").insertOne({
    ...body,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true, id: result.insertedId });
}