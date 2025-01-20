import { safeZodParse } from "@/api";
import client from "@/api/client";
import { type Product, productSchema } from "@/types/product";
import { z } from "zod";

const productsSchema = z.array(productSchema);

type Props = {
  collectionId?: string;
  language?: string;
  country?: string;
};

async function getProducts({
  collectionId,
  language,
  country,
}: Props): Promise<Product[]> {
  const params = new URLSearchParams();
  if (language) params.set("lang", language);
  if (country) params.set("country_code", country);
  if (collectionId) params.set("collection_id", collectionId);

  const { body } = await client(
    `products/${params.toString() ? `?${params.toString()}` : ""}`
  );
  return safeZodParse(body.data.products, productsSchema);
}

export default getProducts;
