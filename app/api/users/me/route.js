import { getDataFromToken } from "../../../../lib/getDataFromToken";
import { NextResponse } from "next/server";
import { connect } from "../../../../lib/db";
import User from "../../../../models/user";

connect();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
