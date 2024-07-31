import { getProducts } from "@/api";
import client from "@/api/client";
import { collectionSchema } from "@/types/collection";
import { headers } from "next/headers";

async function getCollection(collectionId: string) {
  const products = await getProducts({ collectionId });

  const { body } = await client(`collections/${collectionId}`);

  body.products = products;

  return collectionSchema.parse(body);
}

// use this one to get from the server without having to use "useParams" and therefore "use client" lets us render on the server
function serverGetCollection() {
  const headersList = headers();
  const fullUrl = headersList.get("x-current-path") || "";
  const splitUrl = fullUrl.split("/");
  return getCollection(splitUrl[splitUrl.length - 1]);
}

export default getCollection;
export { serverGetCollection };
