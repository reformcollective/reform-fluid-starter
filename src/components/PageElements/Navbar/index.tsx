"use client";

import CountryLanguagePicker from "@/components/CountryLanguagePicker";
import bagShopping from "@/svgs/bag-shopping.svg";
import bars from "@/svgs/bars.svg";
import magnifyingGlass from "@/svgs/magnifying-glass.svg";
import user from "@/svgs/user.svg";
import xmark from "@/svgs/xmark.svg";
import { Company } from "@/types/company";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
  company: Company;
  params: Record<string, any>;
};

type MenuItem = {
  href: string;
  label: string;
  icon: any | null;
};

const Navbar = ({ company, params }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const affiliateSlug = params.affiliateSlug || "home";

  const getUrl = (path: string) => `/${affiliateSlug}${path}`;

  const menuItems: MenuItem[] = [
    { href: getUrl("/"), label: "Home", icon: null },
    { href: getUrl("/shop/"), label: "Shop", icon: null },
    { href: getUrl("/shop/"), label: "Search", icon: magnifyingGlass },
    { href: getUrl("/"), label: "Account", icon: user },
  ];

  const desktopLinks = menuItems.slice(0, 2);
  const desktopIcons = [
    { href: getUrl("/shop/"), icon: magnifyingGlass },
    { href: getUrl("/"), icon: user },
    { href: getUrl("/cart/"), icon: bagShopping },
  ];

  const Logo = () => (
    <Link href={getUrl("/")}>
      <img
        src={company.logo_url || "/placeholder-logo.png"}
        alt={`${company.name}'s logo`}
        className="h-8 md:h-[43px] object-contain"
      />
    </Link>
  );

  const languagePickerProps = {
    languageOptions: company.languages.map((l) => ({
      label: l.name,
      value: l.iso,
    })),
    defaultCountry: company.default_country.iso,
    countryOptions: company.countries.map((c) => ({
      label: c.name,
      value: c.iso,
    })),
  };

  return (
    <nav className="border-b border-black">
      <div className="container h-16">
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-full">
          <Logo />
          <div className="flex items-center gap-4">
            <Link href={getUrl("/cart/")} className="p-2">
              <Image
                alt="bag-shopping"
                height={20}
                width={20}
                src={bagShopping}
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Image
                alt="bars"
                height={20}
                width={20}
                src={isMobileMenuOpen ? xmark : bars}
              />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-full">
          {/* Left Links */}
          <div className="flex gap-8">
            {desktopLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Logo />

          {/* Right Section */}
          <div className="flex items-center justify-end gap-8">
            <CountryLanguagePicker {...languagePickerProps} />
            <div className="flex items-center gap-8">
              {desktopIcons.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Image
                    alt={item.icon}
                    height={20}
                    width={20}
                    src={item.icon}
                  />
                </Link>
              ))}
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
                    <Image
                      alt={item.icon}
                      height={20}
                      width={20}
                      src={item.icon}
                    />
                  )}
                  <span className="text-base text-black">{item.label}</span>
                </Link>
              ))}

              {/* Country & Language */}
              <div className="py-4 mt-2 border-t border-gray-200 pl-2">
                <CountryLanguagePicker {...languagePickerProps} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
