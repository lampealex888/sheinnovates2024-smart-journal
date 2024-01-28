import { connect } from "@/dbConfig/dbConfig";
import Journal from "@/models/journalModel";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const journals = await Journal.find({ userId: userId });

    if (!journals) {
      return NextResponse.json({ message: "Journals not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Journal entries found",
      data: journals,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
