"use client";

import { useEffect, useState } from "react";
import { faChevronDown } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Popover from "@radix-ui/react-popover";

import Flag from "@/components/Flag";
import Select from "@/components/Select";

type Props = {
  languageOptions: { label: string; value: string }[];
  defaultCountry: string;
  countryOptions: { label: string; value: string }[];
};

const CountryLanguagePicker = ({
  languageOptions,
  defaultCountry,
  countryOptions,
}: Props) => {
  const [country, setCountry] = useState(defaultCountry || "US");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    window.fcs = { ...(window.fcs || {}), language_iso: lang };
  }, [lang]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="inline-flex items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden mr-3 shrink-0">
            <Flag
              code={country}
              width={24}
              height={24}
              className="w-full h-full object-cover scale-[1.4]"
            />
          </div>
          <span className="text-base">
            {country} | {lang.toUpperCase()}
          </span>
          <FontAwesomeIcon icon={faChevronDown} className="text-xs ml-2" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="z-50" align="end">
          <div className="p-6 flex flex-col bg-white shadow mt-4 min-w-72">
            <div className="mb-6">
              <div className="mb-2 text-xl">Select Your Country</div>
              <Select
                placeholder="Country"
                value={country}
                onChange={setCountry}
                options={countryOptions}
              />
            </div>
            <div>
              <div className="mb-2 text-xl">Select Your Language</div>
              <Select
                placeholder="Language"
                value={lang}
                onChange={setLang}
                options={languageOptions}
              />
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default CountryLanguagePicker;
