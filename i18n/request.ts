import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ja"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = locales.find((locale) => locale === requestedLocale) ?? "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
