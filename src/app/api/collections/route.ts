import client from "@/api/client";
import { NextResponse } from "next/server";

async function GET() {
  try {
    const { body, statusText, status } = await client(`collections/`);
    if (status === 200) {
      return NextResponse.json(body, { status: 200 });
    }
    return NextResponse.json({ message: statusText }, { status: status });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export { GET };
