"use client";

import chevronDown from "@/svgs/chevron-down.svg";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Flag from "../Flag";
import Select from "../Select";

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
  const [cookies, setCookie] = useCookies();
  const [country, setCountry] = useState(
    cookies["country"] || defaultCountry || "US"
  );
  const [lang, setLang] = useState(cookies["language"] || "en");

  useEffect(() => {
    setCookie("country", country, { path: "/" });
  }, [country]);

  useEffect(() => {
    setCookie("language", lang, { path: "/" });
  }, [lang]);

  useEffect(() => {
    window.fcs = { ...(window.fcs || {}), language_iso: lang };
  }, [lang]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="inline-flex items-center gap-2">
          <Flag code={country} size={24} />
          <span className="text-base">
            {country} | {lang.toUpperCase()}
          </span>
          <Image alt="chevron-down" height={10} width={10} src={chevronDown} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end">
          <div className="p-4 flex flex-col bg-white shadow mt-4 w-64">
            <div className="mb-6">
              <div className="mb-1 text-base">Select Your Country</div>
              <Select
                placeholder="Country"
                value={country}
                onChange={setCountry}
                options={countryOptions}
              />
            </div>
            <div>
              <div className="mb-1 text-base">Select Your Language</div>
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
