import { safeZodParse } from "@/api";
import client from "@/api/client";
import { productSchema } from "@/types/product";
import { z } from "zod";

const productsSchema = z.array(productSchema);

type Props = {
  collectionId?: string;
};

async function getProducts({ collectionId }: Props) {
  const { body } = await client(
    `products/${collectionId ? `?collection_id=${collectionId}` : ""}`
  );
  return safeZodParse(body.data.products, productsSchema);
}

export default getProducts;
