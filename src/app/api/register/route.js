import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// ✅ client বাইরে রাখো
const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(req) {
  try {
    const { name, email, password, image } = await req.json();

    await client.connect();
    const db = client.db("doctor_appointment");
    const users = db.collection("users");

    const existing = await users.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({
      name,
      email,
      password: hashedPassword,
      image: image || "",
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Register error:", error); // ← এটা দেখো console এ
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}