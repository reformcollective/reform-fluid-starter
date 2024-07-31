import client from "@/api/client";
import { productSchema } from "@/types/product";
import { headers } from "next/headers";

async function getProduct(productIdOrSlug: string) {
  const { body } = await client(`products/${productIdOrSlug}`);
  return productSchema.parse(body);
}

// use this one to get from the server without having to use "useParams" and therefore "use client" lets us render on the server
function serverGetProduct() {
  const headersList = headers();
  const fullUrl = headersList.get("x-current-path") || "";
  const splitUrl = fullUrl.split("/");

  return getProduct(splitUrl[splitUrl.length - 1]);
}

export default getProduct;
export { serverGetProduct };
