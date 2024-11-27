"use client";
import Button from "@/components/Button";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const BigImageTextOver = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className="relative">
      <img
        src={`https://placehold.co/${width || 1920}x${
          (height || 980) - 72
        }/2F4F4F/black@3x.png`}
        alt="Big Image"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 px-16 w-1/2">
        <h1 className="text-4xl text-white font-bold mb-4">
          Medium sized text over image TITLE
        </h1>
        <div>
          <p className="text-white mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="inline-flex gap-2">
          <Button>Button 1</Button>
          <Button variant="transparent">Button 2</Button>
          <Button variant="secondary">Button 3</Button>
        </div>
      </div>
    </div>
  );
};

export default BigImageTextOver;
