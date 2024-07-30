import { getProducts } from "@/api";
import client from "@/api/client";
import type { Collection } from "@/types/collection";
import { collectionSchema } from "@/types/collection";
import { z } from "zod";

const collectionArraySchema = z.array(collectionSchema);

async function getCollections() {
  "use server";
  const fluidResponse = await client("collections");
  const body = await fluidResponse.json();
  const collectionIds = body.map((collection: Collection) =>
    getProducts({ collectionId: collection.id })
  );
  const products = await Promise.all(collectionIds);
  const collectionsWithMappedProducts = body.map(
    (collection: Collection, index: number) => ({
      ...collection,
      products: products[index],
    })
  );
  return collectionArraySchema.parse(collectionsWithMappedProducts);
}

export default getCollections;
