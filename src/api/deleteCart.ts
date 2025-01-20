"use server";
import { safeZodParse } from "@/api";
import client from "@/api/client";
import { cartItemSchema } from "@/types/cart";
import { cookies } from "next/headers";

import { z } from "zod";

const deleteCartSchema = z
  .object({
    cart_items: z.array(cartItemSchema).nullable().optional(),
    sub_total: z.string().optional(),
  })
  .nullable();

type DeleteCart = z.infer<typeof deleteCartSchema>;

type TDeleteCartProps = {
  cartId: number;
};

async function deleteCart(payload: TDeleteCartProps): Promise<DeleteCart | []> {
  const cookiesList = await cookies();
  const cartToken = cookiesList.get("cartToken")?.value;
  const visitorToken = cookiesList.get("fluid_v")?.value;

  const { body } = await client(`cart_items/${payload.cartId}`, false, {
    method: "DELETE",
    body: JSON.stringify({
      cart_token: cartToken,
      visitor_token: visitorToken,
    }),
  });

  const data = {
    cart_items: body?.[0]?.cart?.cart_items ?? [],
    sub_total: body?.[0]?.cart_totals?.sub_total ?? "0.00",
  };

  return safeZodParse(data, deleteCartSchema);
}

export default deleteCart;
