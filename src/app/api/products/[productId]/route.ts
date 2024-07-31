import client from "@/api/client";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  const urlParams = req.url?.split("/");
  const productId = urlParams?.[urlParams.length - 1];
  if (productId) {
    try {
      const { body, status, statusText } = await client(
        `products/${productId}`
      );
      if (status !== 200) {
        return NextResponse.json({ message: statusText }, { status });
      }
      return NextResponse.json(body, { status });
    } catch (error) {
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }
}

export { GET };
