import { connect } from "@/dbConfig/dbConfig";
import Journal from "@/models/journalModel";
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function GET(request) {
  try {
    const journal = await Journal.findOne({ _id: request});

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
