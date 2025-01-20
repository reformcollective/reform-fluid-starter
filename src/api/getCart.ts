"use server";
import { safeZodParse } from "@/api";
import client from "@/api/client";
import { type Carts, cartSchema } from "@/types/cart";
import { cookies } from "next/headers";

async function getCart(): Promise<Carts | []> {
  try {
    const cookiesList = await cookies();
    const cartToken = cookiesList.get("cartToken")?.value;
    const visitorToken = cookiesList.get("fluid_v")?.value;

    const { body } = await client(
      `carts/${cartToken}/cart_by_token?visitor_token=${visitorToken}`,
      false
    );

    return safeZodParse(body, cartSchema);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getCart;
