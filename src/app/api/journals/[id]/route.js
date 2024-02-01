import { connect } from "@/dbConfig/dbConfig";
import Journal from "@/models/journalModel";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

connect(); // Connect to the database

export async function GET(req, ctx) {
  const id = ctx.params.id;
  try {
    const journal = await Journal.findById(id);
    return new NextResponse(JSON.stringify(task), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(null), { status: 500 });
  }
}

export async function PUT(req, ctx) {
  const id = ctx.params.id;
  try {
    const body = await req.json();
    const updateJournal = await Journal.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return new NextResponse(JSON.stringify(updateTask), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req, ctx) {
  const id = ctx.params.id;
  try {
    const journal = await Journal.findById(id);
    await Journal.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify({ msg: "Deleted" }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(null), { status: 500 });
  }
}
