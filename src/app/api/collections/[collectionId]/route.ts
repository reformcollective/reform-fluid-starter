import client from "@/api/client";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  const urlParams = req.url?.split("/");
  const collectionId = urlParams?.[urlParams.length - 1];
  try {
    const { body, status, statusText } = await client(
      `collections/${collectionId}`
    );
    if (status === 200) {
      return NextResponse.json(body, { status: 200 });
    }
    return NextResponse.json({ message: statusText }, { status });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export { GET };
