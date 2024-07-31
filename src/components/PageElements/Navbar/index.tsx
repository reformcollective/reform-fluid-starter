"use client";
import CountryLanguagePicker from "@/components/CountryLanguagePicker";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";

const Navbar: FC = () => {
  const { affiliateSlug } = useParams();
  return (
    <div className="h-18 px-20 py-6 relative border-b border-black">
      <div className="inline-flex float-left gap-2 w-72">
        <Link href={`/${affiliateSlug || "home"}/`}>Home</Link>
        <Link href={`/${affiliateSlug || "home"}/shop/`}>Shop</Link>
      </div>
      <div className="inline-flex float-right gap-4">
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
      <div className="mx-auto font-bold text-lg text-center w-72">Logo</div>
    </div>
  );
};

export default Navbar;
