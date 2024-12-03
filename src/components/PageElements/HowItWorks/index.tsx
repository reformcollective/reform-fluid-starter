import Cube from "@/svgs/Cube";

const HowItWorks = () => {
  return (
    <div className="text-center bg-white py-[112px] px-[64px]">
      {/* Section Title */}
      <h1 className="text-[40px] font-bold leading-[48px] text-black mb-[80px]">
        How it works
      </h1>

      {/* Steps */}
      <div className="flex flex-col lg:flex-row justify-between max-w-[1440px] mx-auto gap-[80px]">
        {/* Step 1 */}
        <div className="text-center w-full lg:w-1/3 px-4">
          <div className="flex justify-center mb-[24px]">
            <Cube size={48} />
          </div>
          <h2 className="text-[24px] font-bold leading-[33.6px] text-black mb-[16px]">
            Short summary of step one
          </h2>
          <p className="text-[16px] leading-[24px] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center w-full lg:w-1/3 px-4">
          <div className="flex justify-center mb-[24px]">
            <Cube size={48} />
          </div>
          <h2 className="text-[24px] font-bold leading-[33.6px] text-black mb-[16px]">
            Short summary of step two
          </h2>
          <p className="text-[16px] leading-[24px] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center w-full lg:w-1/3 px-4">
          <div className="flex justify-center mb-[24px]">
            <Cube size={48} />
          </div>
          <h2 className="text-[24px] font-bold leading-[33.6px] text-black mb-[16px]">
            Short summary of step three
          </h2>
          <p className="text-[16px] leading-[24px] text-gray-700">
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
