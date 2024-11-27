import cx from "classnames";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

const styleTypes = {
  all: "rounded-none px-3 py-2",
  default: "text-black bg-transparent border border-black",
};

type Props = {
  variant?: keyof typeof styleTypes;
  className?: string;
  type?: HTMLInputTypeAttribute | undefined;
  defaultValue?: string | number;
  name?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  variant = "default",
  className,
  type,
  defaultValue,
  name,
  value,
  onChange,
}: Props) => {
  return (
    <input
      defaultValue={defaultValue}
      type={type}
      value={value}
      onChange={onChange}
      className={twMerge(cx(styleTypes.all, styleTypes[variant], className))}
      name={name}
    />
  );
};

export default Input;
