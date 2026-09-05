"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { COMPANY_NAME, COMPANY_SHORT } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const navId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 880px)");
    const sync = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setOpen(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!open || !isMobile) return;

    const firstLink = linksRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, isMobile]);

  const menuClosedForAt = isMobile && !open;

  return (
    <header className="site-header">
      <div className="wrap">
        <nav className="nav" data-open={open} aria-label="Primary">
          <Link href="/" className="brand" aria-label={`${COMPANY_NAME} home`}>
            <span className="brand__mark" aria-hidden="true">
              C
            </span>
            <span className="brand__name">
              {COMPANY_SHORT}
              <span> Books</span>
            </span>
          </Link>

          <div
            id={navId}
            ref={linksRef}
            className="nav__links"
            inert={menuClosedForAt || undefined}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "is-active" : ""}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="nav__book-mobile btn"
              onClick={() => setOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>

          <div className="nav__cta">
            <Link href="/contact" className="btn nav__book-desktop">
              Book a Consultation
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="nav__toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={navId}
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
