"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close menu on escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-charcoal text-offwhite border-b border-amber/40">
      <div className="container-wide flex items-center justify-between h-14 sm:h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span
            className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.08em] uppercase leading-none"
          >
            Zagwyn<span className="text-amber"> Firewood</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[0.8rem] uppercase tracking-[0.1em]">
          {site.nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-amber ${isActive ? "text-amber" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.primaryPhone.href}
            className="inline-flex items-center gap-2 bg-amber text-charcoal font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm tracking-wide uppercase hover:bg-amber-light active:scale-[0.97] transition-all duration-150"
          >
            <PhoneIcon />
            <span className="hidden md:inline">{site.primaryPhone.number}</span>
            <span className="md:hidden">Call</span>
          </a>
          <button
            type="button"
            className="lg:hidden p-2 text-offwhite touch-target"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        ref={menuRef}
        className={`lg:hidden border-t border-amber/30 bg-charcoal overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="container-wide py-4 flex flex-col gap-1">
          {site.nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm uppercase tracking-[0.14em] border-b border-offwhite/10 hover:text-amber transition-colors touch-target ${
                  isActive ? "text-amber" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.primaryPhone.href}
            className="mt-4 btn-primary w-full text-center"
          >
            Call {site.primaryPhone.number}
          </a>
        </nav>
      </div>

      {/* Overlay backdrop when menu is open */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[3.5rem] sm:top-[4rem] md:top-[5rem] bg-charcoal-900/60 backdrop-blur-sm z-[-1]"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </header>
  );
}

function LogoMark() {
  return (
    // Log end-on: growth rings viewed from the cut face — unmistakably firewood
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className="text-amber sm:w-8 sm:h-8"
    >
      {/* Bark — outer ring */}
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.5" />
      {/* Growth ring 1 */}
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      {/* Growth ring 2 */}
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
      {/* Heartwood */}
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path
        d={open ? "M6 6l12 12" : "M4 7h16"}
        className="transition-all duration-200"
      />
      <path
        d={open ? "M6 18L18 6" : "M4 12h16"}
        className="transition-all duration-200"
      />
      {!open && (
        <path d="M4 17h16" className="transition-all duration-200" />
      )}
    </svg>
  );
}
