import { getCollections } from "@/api/index";
import Collection from "@/components/Collection";
import CallToAction from "@/components/PageElements/CallToAction";

const Shop = async () => {
  const collections = await getCollections();

  return (
    <>
      <div className="px-20 overflow-x-hidden mb-28">
        <div className="text-4xl font-bold my-28">Shop</div>
        <div className="flex flex-col gap-y-28 overflow-x-visible">
          {(collections || []).map((collection) => (
            <Collection key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default Shop;
