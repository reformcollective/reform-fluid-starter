import { styleTypes } from "@/components/Button";
import cx from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant?: keyof typeof styleTypes;
  children: ReactNode;
  className?: string;
  id?: string;
  href: string;
};

const LinkButton = ({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        cx(styleTypes[variant], styleTypes.all, className, "h-10")
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
