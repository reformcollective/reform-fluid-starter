"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[900px]"
      style={{
        backgroundImage: "url('https://placehold.co/1440x900/2F4F4F/FFFFFF')",
      }}
    >
      {/* Content Wrapper */}
      <div className="absolute inset-0 flex items-center px-[64px]">
        <div className="max-w-[560px]">
          {/* Title */}
          <h1 className="text-white text-[56px] font-semibold leading-[67.2px] mb-4">
            Medium length hero headline goes here
          </h1>

          {/* Description */}
          <p className="text-white text-[18px] font-normal leading-[27px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>

          {/* Actions Section */}
          <div className="flex gap-[16px]">
            {/* Buttons */}
            <Button className="bg-black text-white text-[16px] leading-[24px] font-medium px-[24px] py-[12px] border border-black w-[99px] h-[48px]">
              Button
            </Button>
            <Button className="bg-transparent border border-white text-white text-[16px] leading-[24px] font-medium px-[24px] py-[12px] w-[99px] h-[48px]">
              Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
