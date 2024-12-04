"use client";
import Cube from "@/svgs/Cube";

const steps = [
  {
    title: "Short summary of step one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    title: "Short summary of step two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    title: "Short summary of step three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 md:py-28 px-4 md:px-8 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 md:mb-20">
          How it works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <Cube size={48} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-base text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
