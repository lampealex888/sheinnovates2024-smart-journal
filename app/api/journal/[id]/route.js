import db from "@/lib/db";
import Entry from "@/models/entry";

export async function GET(req, ctx) {
  await db.connect();
  const id = ctx.params.id;
  try {
    const entry = await Entry.findById(id);
    return new Response(JSON.stringify(entry), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function PUT(req, ctx) {
  await db.connect();
  const id = ctx.params.id;
  try {
    const body = await req.json();
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return new Response(JSON.stringify(updateEntry), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req, ctx) {
  await db.connect();
  const id = ctx.params.id;
  try {
    const entry = await Entry.findById(id);
    await Entry.findByIdAndDelete(id);
    return new Response(JSON.stringify({ msg: "Deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
