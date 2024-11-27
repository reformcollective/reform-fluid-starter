"use client";
import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Product = ({ product }: { product: Product }) => {
  const { affiliateSlug } = useParams();
  return (
    <div className="snap-start">
      <div className="w-[364px]">
        <Link href={`/${affiliateSlug}/shop/${product.slug}`}>
          <Image
            src={
              product.images[0]?.image_url ||
              product.image_url ||
              product.variants[0]?.images[0]?.image_url ||
              product.variants[0]?.image_urL ||
              "https://placehold.co/304x364/2F4F4F/black@3x.png"
            }
            height={304}
            width={364}
            alt={product.title}
          />
          <div className="inline-flex justify-between w-full my-4">
            <div>
              <h2 className="font-bold">{product.title}</h2>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
            <p className="font-bold">{product.display_price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
