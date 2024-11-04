import { SchemaOrg } from "@/components/features/SchemaOrg";
import { BreadcrumbList, WithContext } from "schema-dts";
import { BASE_URL } from "@/app/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
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
      name: "Privacy Policy",
      item: `${BASE_URL}/privacy`,
    },
  ],
};

export default function Privacy() {
  return (
    <>
      <main>
        <section className="flex min-h-dvh flex-col gap-2 py-20">
          <h1 className="text-lg font-semibold">Privacy Policy</h1>
          <div className="max-w-2xl">
            <p className="text-sm text-red-500">
              This is a placeholder for the privacy page. Do not use it in a
              production environment. You can customize the content of this page
              in <code>src/app/privacy/page.tsx</code>.
            </p>
          </div>
        </section>
      </main>
      <SchemaOrg schema={breadcrumbListSchema} />
    </>
  );
}
