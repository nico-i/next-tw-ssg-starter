import { LayoutProps, StaticLayoutParams } from "@/app/[locale]/layout";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface StaticIndexParams extends StaticLayoutParams {}

interface IndexPageProps extends LayoutProps {}

export async function generateMetadata({
  params: { locale },
}: Readonly<StaticIndexParams>) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export default function IndexPage({
  params: { locale },
}: Readonly<StaticIndexParams>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return <h1>{t("title")}</h1>;
}
