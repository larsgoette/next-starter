import { SchemaOrg } from "@/components/features/SchemaOrg";
import { BreadcrumbList, WithContext } from "schema-dts";
import { APP_DESCRIPTION, APP_NAME, APP_TITLE, BASE_URL } from "@/app/config";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";

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

const transition = {
  duration: 1,
  ease: "easeInOut",
};

export default function Home() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <main>
          <section className="min-h-dvh py-20">
            <div className="flex flex-col gap-8">
              <hgroup className="flex flex-col gap-2">
                <m.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={transition}
                  className="text-5xl font-bold">
                  {APP_TITLE}
                </m.h1>
                <m.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...transition, delay: 0.2 }}
                  className="font text-5xl font-bold text-zinc-400">
                  {APP_DESCRIPTION}
                </m.p>
              </hgroup>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...transition, delay: 0.4 }}
                className="flex gap-2">
                <Button href="/about">Discover Solutions</Button>
                <Button href="/contact" variant="outlined">
                  Contact Sales
                </Button>
              </m.div>
            </div>
          </section>
        </main>
      </LazyMotion>
      <SchemaOrg schema={breadcrumbListSchema} />
    </>
  );
}
