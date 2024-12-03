"use client";
import Flag from "@/components/Flag";
import Select from "@/components/Select";
import { faChevronDown } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Popover from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

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
        <button className="inline-flex gap-2 mr-4 max-h-24 overflow-hidden">
          <Flag code={country} size={24} />
          <div className="ml-2">
            {country} | {lang.toUpperCase()}
          </div>
          <FontAwesomeIcon className="mt-0.5" icon={faChevronDown} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <div className="p-4 flex flex-col bg-white shadow mt-4 gap-y-6">
            <div>
              <div className="mb-1">Select Your Country</div>
              <Select
                placeholder="Country"
                value={country}
                onChange={setCountry}
                options={countryOptions}
              />
            </div>
            <div>
              <div className="mb-1">Select Your Language</div>
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
