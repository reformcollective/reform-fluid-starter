import { getProducts } from "@/api";
import client from "@/api/client";
import type { Collection } from "@/types/collection";
import { collectionSchema } from "@/types/collection";
import { z } from "zod";

const collectionArraySchema = z.array(collectionSchema);

async function getCollections() {
  "use server";
  const { body } = await client("collections");
  const productPromisesByCollectionIds = body.map((collection: Collection) =>
    getProducts({ collectionId: collection.id.toString() })
  );
  const products = await Promise.all(productPromisesByCollectionIds);
  const collectionsWithMappedProducts = body.map(
    (collection: Collection, index: number) => ({
      ...collection,
      products: products[index],
    })
  );
  return collectionArraySchema.parse(collectionsWithMappedProducts);
}

export default getCollections;
