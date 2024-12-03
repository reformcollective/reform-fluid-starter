import { getProducts } from "@/api/index";
import CallToAction from "@/components/PageElements/CallToAction";
import Product from "@/components/Product";
const Shop = async () => {
  const products = await getProducts({});

  return (
    <>
      <div className="px-20 overflow-x-hidden mb-28">
        <div className="text-4xl font-bold mt-10">Products</div>
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
