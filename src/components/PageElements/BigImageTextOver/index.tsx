"use client";

import Button from "@/components/Button";

const BigImageTextOver = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://placehold.co/1920x980/2F4F4F/black@3x.png"
        alt="Big Image"
        className="w-full min-h-[55vh] md:min-h-[75vh] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0">
        <div className="container h-full px-4 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-2xl mt-16 lg:mt-24">
              {/* Hero Headline */}
              <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                Medium length hero headline goes here
              </h1>

              {/* Hero Description */}
              <p className="text-white text-sm md:text-base lg:text-lg mb-6 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mb-8">
                <Button className="min-w-32 px-5 py-3">Button</Button>
                <Button variant="transparent" className="min-w-32 px-5 py-3">
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
