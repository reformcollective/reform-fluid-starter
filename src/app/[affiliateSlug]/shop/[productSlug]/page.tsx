import { serverGetProduct } from "@/api";
import ProductPage from "./ProductPage";

const Page = async () => {
  const product = await serverGetProduct();

  return <ProductPage product={product} />;
};
export default Page;
