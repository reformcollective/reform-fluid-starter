"use client";
import LinkButton from "@/components/LinkButton";
import ProductCarousel from "@/components/ProductCarousel";
import type { Collection } from "@/types/collection";
import { useParams } from "next/navigation";

type Props = {
  collection: Collection;
};

const Collection = ({ collection }: Props) => {
  const { affiliateSlug } = useParams();
  return (
    !!collection.products?.length && (
      <div className="w-full" key={collection.id}>
        <div className="inline-flex justify-between w-full">
          <div className="text-2xl font-bold mb-4">{collection.title}</div>
          <LinkButton
            href={`/${affiliateSlug}/shop/collection/${collection.id}`}
            variant="transparent-dark"
          >
            View All
          </LinkButton>
        </div>
        <div>
          <ProductCarousel products={collection.products} />
        </div>
      </div>
    )
  );
};

export default Collection;
