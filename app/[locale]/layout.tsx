import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import "../globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Love Tennis - Professional Tennis Learning Platform",
  description:
    "Premium tennis coaching videos platform with YouTube integration to help you improve your skills",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  const isValidLocale = locales.some((l) => l === locale);
  if (!isValidLocale) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body
        className={`${playfairDisplay.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
