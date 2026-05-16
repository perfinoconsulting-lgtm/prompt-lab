"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-canvas border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-[18px] text-ink-deep">
            <div className="w-7 h-7 bg-primary rounded-[6px] flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold leading-none">P</span>
            </div>
            Prompt Lab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-steel hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[8px] text-steel hover:text-ink hover:bg-surface transition-colors"
              aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <Link
              href="/sign-in"
              className="px-3 py-2 text-sm font-medium text-charcoal hover:text-ink transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="px-[18px] py-[10px] text-sm font-medium bg-primary text-white rounded-[8px] hover:bg-primary-pressed transition-colors"
            >
              Get Started free
            </Link>
          </div>

          {/* Mobile row: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[8px] text-steel hover:text-ink hover:bg-surface transition-colors"
              aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-steel hover:text-ink transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-hairline py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-steel hover:text-ink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-hairline space-y-2">
              <Link
                href="/sign-in"
                className="block w-full px-[18px] py-[10px] text-sm font-medium border border-hairline-strong text-charcoal rounded-[8px] text-center hover:bg-surface transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="block w-full px-[18px] py-[10px] text-sm font-medium bg-primary text-white rounded-[8px] text-center hover:bg-primary-pressed transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
