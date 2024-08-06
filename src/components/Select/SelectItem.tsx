import { faCheck } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
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
        <FontAwesomeIcon icon={faCheck} />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = "SelectItem";

export default SelectItem;
