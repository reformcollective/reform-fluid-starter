import { getCollection } from "@/api";
import ProductGrid from "@/components/ProductGrid";
import chevronDown from "@/svgs/chevron-down.svg";
import { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";

type PageProps = {
  params: Record<string, any>;
};

const Page = async ({ params }: PageProps) => {
  const collection = await getCollection(params.collectionSlug);
  return (
    <div className="px-20 w-full py-28">
      <div className="text-5xl font-bold mb-24">{collection.title}</div>
      <div className="inline-flex w-full justify-between mb-24 px-4">
        <div className="inline-flex gap-6">
          <span>Filter: </span>
          <span>
            <button>
              Availibility{" "}
              <Image
                alt="chevron-down"
                height={10}
                width={10}
                src={chevronDown}
              />
            </button>
          </span>
          <span>
            <button>
              Price{" "}
              <Image
                alt="chevron-down"
                height={10}
                width={10}
                src={chevronDown}
              />
            </button>
          </span>
        </div>
        <div className="inline-flex gap-6">
          <span>Sort: </span>
          <span>
            <button>
              Best Selling{" "}
              <Image
                alt="chevron-down"
                height={10}
                width={10}
                src={chevronDown}
              />
            </button>
          </span>
          <span>
            {collection.products?.length || 0} Product
            {collection.products?.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
      <ProductGrid products={collection.products} />
    </div>
  );
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const collection = await getCollection(params.collectionSlug);
  const headersList = headers();
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
