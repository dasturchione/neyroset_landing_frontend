import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Accent } from "@/components/ui/SectionHeading";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog",
  description: "Neyroset blogi: dasturlash, avtomatlashtirish va loyihalar tajribasi haqida maqolalar.",
  alternates: { canonical: "/blog" },
  // Empty until the first articles are published.
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <PageHero
      eyebrow="Blog"
      title={
        <>
          Maqolalar <Accent>tez orada</Accent>
        </>
      }
      description="Dasturlash, biznes jarayonlarini avtomatlashtirish va loyihalarimizdan olingan tajriba haqida yozamiz. Hozircha loyihalarimiz bilan tanishib chiqing."
      breadcrumbs={[
        { name: "Bosh sahifa", href: "/" },
        { name: "Blog", href: "/blog" },
      ]}
      className="pb-28 lg:pb-36"
    >
      <ButtonLink href="/projects" size="lg">
        Loyihalarni ko‘rish
        <ButtonArrow />
      </ButtonLink>
    </PageHero>
  );
}
