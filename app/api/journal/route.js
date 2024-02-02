import db from "@/lib/db";
import Entry from "@/models/entry";

export async function GET(req) {
  await db.connect();
  try {
    const entries = await Entry.find({});
    return new Response(JSON.stringify(entries), {status: 201})
  } catch (error) {
    return new Response(JSON.stringify(null), {status: 500})
  }
}

export async function POST(req) {
  await db.connect();
  try {
    const body = await req.json();
    const newEntry = await Entry.create(body);
    return new Response(JSON.stringify(newEntry), {status: 201})
  } catch (error) {
    return new Response(JSON.stringify(null), {status: 500})
  }
}
