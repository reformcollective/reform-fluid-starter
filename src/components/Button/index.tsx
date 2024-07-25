import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const styleTypes = {
  primary: "text-white bg-black",
  secondary: "text-black bg-white",
  transparent: "text-white bg-transparent border border-white",
  "transparent-dark": "text-black bg-transparent border border-black",
};

type ButtonProps = {
  variant?: keyof typeof styleTypes;
  children: ReactNode;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
}) => {
  return (
    <button
      className={twMerge(
        styleTypes[variant],
        className,
        "rounded-none px-4 py-2"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
