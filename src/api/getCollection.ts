import { getProducts, safeZodParse } from "@/api";
import client from "@/api/client";
import { Collection, collectionSchema } from "@/types/collection";
import { cookies } from "next/headers";

async function getCollection(collectionId: string): Promise<Collection> {
  const cookiesList = cookies();
  const products = await getProducts({
    collectionId,
    language: cookiesList.get("language")?.value,
    country: cookiesList.get("country")?.value,
  });

  const { body } = await client(`collections/${collectionId}`);

  body.data.collection.products = products;
  return safeZodParse(body.data.collection, collectionSchema);
}

export default getCollection;
