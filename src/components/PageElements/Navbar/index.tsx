import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CountryLanguagePicker from "@/components/CountryLanguagePicker";
import { Company } from "@/types/company";
import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@awesome.me/kit-ac6c036e20/icons/classic/regular";

type NavbarProps = {
  company: Company;
  params: Record<string, any>;
};

const Navbar = ({ company, params }: NavbarProps) => {
  const affiliateSlug = params.affiliateSlug;

  return (
    <div className="border-b border-black">
      {/* Main Container */}
      <div
        className="max-w-[1440px] mx-auto h-[72px] px-[32px] grid"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* Left Links */}
        <div className="flex gap-[32px]">
          <Link
            href={`/${affiliateSlug || "home"}/`}
            className="text-[16px] font-normal leading-[24px] text-black font-sans"
          >
            Home
          </Link>
          <Link
            href={`/${affiliateSlug || "home"}/shop/`}
            className="text-[16px] font-normal leading-[24px] text-black font-sans"
          >
            Shop
          </Link>
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center">
          <img
            src={company.logo_url || "/placeholder-logo.png"}
            alt={`${company.name}'s logo`}
            className="h-[43px] object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-[24px]">
          {/* Country & Language Picker */}
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

          {/* Icons */}
          <Link href={`/${affiliateSlug || "home"}/shop/`} className="text-lg">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link href={`/${affiliateSlug || "home"}/`} className="text-lg">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link href={`/${affiliateSlug || "home"}/cart/`} className="text-lg">
            <FontAwesomeIcon icon={faBagShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
