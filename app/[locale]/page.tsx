import { StaticLayoutParams } from "@/app/[locale]/layout";
import { sdk } from "@/helper/gql";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

async function getData() {
  const data = await sdk.GetUserById({ userId: "1" });

  return {
    username: data.user ? data.user.username : "unknown",
    email: data.user ? data.user.email : "unknown",
  };
}

interface StaticIndexParams extends StaticLayoutParams {}

export async function generateMetadata({
  params: { locale },
}: Readonly<StaticIndexParams>) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export default async function Page({
  params: { locale },
}: Readonly<StaticIndexParams>) {
  const { username, email } = await getData();
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{username}</p>
      <p>{email}</p>
    </>
  );
}
