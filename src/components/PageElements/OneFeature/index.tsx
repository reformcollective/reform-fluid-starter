"use client";
import Cube from "@/svgs/Cube";
import cx from "classnames";

type Benefit = {
  id: string;
  text: string;
};

type OneFeatureProps = {
  reversed?: boolean;
};

const benefits: Benefit[] = [
  { id: "one", text: "Benefit one of this feature" },
  { id: "two", text: "Benefit two of this feature" },
  { id: "three", text: "Benefit three of this feature" },
];

const OneFeature = ({ reversed = false }: OneFeatureProps) => {
  return (
    <section className="bg-white">
      <div className="container py-16 md:py-28">
        <div
          className={cx(
            "flex flex-col md:flex-row items-center gap-8 lg:gap-12",
            reversed && "md:flex-row-reverse"
          )}
        >
          {/* Feature Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://placehold.co/600x600/DDDDDD/999999@3x.png"
              alt="Feature illustration"
              className="w-full aspect-square"
              loading="lazy"
            />
          </div>

          {/* Feature Content */}
          <div
            className={cx(
              "w-full md:w-1/2 space-y-6",
              reversed ? "md:pr-8" : "md:pl-8"
            )}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-darkText">
              Describe feature one
            </h2>
            <p className="text-grayText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-center gap-4">
                  <Cube size={24} />
                  <p className="text-grayText">{benefit.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneFeature;
