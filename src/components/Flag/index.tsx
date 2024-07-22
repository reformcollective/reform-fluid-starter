import Image from "next/image";

const Flag = ({ code }: { code: string }) => {
  return (
    <Image
      src={`/public/countryFlag/${code}`}
      alt={`flag for ${code} country`}
      width={24}
      height={24}
    />
  );
};

export default Flag;
