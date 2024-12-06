import { getCart, getProduct } from "@/api";
import CartPage from "./CartPage";

type PageProps = {
  params: Record<string, any>;
};

const Page = async ({ params }: PageProps) => {
  const { affiliateSlug } = params;
  const cart = await getCart();

  const cartItemsWithDetails = await Promise.all(
    (cart?.cart_items || []).map(async (item) => {
      try {
        const productDetails = await getProduct(`${item.variant_id}`);

        return {
          ...item,
          title: productDetails.title,
          image: productDetails.image_url,
          price: productDetails.price,
          currencyCode: productDetails.currency_code,
          // variant: productDetails.variants.
        };
      } catch (error) {
        console.error(`Failed to fetch product ${item.id}:`, error);
        return {
          ...item,
          title: "Unknown Product",
          image: "https://placehold.co/145x128/2F4F4F/black@3x.png",
        };
      }
    })
  );

  return <CartPage cartItems={cartItemsWithDetails} slug={affiliateSlug} />;
};

export default Page;
