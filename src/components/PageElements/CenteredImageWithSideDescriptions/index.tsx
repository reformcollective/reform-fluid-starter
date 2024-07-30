"use client";
import Button from "@/components/Button";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Cube from "@/svgs/Cube";
import { faChevronRight } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CenteredImageWithSideDescriptions = () => {
  const { width } = useWindowDimensions();
  const halfRemainingWidth = width / 2 - 48 * 3;

  return (
    <div className="px-24">
      <div className="inline-flex w-full">
        <div className="flex-row w-1/4 pr-12">
          <div className="text-center flex-row mb-44">
            <div className="w-full flex justify-center mb-6">
              <Cube size={48} />
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-lg">Short heading goes here</h2>
            </div>
            <div className="w-3/4 text-center mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="text-center flex-row">
            <div className="w-full flex justify-center mb-6">
              <Cube size={48} />
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-lg">Short heading goes here</h2>
            </div>
            <div className="w-3/4 text-center mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-12">
          <img
            src={`https://placehold.co/${halfRemainingWidth}x${halfRemainingWidth}/2F4F4F/black@3x.png`}
            alt="Centered Image"
          />
        </div>
        <div className="flex-row w-1/4 pr-12">
          <div className="text-center flex-row mb-44">
            <div className="w-full flex justify-center mb-6">
              <Cube size={48} />
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-lg">Short heading goes here</h2>
            </div>
            <div className="w-3/4 text-center mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="text-center flex-row">
            <div className="w-full flex justify-center mb-6">
              <Cube size={48} />
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-lg">Short heading goes here</h2>
            </div>
            <div className="w-3/4 text-center mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <div className="inline-flex gap-4 mb-28">
          <Button variant="transparent-dark">Button 1</Button>
          <Button variant="secondary" className="inline-flex gap-4">
            Button 2 <FontAwesomeIcon className="mt-1" icon={faChevronRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CenteredImageWithSideDescriptions;
