"use client";

import Button from "@/components/Button";

const CallToAction = () => {
  return (
    <div className="relative">
      {/* Light line at the top */}
      <div className="absolute top-0 left-0 w-full border-t border-gray-300"></div>

      {/* Main Call-to-Action Section */}
      <div className="flex flex-col items-center text-center bg-baseGray py-16 md:py-24 lg:py-28 px-4 md:px-container-md lg:px-container-lg">
        <h1 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl">
          Call to action that excites the visitor to try your product
        </h1>
        <p className="text-sm leading-relaxed text-gray-700 mt-4 sm:mt-6 sm:text-base md:text-lg max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="inline-flex gap-4 mt-8">
          <Button className="px-6 py-3 text-sm md:text-base">
            Get Started
          </Button>
          <Button
            variant="transparent-dark"
            className="px-6 py-3 text-sm md:text-base"
          >
            Chat with Sales
          </Button>
        </div>
      </div>

      {/* Dark line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full border-t border-black"></div>
    </div>
  );
};

export default CallToAction;
