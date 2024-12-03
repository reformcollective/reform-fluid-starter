import CountryLanguagePicker from "@/components/CountryLanguagePicker";
import { Company } from "@/types/company";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC<{ company: Company; params: Record<string, any> }> = ({
  company,
  params,
}) => {
  const affiliateSlug = params.affiliateSlug;
  return (
    <div className="max-sm:h-12 flex sm:h-18 border-b border-black px-4 sm:px-20 justify-center text-xs sm:text-base">
      <div className="lg:max-w-[1200px] justify-between inline-flex w-full">
        <div className="inline-flex gap-2 sm:gap-4 sm:w-72 py-4 sm:py-6">
          <Link href={`/${affiliateSlug || "home"}/`}>Home</Link>
          <Link href={`/${affiliateSlug || "home"}/shop/`}>Shop</Link>
        </div>
        <img
          src={company.logo_url}
          alt={`${company.name}'s logo`}
          className="max-h-6 sm:max-h-10 sm:my-4 mt-3 sm:mx-auto text-center"
        />
        <div className="inline-flex gap-2 sm:gap-4 sm:w-72 py-4 sm:py-6">
          <CountryLanguagePicker
            languageOptions={company.languages.map((l) => ({
              label: l.name,
              value: l.iso,
            }))}
            defaultCountry={company.default_country.iso}
            countryOptions={company.countries.map((c) => ({
              label: c.name,
              value: c.iso,
            }))}
          />
          <Link href={`/${affiliateSlug || "home"}/shop/`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link href={`/${affiliateSlug || "home"}/`}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link href={`/${affiliateSlug || "home"}/cart/`}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
