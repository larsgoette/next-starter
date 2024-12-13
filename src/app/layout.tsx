import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  APP_DESCRIPTION,
  APP_LANG,
  APP_LOCALE,
  APP_NAME,
  BASE_URL,
  THEME_COLOR,
} from "@/app/config";
import { SchemaOrg } from "@/components/features/SchemaOrg";
import { WebSite, WithContext } from "schema-dts";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: BASE_URL,
    siteName: APP_NAME,
    locale: APP_LOCALE,
    type: "website",
  },
  appleWebApp: {
    title: APP_NAME,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  url: BASE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={APP_LANG}>
      <body
        className={`${inter.variable} variable-font-reset container !mx-auto bg-white px-4 font-sans text-zinc-950 antialiased`}>
        <Header />
        {children}
        <Footer />
        <SchemaOrg schema={websiteSchema} />
      </body>
    </html>
  );
}
