"use client";
import Flag from "@/components/Flag";
import Select from "@/components/Select";
import countries from "@/constants/countries.json";
import languages from "@/constants/languages.json";
import { faChevronDown } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Popover from "@radix-ui/react-popover";
import { useEffect, useState } from "react";

const CountryLanguagePicker = () => {
  const [country, setCountry] = useState("US");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    window.fcs = { ...(window.fcs || {}), language_iso: lang };
  }, [lang]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="inline-flex gap-2 mr-4">
          <Flag code={country} width={45.6} height={24} />
          <div>
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
                options={countries}
              />
            </div>
            <div>
              <div className="mb-1">Select Your Language</div>
              <Select
                placeholder="Language"
                value={lang}
                onChange={setLang}
                options={languages}
              />
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default CountryLanguagePicker;
