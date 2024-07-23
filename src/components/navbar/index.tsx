"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";
import CountryLanguagePicker from "../CountryLanguagePicker";

const Navbar: FC = () => {
  const { affiliate } = useParams();
  return (
    <div className="h-18 px-16 py-6 relative">
      <div className="inline-flex float-left gap-2 w-72">
        <Link href={`/${affiliate || "home"}/`}>Home</Link>
        <Link href={`/${affiliate || "home"}/shop/`}>Shop</Link>
      </div>
      <div className="inline-flex float-right gap-2">
        <CountryLanguagePicker />
        <div>search</div>
        <div>profile</div>
        <div>cart</div>
      </div>
      <div className="mx-auto font-bold text-lg text-center w-72">Logo</div>
    </div>
  );
};

export default Navbar;
