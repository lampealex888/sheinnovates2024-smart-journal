import { connect } from "../../../lib/db";
import Journal from "../../../models/journal";
import { NextResponse } from "next/server";
import { getDataFromToken } from "../../../lib/getDataFromToken";

export async function GET(request) {
  await connect();
  try {
    const userId = await getDataFromToken(request);
    const journals = await Journal.find({ userId: userId });

    if (!journals) {
      return NextResponse.json({ message: "Journals not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Journal entries found",
      data: journals,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  await connect();
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
    }, {status: 201});
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
