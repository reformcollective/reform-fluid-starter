import { getProducts } from "@/api/index";
import CallToAction from "@/components/PageElements/CallToAction";
import Product from "@/components/Product";
import { faChevronDown } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cookies } from "next/headers";

const Shop = async () => {
  const cookiesList = cookies();
  const products = await getProducts({
    language: cookiesList.get("language")?.value,
    country: cookiesList.get("country")?.value,
  });
  // the filtering and sorting are not implemented on purpose, we're just showing the products
  return (
    <>
      <div className="flex flex-col gap-20 px-20 overflow-x-hidden mb-28">
        <div className="text-4xl font-bold mt-10">All Products</div>
        <div className="inline-flex justify-between w-full">
          <div className="inline-flex gap-2">
            Filter:
            <div className="inline-flex gap-1">
              Availability
              <FontAwesomeIcon className="text-sm mt-1" icon={faChevronDown} />
            </div>
            <div className="inline-flex gap-1">
              Price
              <FontAwesomeIcon className="text-sm mt-1" icon={faChevronDown} />
            </div>
          </div>
          <div>Sort: Best Selling</div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-20 justify-center overflow-x-visible">
          {(products || []).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default Shop;
