"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/i18n/request";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale || "/"}`);
  };

  return (
    <div className="border-border bg-surface flex items-center gap-2 rounded-lg border px-3 py-1.5">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`px-2 py-1 text-sm font-medium transition-colors ${
            locale === loc ? "text-primary" : "text-muted hover:text-foreground"
          }`}
        >
          {loc === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
