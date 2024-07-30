import client from "@/api/client";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  const urlParams = req.url?.split("/");
  const collectionId = urlParams?.[urlParams.length - 1];
  try {
    const fluidResponse = await client(`collections/${collectionId}`);
    const body = await fluidResponse.json();
    if (fluidResponse.status === 200) {
      return NextResponse.json(body, { status: 200 });
    }
    return NextResponse.json(
      { message: fluidResponse.statusText },
      { status: fluidResponse.status }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export { GET };
