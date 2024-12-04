"use server";
import { safeZodParse } from "@/api";
import client from "@/api/client";
import { Carts, cartSchema } from "@/types/cart";
import { cookies } from "next/headers";

async function getCart(): Promise<Carts> {
  const cookiesList = cookies();
  const cartToken = cookiesList.get("cartToken")?.value;

  const { body } = await client(`carts/${cartToken}`, false);

  return safeZodParse(body, cartSchema);
}

export default getCart;
