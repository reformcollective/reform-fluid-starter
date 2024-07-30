"use client";
import Product from "@/components/Product";
import Dot from "@/svgs/Dot";
import type { Product as ProductType } from "@/types/product";
import {
  faArrowLeft,
  faArrowRight,
} from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
type Props = {
  products: ProductType[];
};

const ProductCarousel = ({ products }: Props) => {
  const productLength = 363 + ((products.length - 1) * 32) / products.length;
  const scrollRef = useRef<HTMLDivElement>(null);
  const productsInPages = Math.floor(
    (scrollRef?.current?.clientWidth || 1200) / productLength
  );
  const numberOfDots = Math.ceil(products.length / productsInPages);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="flex flex-col">
      <div
        onScroll={(e) =>
          setCurrentPage(
            Math.ceil(e.currentTarget.scrollLeft / (396 * productsInPages))
          )
        }
        ref={scrollRef}
        className="overflow-x-scroll scroll-smooth no-scrollbar snap-x flex flex-row gap-8"
      >
        {products.map((product: ProductType, index) => (
          <Product key={product.id + index} product={product} />
        ))}
      </div>
      {numberOfDots >= 2 && (
        <div className="inline-flex px-4 mt-4 justify-between">
          <div className="inline-flex gap-x-1">
            {Array.from({ length: numberOfDots }).map((_, index) => (
              <Dot
                size={8}
                color={index === currentPage ? "#000000" : "#CCCCCC"}
                key={index}
              />
            ))}
          </div>
          <div className="inline-flex gap-4">
            <button
              onClick={() =>
                scrollRef.current?.scrollBy(-396 * productsInPages, 0)
              }
              className="border border-black rounded-full px-3 py-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={() => {
                if (numberOfDots === currentPage + 1) {
                  scrollRef.current?.scrollTo(0, 0);
                } else scrollRef.current?.scrollBy(396 * productsInPages, 0);
              }}
              className="border border-black rounded-full px-3 py-2"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
