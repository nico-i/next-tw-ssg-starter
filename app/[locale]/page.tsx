import { StaticLayoutParams } from "@/app/[locale]/layout";
import { sdk } from "@/helper/gql";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

async function getData() {
  const getSpaceShipsRes = await sdk.GetSpaceShips();

  return {
    spaceShipNames:
      getSpaceShipsRes.allStarships?.starships?.map(
        (starship) => starship?.name,
      ) ?? [],
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
  unstable_setRequestLocale(locale);

  const { spaceShipNames } = await getData();
  const t = await getTranslations("Index");
  return (
    <>
      <h1 className="text-2xl">{t("title")}</h1>
      <p>{spaceShipNames.join(", ")}</p>
    </>
  );
}
