import check from "@/svgs/check.svg";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import Image from "next/image";
import { ElementRef, forwardRef, PropsWithChildren } from "react";

type SelectItemProps = {
  className?: string;
};

const SelectItem = forwardRef<
  ElementRef<typeof Select.Item>,
  PropsWithChildren<SelectItemProps & Select.SelectItemProps>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        "inline-flex justify-between hover:bg-gray-100 px-3 py-2 transition-colors",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="w-6">
        <Image alt="check" height={16} width={16} src={check} />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = "SelectItem";

export default SelectItem;
