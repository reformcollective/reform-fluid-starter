import deleteCart from "@/api/deleteCart";
import updateCart from "@/api/updateCart";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const payload = await req.json();
    const updatedCart = await updateCart(payload);
    return NextResponse.json(updatedCart);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const payload = await req.json();
    const updatedCart = await deleteCart(payload);
    return NextResponse.json(updatedCart);
  } catch (error) {
    console.log("DELETE failed due to:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
