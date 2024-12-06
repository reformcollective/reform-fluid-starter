"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Star from "@/svgs/Star";
import { Product } from "@/types/product";
import cx from "classnames";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    addFluidCheckoutListeners?: () => void;
  }
}
type Props = {
  product: Product;
};

const Page = ({ product }: Props) => {
  const [imageHoverIndex, setImageHoverIndex] = useState<number>();
  const [imageSelectedIndex, setImageSelectedIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<number | undefined>(
    product.variants?.[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [subscribe, setSubscribe] = useState<"subscription" | "regular">(
    "regular"
  );

  useEffect(() => {
    if (window.addFluidCheckoutListeners) {
      window.addFluidCheckoutListeners();
    }
  }, []);

  return (
    <div className="container mx-auto px-10 py-16 md:pt-28 lg:px-20">
      <div className="pb-8">
        Shop &gt; <span className="font-semibold">{product.title}</span>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-24">
        {!!(product.images.length || product.image_url) && (
          <div className="w-full md:w-1/2 flex flex-row-reverse">
            <div className="h-full max-h-2/3 w-full relative">
              {(product.images[imageHoverIndex ?? imageSelectedIndex]
                ?.image_url ||
                product.image_url) && (
                <img
                  src={
                    product.images[imageHoverIndex ?? imageSelectedIndex]
                      ?.image_url || product.image_url
                  }
                  alt={`image ${imageHoverIndex ?? imageSelectedIndex}`}
                  height={300}
                  width={700}
                />
              )}
            </div>
            {!!product.images.length && (
              <div className="w-20 mr-4 flex flex-col gap-y-4">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onMouseEnter={() => setImageHoverIndex(index)}
                    onMouseLeave={() => setImageHoverIndex(undefined)}
                    onClick={() => setImageSelectedIndex(index)}
                    className={cx(
                      "relative cursor-pointer flex w-full h-24 border items-center box-border",
                      imageSelectedIndex === index
                        ? "border-gray-500 bg-gray-100"
                        : "border-gray-200"
                    )}
                  >
                    <div className="margin-0 absolute">
                      <img
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
          className="md:w-1/2 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl md:text-4xl">{product.title}</h1>
            <h2 className="text-2xl font-bold">{product.display_price}</h2>
          </div>
          <div className="lg:inline-flex gap-2">
            <div className="inline-flex gap-1">
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
            </div>
            <div>(4.5 stars) • 10 reviews</div>
          </div>
          {product.description && (
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          )}
          {!!product.variants?.length && (
            <div className="flex flex-col gap-2">
              <div>Variant</div>
              <div className="flex flex-row gap-2 overflow-x-auto overflow-y-hidden">
                {product.variants.map((variant, index) => (
                  <Button
                    className={cx(
                      variant.id === selectedVariant
                        ? "bg-gray-100 font-bold"
                        : "",
                      "flex-shrink-0"
                    )}
                    onClick={() =>
                      variant.id !== selectedVariant &&
                      setSelectedVariant(variant.id)
                    }
                    variant={variant.buyable ? "primary" : "transparent-dark"}
                    key={variant.id}
                  >
                    {variant.title || `Variant ${index + 1}`}
                  </Button>
                ))}
              </div>
            </div>
          )}
          <div className="xl:inline-flex justify-start items-center gap-8">
            <div className="flex flex-row gap-2 items-center">
              <input
                className="mr-1 checked:bg-gray-500 text-gray-500"
                type="radio"
                value="subscription"
                name="fluid-checkout-subscribe"
                checked={subscribe === "subscription"}
                onChange={() => setSubscribe("subscription")}
              />
              Subscribe and save{" "}
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input
                className="mr-1 checked:bg-gray-500 text-gray-500"
                type="radio"
                value="regular"
                name="fluid-checkout-subscribe"
                checked={subscribe === "regular"}
                onChange={() => setSubscribe("regular")}
              />
              One-time purchase{" "}
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
              className="w-24 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
              data-variant={selectedVariant}
              id="add-to-cart-button"
              variant="primary"
              className="w-full"
            >
              Add To Cart
            </Button>
            <Button
              data-fluid-checkout={[selectedVariant]}
              data-variant={selectedVariant}
              variant="transparent-dark"
              className="w-full"
            >
              Buy Now
            </Button>
            <div className="text-xs text-center">Free shipping over $50</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
