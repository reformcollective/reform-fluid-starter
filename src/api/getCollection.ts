import { getProducts, safeZodParse } from "@/api";
import client from "@/api/client";
import { collectionSchema } from "@/types/collection";

async function getCollection(collectionId: string) {
  const products = await getProducts({ collectionId });

  const { body } = await client(`collections/${collectionId}`);

  body.data.collection.products = products;
  return safeZodParse(body.data.collection, collectionSchema);
}

export default getCollection;
