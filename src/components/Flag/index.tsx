import Image from "next/image";

type LazySvgProps = {
  code: string;
  height?: number;
  width?: number;
  fill?: boolean;
  className?: string;
};

const Flag = ({ code, height, width, fill, className }: LazySvgProps) => (
  <Image
    className={className}
    fill={fill}
    src={`/countryFlag/${code.toLowerCase()}.svg`}
    alt={code}
    {...(!fill ? { height, width } : {})}
    loading="lazy"
  />
);
export default Flag;
