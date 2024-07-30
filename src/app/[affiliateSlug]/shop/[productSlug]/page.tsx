import { serverGetProduct } from "@/api";

const Page = async () => {
  const product = await serverGetProduct();
  return <>{product.title}</>;
};
export default Page;
