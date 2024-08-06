"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import CallToAction from "@/components/PageElements/CallToAction";
import OneFeature from "@/components/PageElements/OneFeature";
import Star from "@/svgs/Star";
import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

type Props = {
  product: Product;
};

const Page = ({ product }: Props) => {
  const [imageHoverIndex, setImageHoverIndex] = useState<number>();
  const [imageSelectedIndex, setImageSelectedIndex] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<number>(
    product.variants?.[0].id
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pt-28 px-20">
      <div className="pb-8">
        Shop &gt; <span className="font-semibold">{product.title}</span>
      </div>
      <div className="flex flex-row w-full gap-24">
        {!!(product.images.length || product.image_url) && (
          <div className="w-1/2 flex flex-row-reverse">
            <div className="h-full max-h-2/3 w-full relative">
              {product.images[imageHoverIndex ?? imageSelectedIndex]
                ?.image_url ||
                (product.image_url && (
                  <Image
                    src={
                      product.images[imageHoverIndex ?? imageSelectedIndex]
                        ?.image_url || product.image_url
                    }
                    alt={`image ${imageHoverIndex ?? imageSelectedIndex}`}
                    height={300}
                    width={700}
                  />
                ))}
            </div>
            {!!product.images.length && (
              <div className="w-20 mr-4 flex flex-col gap-y-4">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onMouseEnter={() => setImageHoverIndex(index)}
                    onMouseLeave={() => setImageHoverIndex(undefined)}
                    onClick={() => setImageSelectedIndex(index)}
                    className="relative cursor-pointer flex w-full h-24 bg-gray-100 items-center"
                  >
                    <div className="margin-0 absolute">
                      <Image
                        src={image.image_url}
                        alt={`image ${index}`}
                        height={96}
                        width={80}
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <div
          data-fluid-checkout-group={selectedVariant}
          className="w-1/2 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl">{product.title}</h1>
            <h2 className="text-2xl font-bold">{product.display_price}</h2>
          </div>
          <div className="inline-flex gap-2">
            <div className="inline-flex gap-1">
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
            </div>
            <div>(4.5 stars) • 10 reviews</div>
          </div>
          <p>{product.description}</p>
          <div className="flex flex-col gap-2">
            <div>Variant</div>
            <div>
              {product.variants.map((variant) => (
                <Button
                  onClick={() =>
                    variant.id !== selectedVariant &&
                    setSelectedVariant(variant.id)
                  }
                  variant={variant.buyable ? "primary" : "transparent-dark"}
                  key={variant.id}
                >
                  {variant.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="inline-flex gap-2">
            <Button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              variant="transparent-dark"
              className="pl-3.5 w-10"
            >
              -
            </Button>
            <Input
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setQuantity(value < 1 ? 1 : value);
              }}
              name="fluid-checkout-quantity"
              className="w-24 text-center"
              type="number"
              value={quantity}
            />
            <Button
              onClick={() => setQuantity((prev) => prev + 1)}
              variant="transparent-dark"
              className="pl-3.5 w-10"
            >
              +
            </Button>
          </div>
          <div className="flex flex-col gap-4 pb-6 ">
            <Button
              data-fluid-checkout-type="variant"
              data-fluid-checkout-group-id={selectedVariant}
              id="add-to-cart-button"
              variant="primary"
              className="w-full"
            >
              Add To Cart
            </Button>
            <Button
              data-fluid-checkout={selectedVariant}
              variant="transparent-dark"
              className="w-full"
            >
              Buy Now
            </Button>
            <div className="text-xs text-center">Free shipping over $50</div>
          </div>
          <div className="border-t border-black pb-6">
            <h3 className="font-bold text-xl my-4">Details</h3>
            <p>
              {product.feature_text ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}
            </p>
          </div>
          <div className="border-t border-black pb-6">
            <h3 className="font-bold text-xl my-4">Details</h3>
            <p>
              {product.shipping ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}
            </p>
          </div>
          <div className="border-t border-black pb-6">
            <h3 className="font-bold text-xl my-4">Details</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
      <div>
        <CallToAction />
        <OneFeature reversed />
      </div>
    </div>
  );
};
export default Page;
