"use client";
import updateCart from "@/api/updateCart";
import Button from "@/components/Button";
import Input from "@/components/Input";
import LinkButton from "@/components/LinkButton";
import { faTrash } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import { useState } from "react";

interface CartItem {
  id?: number | null;
  image?: string;
  title?: string;
  price?: string | null;
  quantity?: number;
  variant_id?: number | null;
  currency_code?: string;
}

interface CartPageProps {
  cartItems: CartItem[];
  slug: string;
}

export default function CartPage({ cartItems, slug }: CartPageProps) {
  const [cart, setCart] = useState<CartItem[]>(cartItems);

  const updateQuantity = debounce(async (id: number, newQuantity: number) => {
    try {
      await updateCart({ cart_items: { variant: id, quantity: newQuantity } });
      console.log(`Updated item ${id} to quantity ${newQuantity}`);
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  }, 300);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    updateQuantity(id, newQuantity);
  };

  const subtotal =
    cartItems
      ?.reduce(
        (total, item) =>
          total + Number(item.price || 0) * (item?.quantity ?? 0),
        0
      )
      .toFixed(2) || "0.00";

  const totalQuantityOnCart = cartItems?.reduce(
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

      {cartItems?.length ? (
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
                {cartItems?.map((item) => (
                  <tr key={item.id} className="py-4 px-4 border-b border-black">
                    <td className="flex py-4 px-4 min-w-96">
                      <img
                        src={item.image}
                        alt="placeholder image"
                        height={100}
                        width={100}
                      />
                      <div className="flex flex-col ml-4 pt-8 gap-y-1">
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm">Variant</div>
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
                          className="w-24 text-center h-10"
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
                              item.variant_id!,
                              (item.quantity || 0) + 1
                            )
                          }
                        >
                          +
                        </Button>
                        <FontAwesomeIcon
                          onClick={() =>
                            handleQuantityChange(item.variant_id!, 0)
                          }
                          className="ml-2 pt-2.5"
                          icon={faTrash}
                        />
                      </div>
                    </td>
                    <td className="text-right px-4">${item.price} (USD)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full flex justify-end">
            <div className="flex flex-col justify-end text-end gap-4 w-full max-w-[450px]">
              <div className="font-bold text-2xl">
                Subtotal: ${subtotal} (USD)
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
