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
    <div className="h-18 border-b border-black px-20 flex justify-center">
      <div className="max-w-[1200px] inline-flex mx-auto justify-between w-full">
        <div className="inline-flex gap-4 w-72 py-6">
          <Link href={`/${affiliateSlug || "home"}/`}>Home</Link>
          <Link href={`/${affiliateSlug || "home"}/shop/`}>Shop</Link>
        </div>
        <img
          src={company.logo_url}
          alt={`${company.name}'s logo`}
          className="max-h-10 my-4 mx-auto text-center"
        />
        <div className="inline-flex gap-4 w-72 py-6">
          <CountryLanguagePicker />
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
