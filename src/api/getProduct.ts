import { safeZodParse } from "@/api";
import client from "@/api/client";
import { Product, productSchema } from "@/types/product";

async function getProduct(productIdOrSlug: string): Promise<Product> {
  const { body } = await client(`products/${productIdOrSlug}`);
  return safeZodParse(body.data.product, productSchema);
}

export default getProduct;
