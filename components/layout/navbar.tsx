"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Container from "./container";
import Button from "../ui/button";
import LanguageSwitcher from "../ui/language-switcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/videos", label: t("videos") },
    { href: "/practice", label: t("practice") },
  ];

  return (
    <nav className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              Joseph Love Tennis
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons & Language Switcher */}
          <div className="hidden items-center space-x-4 md:flex">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              {t("login")}
            </Button>
            <Button size="sm">{t("getStarted")}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="text-foreground h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-border border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <LanguageSwitcher />
                <Button variant="ghost" size="sm">
                  {t("login")}
                </Button>
                <Button size="sm">{t("getStarted")}</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
