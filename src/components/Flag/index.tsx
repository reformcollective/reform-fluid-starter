import cx from "classnames";
import Image from "next/image";
type LazySvgProps = {
  code: string;
  size?: number;
  fill?: boolean;
  className?: string;
};

const Flag = ({ code, size, fill, className }: LazySvgProps) => (
  <div className="relative rounded-full overflow-hidden items-start justify-start">
    <Image
      className={cx("rounded-full h-6 w-6 object-cover", className)}
      src={`/countryFlag/${code.toLowerCase()}.svg`}
      alt={code}
      height={size}
      width={size}
      loading="lazy"
    />
  </div>
);
export default Flag;
