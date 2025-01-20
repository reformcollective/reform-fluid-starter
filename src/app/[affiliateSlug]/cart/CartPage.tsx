"use client";

import type { CartItem, Carts } from "@/types/cart";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface CartPageProps {
  cartInfo: Carts;
  slug: string;
}

export default function CartPage({ cartInfo, slug }: CartPageProps) {
  const [cart, setCart] = useState<CartItem[] | []>(cartInfo?.cart_items ?? []);
  const [subtotal, setSubtotal] = useState<string>(
    cartInfo?.sub_total ?? "0.00"
  );
  const [cookie, setCookie] = useCookies();

  const refetchCart = async () => {
    try {
      const response = await fetch("/api/cart");
      if (!response.ok) throw new Error("Failed to fetch cart");

      const updatedCart = await response.json();
      setCart(updatedCart.cart_items);
      setSubtotal(updatedCart.sub_total);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    refetchCart();
  }, [cookie.cartItemsLength]);

  const updateCart = debounce(
    async ({
      id,
      newQuantity,
      subscribed,
    }: {
      id: number;
      newQuantity?: number;
      subscribed?: boolean;
    }) => {
      try {
        const response = await fetch("/api/cart", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartId: id,
            quantity: newQuantity,
            subscription: subscribed,
          }),
        });

        if (!response.ok) throw new Error("Failed to update cart");

        const updatedCart = await response.json();

        setCart((prevCart) =>
          prevCart?.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: newQuantity ?? item.quantity,
                  subscription: subscribed ?? item.subscription,
                }
              : item
          )
        );
        setSubtotal(updatedCart.sub_total);
      } catch (error) {
        console.error("Failed to update cart item:", error);
      }
    },
    100
  );

  const totalQuantity = (cart ?? [])?.reduce(
    (total, item) => total + (item.quantity ?? 0),
    0
  );

  useEffect(() => {
    setCookie("cartItemsLength", totalQuantity, { path: "/" });
  }, [totalQuantity, setCookie]);

  const handleSubscriptionChange = (id: number, subscribed: boolean) => {
    updateCart({ id, subscribed });
    setCart((prevCart) =>
      prevCart?.map((item) =>
        item.id === id
          ? {
              ...item,
              subscription: subscribed ?? item.subscription,
            }
          : item
      )
    );
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    updateCart({ id, newQuantity: quantity });
  };

  const handleItemDelete = async (id: number) => {
    try {
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId: id }),
      });

      if (!response.ok) throw new Error("Failed to delete cart-item");

      const updatedCart = await response.json();
      setCart(updatedCart.cart_items.length > 0 ? updatedCart.cart_items : []);

      if (updatedCart.sub_total) setSubtotal(updatedCart.sub_total);
    } catch (error) {
      console.error("Failed to delete cart item:", error);
    }
  };

  const onCheckoutClick = () => {
    const cartWidget = document.getElementById("cart-widget");
    if (cartWidget) {
      cartWidget.click();
    }
  };

  return (
    <div className="container mx-auto p-8 md:px-10 md:py-16 lg:px-20 lg:py-28 flex flex-col gap-8 md:gap-y-20">
      <div className="inline-flex justify-between items-center">
        <div className="text-2xl md:text-5xl font-bold">
          Your Cart ({totalQuantity ?? 0})
        </div>
        <a className="mt-4" href={`/${slug}/shop`}>
          Keep Shopping
        </a>
      </div>

      {cart?.length > 0 ? (
        <>
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="border-b border-black ">
                <tr>
                  <td className="px-4 pb-4 min-w-96">Product</td>
                  <td className="pr-36 pl-4 pb-4 text-end">Quantity</td>
                  <td className="px-4 pb-4 text-right">Total</td>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item) => (
                  <tr key={item.id} className="py-4 px-4 border-b border-black">
                    <td className="flex py-4 px-4 min-w-96">
                      <img
                        src={item.product?.image_url}
                        alt={item?.product?.title}
                        height={100}
                        width={100}
                      />
                      <div className="flex flex-col ml-4 pt-8 gap-y-1">
                        <div className="font-semibold">
                          {item.product?.title}
                        </div>
                        <div>
                          <label
                            htmlFor="subscribe"
                            className="text-sm flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="subscribe"
                              onChange={(e) =>
                                handleSubscriptionChange(
                                  item.id!,
                                  e.target.checked
                                )
                              }
                              checked={item.subscription}
                            />
                            Subscribe
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="inline-flex gap-2">
                        <button
                          className="pl-4 pt-1.5 w-10 h-10"
                          onClick={() =>
                            handleQuantityChange(
                              item.id!,
                              Math.max((item.quantity || 1) - 1, 0)
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          className="w-24 text-center h-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id!,
                              Number(e.target.value)
                            )
                          }
                        />
                        <button
                          className="pl-4 pt-1.5 h-10 w-10"
                          onClick={() =>
                            handleQuantityChange(
                              item.id!,
                              (item.quantity || 0) + 1
                            )
                          }
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleItemDelete(item.id!)}
                        >
                          trash
                        </button>
                      </div>
                    </td>
                    <td className="text-right px-4">
                      {cartInfo?.currency_symbol}
                      {(parseFloat(item.price) * item.quantity).toFixed(2)} (
                      {cartInfo?.currency_code})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full flex justify-end">
            <div className="flex flex-col justify-end text-end gap-4 w-full max-w-[450px]">
              <div className="font-bold text-2xl">
                Subtotal: {cartInfo?.currency_symbol}
                {subtotal} ({cartInfo?.currency_code})
              </div>
              <div>Taxes and shipping calculated at checkout</div>
              <button
                className="w-full mt-2"
                onClick={onCheckoutClick}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-2xl">
          There are no products in your cart currently.
        </div>
      )}
    </div>
  );
}
