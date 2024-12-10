import { getProducts } from "@/api/index";
import CallToAction from "@/components/PageElements/CallToAction";
import Product from "@/components/Product";
import chevronDown from "@/svgs/chevron-down.svg";
import { cookies } from "next/headers";
import Image from "next/image";
const Shop = async () => {
  const cookiesList = cookies();
  const products =
    (await getProducts({
      language: cookiesList.get("language")?.value,
      country: cookiesList.get("country")?.value,
    })) ?? [];
  // the filtering and sorting are not implemented on purpose, we're just showing all of the products
  return (
    <>
      <div className="container mx-auto flex flex-col px-10 md:gap-20 lg:px-20 overflow-x-hidden mb-28">
        <div className="text-4xl font-bold mt-10">All Products</div>
        <div className="sm:inline-flex justify-between w-full">
          <div className="inline-flex gap-4 my-2">
            Filter:
            <div className="inline-flex gap-1">
              Availability
              <Image
                alt="chevron-down"
                height={10}
                width={10}
                src={chevronDown}
              />
            </div>
            <div className="inline-flex gap-1">
              Price
              <Image
                alt="chevron-down"
                height={10}
                width={10}
                src={chevronDown}
              />
            </div>
          </div>
          <div>Sort: Best Selling</div>
        </div>
        {products?.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(products || []).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="container mx-auto p-8 text-2xl text-center font-semibold">
            <p>There are currently no products.</p>
          </div>
        )}
      </div>
      <CallToAction />
    </>
  );
};

export default Shop;
