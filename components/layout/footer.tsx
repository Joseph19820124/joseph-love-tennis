"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Container from "./container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  const footerLinks = {
    product: [
      { href: "/videos", label: t("product.videos") },
      { href: "/practice", label: t("product.practice") },
    ],
    resources: [
      { href: "/about", label: t("resources.about") },
      { href: "/contact", label: t("resources.contact") },
    ],
  };

  return (
    <footer className="border-border bg-surface/50 border-t">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              Joseph Love Tennis
            </h2>
            <p className="text-muted mt-4 max-w-md text-sm">
              {t("brand.description")}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">
              {t("product.title")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">
              {t("resources.title")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted text-sm">
              © {currentYear} Joseph Love Tennis. {t("legal.rights")}
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-muted hover:text-primary text-sm transition-colors"
              >
                {t("legal.privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-muted hover:text-primary text-sm transition-colors"
              >
                {t("legal.terms")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
