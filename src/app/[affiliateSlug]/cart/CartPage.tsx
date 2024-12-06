"use client";
import updateCart from "@/api/updateCart";
import Button from "@/components/Button";
import Input from "@/components/Input";
import LinkButton from "@/components/LinkButton";
import { CartItem, Carts } from "@/types/cart";
import { faTrash } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import { useState } from "react";

interface CartPageProps {
  cartInfo: Carts;
  slug: string;
}

export default function CartPage({ cartInfo, slug }: CartPageProps) {
  const [cart, setCart] = useState<CartItem[]>(cartInfo?.cart_items ?? []);
  const [subtotal, setSubtotal] = useState<string>(
    cartInfo?.sub_total ?? "0.00"
  );

  const updateQuantity = debounce(async (id: number, newQuantity: number) => {
    try {
      if (cartInfo?.id !== undefined) {
        await updateCart({ cartId: cartInfo.id, quantity: newQuantity });
      } else {
        console.error("Cart ID is undefined");
      }
      console.log(`Updated item ${id} to quantity ${newQuantity}`);
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  }, 300);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart?.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    updateQuantity(id, newQuantity);
  };

  const totalQuantityOnCart = cartInfo?.cart_items?.reduce(
    (total, item) => total + (item.quantity ?? 0),
    0
  );

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
          Your Cart ({totalQuantityOnCart ?? 0})
        </div>
        <LinkButton className="mt-4" href={`/${slug}/shop`}>
          Keep Shopping
        </LinkButton>
      </div>

      {cartInfo?.cart_items?.length ?? 0 > 0 ? (
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
                        {/* <div className="text-sm">Variant</div> */}
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="inline-flex gap-2">
                        <Button
                          variant="transparent-dark"
                          className="pl-4 pt-1.5 w-10 h-10"
                          onClick={() =>
                            handleQuantityChange(
                              item.id!,
                              Math.max((item.quantity || 1) - 1, 0)
                            )
                          }
                        >
                          -
                        </Button>
                        <Input
                          className="w-24 text-center h-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          type="number"
                          defaultValue={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id!,
                              Number(e.target.value)
                            )
                          }
                        />
                        <Button
                          variant="transparent-dark"
                          className="pl-4 pt-1.5 h-10 w-10"
                          onClick={() =>
                            handleQuantityChange(
                              item.id!,
                              (item.quantity || 0) + 1
                            )
                          }
                        >
                          +
                        </Button>
                        <FontAwesomeIcon
                          onClick={() => handleQuantityChange(item.id!, 0)}
                          className="ml-2 pt-2.5"
                          icon={faTrash}
                        />
                      </div>
                    </td>
                    <td className="text-right px-4">
                      {cartInfo.currency_symbol}
                      {item.price} ({cartInfo.currency_code})
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
              <Button
                className="w-full mt-2"
                variant="primary"
                onClick={onCheckoutClick}
              >
                Checkout
              </Button>
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
