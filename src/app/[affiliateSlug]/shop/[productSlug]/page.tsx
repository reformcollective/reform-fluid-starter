import { getProduct } from "@/api";
import { Product } from "@/types/product";
import { Metadata } from "next";
import ProductPage from "./ProductPage";

type PageProps = {
  params: Record<string, any>;
};

const Page = async ({ params }: PageProps) => {
  const product = await getProduct(params.productSlug);
  return <ProductPage product={product} />;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = await getProduct(params.productSlug);

  const images = [
    {
      url: product.image_url,
      width: 800,
      height: 600,
      alt: `${product.title} main image`,
    },
    ...product.images.map((image: Product["images"][0], index: number) => ({
      url: image.image_url,
      width: 800,
      height: 600,
      alt: `${product.title} image ${index}`,
    })),
  ];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `${process.env.FLUID_HOST}`,
      images,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      images,
    },
  };
}

export default Page;
