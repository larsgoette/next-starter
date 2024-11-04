import { SchemaOrg } from "@/components/features/SchemaOrg";
import { BreadcrumbList, WithContext } from "schema-dts";
import { BASE_URL } from "@/app/config";

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
        <h1 className="font-variation-bold text-base">Hello World!</h1>
      </main>
      <SchemaOrg schema={breadcrumbListSchema} />
    </>
  );
}
