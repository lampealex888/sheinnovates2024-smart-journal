import { connect } from "@/dbConfig/dbConfig";
import Journal from "@/models/journalModel";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"

connect(); // Connect to the database

export async function GET(request) {
  try {
    const journal = await Journal.findOne({ _id: new ObjectId("65b608e1bda9e68673dc6957") });

    if (!journal) {
      return NextResponse.json({ message: "Journal entry not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Journal entry found",
      data: journal,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
