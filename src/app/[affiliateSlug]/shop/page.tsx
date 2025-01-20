import { getProducts } from "@/api/index";
import { cookies } from "next/headers";

const Shop = async () => {

  const cookiesList = cookies();
  const products =
    (await getProducts({
      language: cookiesList.get("language")?.value,
      country: cookiesList.get("country")?.value,
    })) ?? [];

    return (
    <main>     
        {products?.length > 0 ? (
          <div>
            {(products || []).map((product) => (
              <span>{product.title}</span>
            ))}
          </div>
        ) : (
          <p>There are currently no products.</p>
        )}
    </main>
  );
};

export default Shop;
