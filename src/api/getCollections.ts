"use server";
import { getProducts, safeZodParse } from "@/api";
import client from "@/api/client";
import type { Collection } from "@/types/collection";
import { collectionSchema } from "@/types/collection";
import { z } from "zod";

const collectionArraySchema = z.array(collectionSchema);

async function getCollections(): Promise<Collection[]> {
  const { body } = await client("collections");
  const { collections } = body.data;
  const productPromisesByCollectionIds = collections.map(
    (collection: Collection) =>
      getProducts({ collectionId: collection.id.toString() })
  );
  const products = await Promise.all(productPromisesByCollectionIds);
  const collectionsWithMappedProducts = collections.map(
    (collection: Collection, index: number) => ({
      ...collection,
      products: products[index],
    })
  );

  return safeZodParse(collectionsWithMappedProducts, collectionArraySchema);
}

export default getCollections;
