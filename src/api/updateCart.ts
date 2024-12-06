"use server";
import { safeZodParse } from "@/api";
import client from "@/api/client";
import { Carts, cartSchema } from "@/types/cart";
import { CartItems, cartItemsSchema } from "@/types/cartItems";
import { cookies } from "next/headers";

type TUpdateCartProps = {
  cartId: number;
  quantity: number;
};

async function updateCart(payload: TUpdateCartProps) {
  const cookiesList = cookies();
  const cartToken = cookiesList.get("cartToken")?.value;
  const visitorToken = cookiesList.get("fluid_v")?.value;

  const { body } = await client(`cart_items/${payload.cartId}`, false, {
    method: "PUT",
    body: JSON.stringify({
      cart_token: cartToken,
      visitor_token: visitorToken,
      cart_item: { quantity: payload.quantity },
    }),
  });
  console.log(body);

  // const data = {
  //   ...body,
  //   sub_total: body?.cart_totals?.sub_total,
  // };

  // return safeZodParse(data, cartItemsSchema);
}

export default updateCart;
