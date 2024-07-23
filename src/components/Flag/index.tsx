import Image from "next/image";

type LazySvgProps = {
  code: string;
};

const Flag = ({ code }: LazySvgProps) => {
  return (
    <Image height="40" width="40" src={`/countryFlag/${code}.svg`} alt={code} />
  );
};

export default Flag;
