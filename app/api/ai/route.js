import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env[process.env.OPENAI_API_KEY],
});

export async function POST(request) {
  const reqBody = await request.json();
  const { content } = reqBody;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who elaborates on journal summaries and returns JSON files",
      },
      { role: "user", content: content },
    ],
    temperature: 0.7,
  });

  return NextResponse.json({
    message: "Journal entries found",
    body: completion.choices[0],
  });
}
