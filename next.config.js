/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["en", "ja"],
  //   defaultLocale: "en",
  //   localeDetection: false,
  // },
  images: {
    domains: ["source.unsplash.com"],
  },
};

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);
