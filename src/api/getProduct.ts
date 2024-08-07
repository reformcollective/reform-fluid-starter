import client from "@/api/client";
import { Product, productSchema } from "@/types/product";

async function getProduct(productIdOrSlug: string): Promise<Product> {
  const result = await client(`products/${productIdOrSlug}`);
  return productSchema.parse(result.body);
}

export default getProduct;
