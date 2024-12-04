"use client";
import Cube from "@/svgs/Cube";
import cx from "classnames";

const OneFeature = ({ reversed }: { reversed?: boolean }) => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-8 py-16 md:py-28">
        <div
          className={cx(
            "flex flex-col md:flex-row items-center gap-8 lg:gap-12",
            reversed && "md:flex-row-reverse"
          )}
        >
          <div className="w-full md:w-1/2">
            <img
              src="https://placehold.co/600x600/2F4F4F/black@3x.png"
              alt="Feature illustration"
              className="w-full aspect-square"
            />
          </div>

          <div
            className={cx(
              "w-full md:w-1/2 space-y-6",
              reversed ? "md:pr-8" : "md:pl-8"
            )}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Describe feature one
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="space-y-4">
              {["one", "two", "three"].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Cube size={24} />
                  <p>Benefit {item} of this feature</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneFeature;
