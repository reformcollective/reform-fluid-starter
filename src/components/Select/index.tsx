import chevronDown from "@/svgs/chevron-down.svg";
import { Option } from "@/types/option";
import * as Select from "@radix-ui/react-select";
import Image from "next/image";
import { FC } from "react";
import SelectItem from "./SelectItem";

type FluidSelectProps = {
  options?: Option<string>[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const FluidSelect: FC<FluidSelectProps> = ({
  options,
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="border border-black px-3 py-2 inline-flex gap-2 justify-between w-full">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <Image alt="chevron-down" height={16} width={16} src={chevronDown} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          className="overflow-y-auto overflow-x-hidden w-full max-h-64 bg-white shadow text-xs sm:text-base !z-100"
        >
          <Select.Viewport className="flex flex-col">
            {options?.map((option) => (
              <SelectItem value={option.value} key={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default FluidSelect;
export { SelectItem };
