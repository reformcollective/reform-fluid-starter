"use server";
import { safeZodParse } from "@/api";
import client from "@/api/client";
import { type CartItems, cartItemsSchema } from "@/types/cartItems";
import { cookies } from "next/headers";

type TUpdateCartProps = {
  cartId: number;
  quantity?: number;
  subscription?: boolean;
};

async function updateCart(payload: TUpdateCartProps): Promise<CartItems> {
  const cookiesList = await cookies();
  const cartToken = cookiesList.get("cartToken")?.value;
  const visitorToken = cookiesList.get("fluid_v")?.value;

  const { body } = await client(`cart_items/${payload.cartId}`, false, {
    method: "PUT",
    body: JSON.stringify({
      cart_token: cartToken,
      visitor_token: visitorToken,
      cart_item: {
        quantity: payload.quantity,
        subscription: payload.subscription,
      },
    }),
  });

  const data = {
    ...body,
    sub_total: body?.cart_totals?.sub_total,
  };

  return safeZodParse(data, cartItemsSchema);
}

export default updateCart;
