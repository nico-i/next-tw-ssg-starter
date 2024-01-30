import { I18nParams, locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import "../globals.css";

export interface StaticLayoutParams {
  params: I18nParams;
}

export interface LayoutProps extends StaticLayoutParams {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL("https://acme.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
