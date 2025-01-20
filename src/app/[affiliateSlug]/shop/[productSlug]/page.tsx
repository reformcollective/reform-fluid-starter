import { getProduct } from "@/api";
import { type Product } from "@/types/product";
import { type Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProductPage from "./ProductPage";

type PageProps = {
	params: Promise<{
		productSlug: string
		[key: string]: unknown
	}>
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params
  let product: Product;
  try {
    product = await getProduct(resolvedParams.productSlug);
  } catch (error) {
    console.error(error);
    redirect(`/${resolvedParams.affiliateSlug}/shop/`);
  }
  return <ProductPage product={product} />;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params

  const product = await getProduct(resolvedParams.productSlug);
  const headersList = await headers();

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
      description: product.description ?? "",
      url: `${headersList.get("x-url")}`,
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
