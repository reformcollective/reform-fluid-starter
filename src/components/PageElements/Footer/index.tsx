"use client";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@awesome.me/kit-ac6c036e20/icons/classic/brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Company } from "@/types/company";

type FooterProps = {
  company: Company;
  params: Record<string, any>;
};

const Footer = ({ company, params }: FooterProps) => {
  const affiliateSlug = params.affiliateSlug;

  const socialIcons = [
    { icon: faFacebook, href: "#" },
    { icon: faInstagram, href: "#" },
    { icon: faXTwitter, href: "#" },
    { icon: faLinkedin, href: "#" },
    { icon: faYoutube, href: "#" },
  ];

  const navLinks = [
    { label: "Shop", href: `/${affiliateSlug || "home"}/shop/` },
    { label: "Account", href: `/${affiliateSlug || "home"}/` },
    { label: "Cart", href: `/${affiliateSlug || "home"}/cart/` },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ];

  return (
    <footer className="container py-16 md:py-28">
      {/* Logo */}
      <div className="text-center mb-12">
        <Link href={`/${affiliateSlug || "home"}/`}>
          <img
            src={company.logo_url || "/placeholder-logo.png"}
            alt={`${company.name}'s logo`}
            className="h-[32px] md:h-[43px] object-contain inline-block"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center mb-16">
        <ul className="flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-[16px] leading-[24px] hover:underline font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Divider */}
      <div className="border-t border-black mb-8 md:mb-16" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Legal Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          <span className="text-sm">
            © 2024 {company.name}. All rights reserved.
          </span>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm underline text-center md:text-left"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-black hover:text-gray-600 transition-colors"
              aria-label={`Visit our ${social.icon.iconName}`}
            >
              <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
