"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/past-iscit", label: "Past ISCIT" },
];

const linkBaseClass =
  "uppercase tracking-wide px-5 py-2 rounded-full text-teal-50 hover:bg-teal-500 transition-colors";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="sticky top-0 z-50 bg-teal-600 text-teal-50 font-semibold shadow-lg shadow-black/30"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-2">
        <Link href="/" className="flex items-center no-underline" onClick={closeMenu}>
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-fullr">
            <Image
              src="/icons/iscita-android-icon-512x512.png"
              alt="ISCITA logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-snug ps-1">
            <div className="text-xl font-extrabold tracking-wide">ISCIT Australia</div>
            <div className="text-xs font-light text-teal-100 uppercase tracking-[0.3em]">
              Since 2011
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-3" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${linkBaseClass} ${
                isActive(link.href) ? "bg-teal-500 shadow-lg shadow-black/30" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`${linkBaseClass} border-2 border-white/30 shadow-lg shadow-black/50 ${
              isActive("/contact") ? "bg-teal-500" : "bg-sky-700"
            }`}
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-teal-50/50 text-teal-50 transition hover:bg-teal-500"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            <span className="h-0.5 w-6 bg-current transition" aria-hidden="true" />
            <span className="h-0.5 w-6 bg-current transition" aria-hidden="true" />
            <span className="h-0.5 w-6 bg-current transition" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-teal-100 bg-teal-600/80 p-5 text-base font-semibold uppercase tracking-wide"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBaseClass} ${
                  isActive(link.href) ? "bg-teal-500 shadow-lg shadow-black/30" : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`${linkBaseClass} text-center border-2 border-white/30 shadow-lg shadow-black/50 ${
                isActive("/contact") ? "bg-teal-500" : "bg-sky-700"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
