import client from "@/api/client";

async function getProducts({ collectionId }: { collectionId?: string }) {
  const fluidResponse = await client(
    `products/${collectionId ? `?collection_id=${collectionId}` : ""}`
  );
  return await fluidResponse.json();
}

export default getProducts;
