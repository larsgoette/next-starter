import { SchemaOrg } from "@/components/features/SchemaOrg";
import { BreadcrumbList, WithContext } from "schema-dts";
import { BASE_URL } from "@/app/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  openGraph: {
    title: "Terms of Use",
  },
  robots: {
    index: false,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
};

const breadcrumbListSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms of Use",
      item: `${BASE_URL}/terms`,
    },
  ],
};

export default function Terms() {
  return (
    <>
      <main>
        <section className="flex min-h-dvh flex-col gap-2 py-20">
          <h1 className="text-lg font-semibold">Terms of Use</h1>
          <div className="max-w-2xl">
            <p className="text-sm text-red-500">
              This is a placeholder for the terms of use page. Do not use it in
              a production environment. You can customize the content of this
              page in <code>src/app/terms/page.tsx</code>.
            </p>
          </div>
        </section>
      </main>
      <SchemaOrg schema={breadcrumbListSchema} />
    </>
  );
}
