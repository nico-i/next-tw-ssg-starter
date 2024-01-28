import { locales } from "@/i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales,
  // Used when no locale matches
  defaultLocale: locales[0],
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
};
