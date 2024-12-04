"use client";

import Button from "@/components/Button";

const BigImageTextOver = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://placehold.co/1920x980/2F4F4F/black@3x.png"
        alt="Big Image"
        className="w-full min-h-[600px] md:min-h-[800px] object-cover"
      />
      <div className="absolute inset-0">
        <div className="max-w-[1440px] mx-auto h-full px-4 md:px-8 lg:px-8">
          <div className="flex flex-col justify-center h-full pt-20 md:pt-0">
            <div className="max-w-[590px]">
              <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-[56px] leading-tight mb-4">
                Medium length hero headline goes here
              </h1>
              <p className="text-white text-base md:text-lg mb-8 max-w-[480px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="flex gap-4">
                <Button className="min-w-[100px] md:min-w-[120px]">
                  Button
                </Button>
                <Button
                  variant="transparent"
                  className="min-w-[100px] md:min-w-[120px]"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigImageTextOver;
