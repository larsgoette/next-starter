import { SchemaOrg } from "@/components/features/SchemaOrg";
import { BreadcrumbList, WithContext } from "schema-dts";
import { APP_DESCRIPTION, APP_NAME, APP_TITLE, BASE_URL } from "@/app/config";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: `${APP_TITLE} | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  openGraph: {
    title: `${APP_TITLE} | ${APP_NAME}`,
    description: APP_DESCRIPTION,
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
  ],
};

export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-dvh py-20">
          <div className="flex flex-col gap-8">
            <hgroup className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold">{APP_TITLE}</h1>
              <p className="font text-5xl font-bold text-zinc-400">
                {APP_DESCRIPTION}
              </p>
            </hgroup>
            <div className="flex gap-2">
              <Button href="/about">Discover Solutions</Button>
              <Button href="/contact" variant="outlined">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SchemaOrg schema={breadcrumbListSchema} />
    </>
  );
}
