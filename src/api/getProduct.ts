import client from "@/api/client";
import { productSchema } from "@/types/product";
import { headers } from "next/headers";

async function getProduct(productIdOrSlug: string) {
  const fluidResponse = await client(`products/${productIdOrSlug}`);
  if (!fluidResponse.ok)
    throw new Error(`Failed to fetch product ${productIdOrSlug}`);
  const parsedResponse = await fluidResponse.json();
  return productSchema.parse(parsedResponse);
}

// use this one to get from the server without having to use "useParams" and therefore "use client" lets us render on the server
function serverGetProduct() {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const splitUrl = fullUrl.split("/");
  return getProduct(splitUrl[splitUrl.length - 1]);
}

export default getProduct;
export { serverGetProduct };
