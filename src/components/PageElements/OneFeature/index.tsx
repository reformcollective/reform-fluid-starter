"use client";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Cube from "@/svgs/Cube";
import cx from "classnames";

const OneFeature = ({ reversed }: { reversed?: boolean }) => {
  const { width } = useWindowDimensions();
  const maxWidth = width / 2 - 80 > 600 ? 600 : width / 2 - 80;
  return (
    <div className="px-20 py-28 max-w-[1200px] text-center mx-auto">
      <div
        className={cx(
          "flex w-full items-center",
          reversed ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div className="w-1/2">
          <img
            src={`https://placehold.co/${maxWidth}x${maxWidth}/2F4F4F/black@3x.png`}
            alt="image"
          />
        </div>
        <div className={cx("w-1/2 px-12", reversed ? "pr-8" : "pl-8")}>
          <h2 className="text-3xl font-bold mb-6">Describe This Feature</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="flex flex-col gap-4">
            <div className="inline-flex gap-4">
              <Cube size={24} />
              <p>Benefit one of this feature</p>
            </div>
            <div className="inline-flex gap-4">
              <Cube size={24} />
              <p>Benefit two of this feature</p>
            </div>
            <div className="inline-flex gap-4">
              <Cube size={24} />
              <p>Benefit three of this feature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneFeature;
