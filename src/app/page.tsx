import { SchemaOrg } from "@/components/features/SchemaOrg";
import { BreadcrumbList, WithContext } from "schema-dts";
import { APP_DESCRIPTION, APP_NAME, APP_TITLE, BASE_URL } from "@/app/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: `${APP_TITLE} | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
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
  ],
};

export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-dvh py-20">
          <hgroup className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold">{APP_TITLE}</h1>
            <p className="font text-5xl font-bold text-neutral-400">
              {APP_DESCRIPTION}
            </p>
          </hgroup>
        </section>
      </main>
      <SchemaOrg schema={breadcrumbListSchema} />
    </>
  );
}
