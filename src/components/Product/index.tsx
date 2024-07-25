import Button from "@/components/Button";
import type { Product } from "@/types/product";

const Product = ({ product }: { product: Product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div className="inline-flex justify-between">
        <div>
          <h2 className="font-bold">{product.name}</h2>
          <p>{product.variantName}</p>
        </div>
        <p className="font-bold">{product.price}</p>
        <Button className="w-full text-center">Add to card</Button>
      </div>
    </div>
  );
};
