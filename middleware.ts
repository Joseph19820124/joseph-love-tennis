import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/request";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",

  // Always use locale prefix
  localePrefix: "always",
});

export const config = {
  // Match all pathnames except for
  // - ... files with extensions (.ico, .png, etc.)
  // - _next (Next.js internals)
  // - api routes
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
