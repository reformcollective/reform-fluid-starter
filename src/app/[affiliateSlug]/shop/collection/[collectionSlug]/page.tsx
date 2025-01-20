import { getCollection } from "@/api";
import { type Metadata } from "next";
import { headers } from "next/headers";

type PageProps = {
  params: Record<string, any>;
};

const Page = async ({ params }: PageProps) => {
  const collection = await getCollection(params.collectionSlug);
  const { products } = collection;

  return (
    <div className="px-20 w-full py-28">
      <div className="text-5xl font-bold mb-24">{collection.title}</div>
      <div className="inline-flex w-full justify-between mb-24 px-4">
        <div className="inline-flex gap-6">
          <span>Filter: </span>
          <span>
            <button>
              Availibility{" "}
            
            </button>
          </span>
          <span>
            <button>
              Price{" "}
           
            </button>
          </span>
        </div>
        <div className="inline-flex gap-6">
          <span>Sort: </span>
          <span>
            <button>
              Best Selling{" "}
         
            </button>
          </span>
          <span>
            {collection.products?.length || 0} Product
            {collection.products?.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const collection = await getCollection(params.collectionSlug);
  const headersList = await headers();
  return {
    title: collection.title,
    description: collection.description,
    openGraph: {
      title: collection.title,
      description: collection.description || "",
      url: headersList.get("x-url") || "",
      images: [
        {
          url: collection.image_url || "",
          width: 800,
          height: 600,
          alt: `${collection.title} main image`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      images: [
        {
          url: collection.image_url || "",
          width: 800,
          height: 600,
          alt: `${collection.title} main image`,
        },
      ],
    },
  };
}

export default Page;
