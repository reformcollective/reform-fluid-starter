"use client";
import Button from "@/components/Button";
import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Product = ({ product }: { product: Product }) => {
  const { affiliateSlug } = useParams();
  return (
    <div className="snap-start">
      <div className="w-[364px]">
        <Link href={`/${affiliateSlug}/shop/${product.id}`}>
          <Image
            src={
              product.images[0] ||
              product.variants[0].image_urL ||
              "https://placehold.co/304x364/2F4F4F/black@3x.png"
            }
            height={304}
            width={364}
            alt={product.title}
          />
          <div className="inline-flex justify-between w-full my-4">
            <div>
              <h2 className="font-bold">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
            </div>
            <p className="font-bold">{product.display_price}</p>
          </div>
        </Link>
        <Button
          data-fluid-checkout-group-id={product.id}
          data-fluid-checkout-type="variant"
          data-variant={product.variants[0].id}
          id="add-to-cart-button"
          variant="transparent-dark"
          className="w-full text-center"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
