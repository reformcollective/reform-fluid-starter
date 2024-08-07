import Cube from "@/svgs/Cube";
const HowItWorks = () => {
  return (
    <div className="text-center py-28 px-12">
      <h1 className="font-bold text-5xl mb-12">How it works</h1>
      <div className="inline-flex max-w-[1200px] justify-between">
        <div className="text-center w-1/4">
          <div className="w-full flex justify-center">
            <Cube size={48} />
          </div>
          <h2 className="font-bold text-2xl mt-12 mb-6">
            Short Summary of Step 1
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className="text-center w-1/4">
          <div className="w-full flex justify-center">
            <Cube size={48} />
          </div>
          <h2 className="font-bold text-2xl mt-12 mb-6">
            Short Summary of Step 2
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className="text-center w-1/4">
          <div className="w-full flex justify-center">
            <Cube size={48} />
          </div>
          <h2 className="font-bold text-2xl mt-12 mb-6">
            Short Summary of Step 3
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
