"use server";
import { safeZodParse } from "@/api";
import client from "@/api/client";
import { Carts, cartSchema } from "@/types/cart";
import { cookies } from "next/headers";

async function getCart(): Promise<Carts> {
  try {
    const cookiesList = cookies();
    const cartToken = cookiesList.get("cartToken")?.value;

    const { body } = await client(`carts/${cartToken}`, false);

    return safeZodParse(body, cartSchema);
  } catch (error) {
    return {
      id: null,
      attributable_id: null,
      attributable_type: null,
      ship_to: null,
      bill_to: null,
      cart_items: [],
      available_payment_methods: [],
      discount_code: null,
      payment_method: null,
    };
  }
}

export default getCart;
