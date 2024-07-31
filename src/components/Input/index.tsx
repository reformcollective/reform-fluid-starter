import cx from "classnames";
import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

const styleTypes = {
  all: "rounded-none pl-3 py-2",
  default: "text-black bg-transparent border border-black",
};

type Props = {
  variant?: keyof typeof styleTypes;
  className?: string;
  type?: HTMLInputTypeAttribute | undefined;
  defaultValue?: string | number;
};

const Input = ({
  variant = "default",
  className,
  type,
  defaultValue,
}: Props) => {
  return (
    <input
      defaultValue={defaultValue}
      type={type}
      className={twMerge(cx(styleTypes.all, styleTypes[variant], className))}
    />
  );
};

export default Input;
