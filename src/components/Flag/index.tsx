import Image from "next/image";

type LazySvgProps = {
  code: string;
  height?: number;
  width?: number;
  fill?: boolean;
};

const Flag = ({ code, height, width, fill }: LazySvgProps) => {
  return (
    <Image
      fill={!!fill}
      height={height}
      width={width}
      src={`/countryFlag/${code}.svg`}
      alt={code}
    />
  );
};

export default Flag;
