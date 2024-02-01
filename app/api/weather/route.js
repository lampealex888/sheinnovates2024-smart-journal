import {
  BedrockRuntimeClient,
  InvokeModelWithResponseStreamCommand,
} from "@aws-sdk/client-bedrock-runtime";

export async function POST(request) {
  const REGION = process.env.NEXT_PUBLIC_AWS_REGION;
  const client = new BedrockRuntimeClient({
    region: REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
    },
  });

  const modelId = process.env.NEXT_PUBLIC_BEDROCK_MODEL_ID;
  const prompt = request;

  const payload = {
    prompt,
    maxTokens: 500,
    temperature: 0.5,
  };

  const command = new InvokeModelCommand({
    body: JSON.stringify(payload),
    contentType: "application/json",
    accept: "application/json",
    modelId: modelId,
  });

  try {
    const response = await client.send(command);
    const decodedResponseBody = new TextDecoder().decode(response.body);

    const responseBody = JSON.parse(decodedResponseBody);

    responseBody.completions[0].data.text;
  } catch (error) {
    console.log(error);
  }
}
