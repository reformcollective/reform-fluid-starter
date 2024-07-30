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
  const { affiliate } = useParams();
  return (
    <div className="h-18 px-20 py-6 relative border-b border-black">
      <div className="inline-flex float-left gap-2 w-72">
        <Link href={`/${affiliate || "home"}/`}>Home</Link>
        <Link href={`/${affiliate || "home"}/shop/`}>Shop</Link>
      </div>
      <div className="inline-flex float-right gap-4">
        <CountryLanguagePicker />
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className="mx-auto font-bold text-lg text-center w-72">Logo</div>
    </div>
  );
};

export default Navbar;
