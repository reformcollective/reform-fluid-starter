import { getCart } from "@/api";
import updateCart from "@/api/updateCart";
import Button from "@/components/Button";
import Input from "@/components/Input";
import LinkButton from "@/components/LinkButton";
import { faTrash } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PageProps = {
  params: Record<string, any>;
};

const Page = async ({ params }: PageProps) => {
  const { affiliateSlug } = params;
  const { cart_items } = await getCart();

  const getSubtotal = () => {
    let subtotal = 0;
    cart_items?.map((item) => {
      subtotal += Number(item.price);
    });
    return subtotal.toFixed(2);
  };

  const updateQuantity = async (id: number, quantity: number) => {
    try {
      const updateItem = {
        cart_items: { id, quantity },
      };
      const res = await updateCart(updateItem);
      console.log(res);
    } catch (error) {
      console.error("Failed to update cart item", error);
    }
  };

  return (
    <div className="container mx-auto p-8 md:px-10 md:py-16 lg:px-20 lg:py-28 flex flex-col gap-8 md:gap-y-20">
      <div className="inline-flex justify-between items-center">
        <div className="text-2xl md:text-5xl font-bold">
          Your Cart ({cart_items?.length})
        </div>
        <LinkButton className="mt-4" href={`/${affiliateSlug}/shop`}>
          Keep Shopping
        </LinkButton>
      </div>

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
            {cart_items?.map((item) => (
              <tr key={item.id} className="py-4 px-4 border-b border-black">
                <td className="flex py-4 px-4 min-w-96">
                  <img
                    src={`https://placehold.co/${145}x${128}/2F4F4F/black@3x.png`}
                    alt="placeholder image"
                    height={128}
                    width={145}
                  />
                  <div className="flex flex-col ml-4 pt-8 gap-y-1">
                    <div className="font-semibold">Product Name</div>
                    <div className="text-sm">Variant</div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="inline-flex gap-2">
                    <Button
                      variant="transparent-dark"
                      className="pl-4 pt-1.5 w-10 h-10"
                    >
                      -
                    </Button>
                    <Input
                      className="w-24 text-center h-10"
                      type="number"
                      defaultValue={item.quantity}
                    />
                    <Button
                      variant="transparent-dark"
                      className="pl-4 pt-1.5 h-10 w-10"
                    >
                      +
                    </Button>
                    <FontAwesomeIcon className="ml-2 pt-2.5" icon={faTrash} />
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
            Subtotal: ${getSubtotal()} (USD)
          </div>
          <div>Taxes and shipping calculated at checkout</div>
          <Button className="w-full mt-2" variant="primary">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
