import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const styleTypes = {
  all: "rounded-none px-4 py-2",
  primary: "text-white bg-black",
  secondary: "text-black bg-white",
  transparent: "text-white bg-transparent border border-white",
  "transparent-dark": "text-black bg-transparent border border-black",
};

type ButtonProps = {
  variant?: keyof typeof styleTypes;
  children: ReactNode;
  className?: string;
  id?: string;
};

const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  id,
  ...rest
}) => {
  return (
    <button
      id={id}
      className={twMerge(styleTypes[variant], className, styleTypes.all)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
export { styleTypes };
