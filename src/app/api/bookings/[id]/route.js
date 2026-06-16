import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const client = new MongoClient(process.env.MONGODB_URI);

export async function PUT(req, { params }) {
  const body = await req.json();
  const { id } = params;
  await client.connect();
  const db = client.db("doctorDB");
  await db.collection("bookings").updateOne(
    { _id: new ObjectId(id) },
    { $set: body }
  );
  return NextResponse.json({ success: true });
}

export async function DELETE(_, { params }) {
  const { id } = params;
  await client.connect();
  const db = client.db("doctorDB");
  await db.collection("bookings").deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json({ success: true });
}