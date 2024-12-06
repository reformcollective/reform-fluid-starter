import { getCart, getProduct } from "@/api";
import CartPage from "./CartPage";

type PageProps = {
  params: Record<string, any>;
};

const Page = async ({ params }: PageProps) => {
  const { affiliateSlug } = params;
  const cart = await getCart();

  console.log(cart);

  return (
    <CartPage
      cartInfo={Array.isArray(cart) ? null : cart}
      slug={affiliateSlug}
    />
  );
};

export default Page;
