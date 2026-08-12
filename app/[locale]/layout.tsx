import SiteHeader from "@/components/siteHeader";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import SiteFooter from "@/components/siteFooter";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canaan Advisors",
  description: "Canaan Advisors",
  icons: {
    icon: "../favicon.ico",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
          </NextIntlClientProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
