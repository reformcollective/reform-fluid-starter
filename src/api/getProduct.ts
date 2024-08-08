import client from "@/api/client";
import { Product, productSchema } from "@/types/product";

async function getProduct(productIdOrSlug: string): Promise<Product> {
  const { body } = await client(`products/${productIdOrSlug}`);
  return productSchema.parse(body.data.product);
}

export default getProduct;
