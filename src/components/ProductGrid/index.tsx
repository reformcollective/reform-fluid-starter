import Product from "@/components/Product";
import type { Product as ProductType } from "@/types/product";

type Props = {
  products: ProductType[];
};

const ProductGrid = ({ products }: Props) => {
  return (
    <div className="flex justify-between gap-y-14 w-full flex-wrap">
      {products.map((p) => (
        <div key={p.id} className="px-2">
          <Product product={p} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
