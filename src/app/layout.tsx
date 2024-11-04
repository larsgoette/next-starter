import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  APP_DESCRIPTION,
  APP_LANG,
  APP_NAME,
  BASE_URL,
  THEME_COLOR,
} from "@/app/config";
import { SchemaOrg } from "@/components/features/SchemaOrg";
import { WebSite, WithContext } from "schema-dts";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
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
        className={`${inter.variable} variable-font-reset font-sans antialiased`}>
        {children}
        <SchemaOrg schema={websiteSchema} />
      </body>
    </html>
  );
}
