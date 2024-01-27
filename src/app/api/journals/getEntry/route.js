import { connect } from "@/dbConfig/dbConfig";
import Journal from "@/models/journalModel";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect(); // Connect to the database

export async function GET(request) {
  try {
    const journal = await Journal.findOne({ _id: request.entryId});

    return NextResponse.json({
      message: "Journal entry found",
      data: journal,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
