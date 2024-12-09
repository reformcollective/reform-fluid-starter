import { getCart } from "@/api";
import CartPage from "./CartPage";

type PageProps = {
  params: Record<string, any>;
};

const Page = async ({ params }: PageProps) => {
  const { affiliateSlug } = params;
  // TODO: on cookies cartItemsLength change refetch cart
  const cart = await getCart();

  return (
    <CartPage
      cartInfo={Array.isArray(cart) ? null : cart}
      slug={affiliateSlug}
    />
  );
};

export default Page;
