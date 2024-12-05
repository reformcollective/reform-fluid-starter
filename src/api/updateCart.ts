"use server";
import { safeZodParse } from "@/api";
import client from "@/api/client";
import { Carts, cartSchema } from "@/types/cart";
import { cookies } from "next/headers";

// TODO: update the API body and function params
async function updateCart(changedData: Record<string, any>): Promise<Carts> {
  const cookiesList = cookies();
  const cartToken = cookiesList.get("cartToken")?.value;

  const { body } = await client(`carts/${cartToken}`, false, {
    method: "PATCH",
    body: JSON.stringify(changedData),
  });

  return safeZodParse(body, cartSchema);
}

export default updateCart;
