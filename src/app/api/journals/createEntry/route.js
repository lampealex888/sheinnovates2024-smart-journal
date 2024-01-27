import { connect } from "@/dbConfig/dbConfig";
import Journal from "@/models/journalModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, date, content, userId } = reqBody;

    const newJournal = new Journal({
      title,
      date,
      content,
      userId,
    });

    const savedJournal = await newJournal.save();

    return NextResponse.json({
      message: "Journal entry created successfully",
      success: true,
      savedJournal,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
