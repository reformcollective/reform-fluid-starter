"use client";
import Button from "@/components/Button";
import Cube from "@/svgs/Cube";
import { faChevronRight } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const descriptions = [
  {
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

const CenteredImageWithSideDescriptions = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Items */}
          <div className="order-2 md:order-1 md:w-1/4 grid grid-cols-2 md:grid-cols-1 gap-8">
            {descriptions.slice(0, 2).map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Cube size={48} />
                </div>
                <h2 className="font-bold text-lg mb-3">{item.title}</h2>
                <p className="max-w-xs mx-auto text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="order-1 md:order-2 md:w-1/2">
            <img
              src="https://placehold.co/600x600/2F4F4F/black@3x.png"
              alt="Centered Image"
              className="w-full aspect-square"
            />
          </div>

          {/* Right Items */}
          <div className="order-3 md:w-1/4 grid grid-cols-2 md:grid-cols-1 gap-8">
            {descriptions.slice(2, 4).map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Cube size={48} />
                </div>
                <h2 className="font-bold text-lg mb-3">{item.title}</h2>
                <p className="max-w-xs mx-auto text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-12 md:mt-20 pb-16 md:pb-28">
          <div className="flex gap-4">
            <Button variant="transparent-dark">Button 1</Button>
            <Button
              variant="secondary"
              className="inline-flex items-center gap-2"
            >
              Button 2 <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredImageWithSideDescriptions;
