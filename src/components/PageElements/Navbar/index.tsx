"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountryLanguagePicker from "@/components/CountryLanguagePicker";
import { Company } from "@/types/company";
import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
  faBars,
  faXmark,
} from "@awesome.me/kit-ac6c036e20/icons/classic/regular";

type NavbarProps = {
  company: Company;
  params: Record<string, any>;
};

const Navbar = ({ company, params }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const affiliateSlug = params.affiliateSlug;

  const menuItems = [
    { href: `/${affiliateSlug || "home"}/`, label: "Home", icon: null },
    { href: `/${affiliateSlug || "home"}/shop/`, label: "Shop", icon: null },
    {
      href: `/${affiliateSlug || "home"}/shop/`,
      label: "Search",
      icon: faMagnifyingGlass,
    },
    { href: `/${affiliateSlug || "home"}/`, label: "Account", icon: faUser },
  ];

  return (
    <div className="border-b border-black">
      <div className="container h-[72px]">
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-full">
          {/* Logo */}
          <Link href={`/${affiliateSlug || "home"}/`}>
            <img
              src={company.logo_url || "/placeholder-logo.png"}
              alt={`${company.name}'s logo`}
              className="h-[32px] object-contain"
            />
          </Link>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-4">
            <Link href={`/${affiliateSlug || "home"}/cart/`} className="p-2">
              <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faXmark : faBars}
                className="text-xl"
              />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-full">
          {/* Left Links */}
          <div className="flex gap-[32px]">
            <Link
              href={`/${affiliateSlug || "home"}/`}
              className="text-[16px] leading-[24px] text-black"
            >
              Home
            </Link>
            <Link
              href={`/${affiliateSlug || "home"}/shop/`}
              className="text-[16px] leading-[24px] text-black"
            >
              Shop
            </Link>
          </div>

          {/* Logo */}
          <Link
            href={`/${affiliateSlug || "home"}/`}
            className="flex justify-center"
          >
            <img
              src={company.logo_url || "/placeholder-logo.png"}
              alt={`${company.name}'s logo`}
              className="h-[43px] object-contain"
            />
          </Link>

          {/* Right Section */}
          <div className="flex items-center justify-end">
            <div className="mr-8">
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
            </div>
            <div className="flex items-center gap-8">
              <Link href={`/${affiliateSlug || "home"}/shop/`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
              </Link>
              <Link href={`/${affiliateSlug || "home"}/`}>
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </Link>
              <Link href={`/${affiliateSlug || "home"}/cart/`}>
                <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-black">
          <div className="px-4 py-4 bg-white">
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center py-4 pl-2 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && (
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-xl w-6 mr-3"
                    />
                  )}
                  <span className="text-[16px] leading-[24px] text-black">
                    {item.label}
                  </span>
                </Link>
              ))}

              {/* Country & Language */}
              <div className="py-4 mt-2 border-t border-gray-200 pl-2">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
