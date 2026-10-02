import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, servicesSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Accent, Kicker } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = createPageMetadata({
  title: "Xizmatlar — dastur ishlab chiqish va korxona avtomatlashtirish",
  description:
    "Web platformalar, mobil ilovalar, ERP/CRM tizimlari, buxgalteriya dasturlari, AI yechimlar, backend va integratsiyalar. Neyroset dasturiy ta’minot ishlab chiqish xizmatlari.",
  path: "/services",
  keywords: [
    "dastur ishlab chiqish",
    "korxona avtomatlashtirish",
    "ERP tizimlari",
    "CRM tizimlari",
    "buxgalteriya dasturlari",
    "backend ishlab chiqish",
  ],
});

const breadcrumbs = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Xizmatlar", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(breadcrumbs), servicesSchema())} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Xizmatlar"
        title={
          <>
            Dasturiy ta’minot <Accent>ishlab chiqish</Accent> xizmatlari
          </>
        }
        description="G‘oyadan ishga tushirishgacha: biznesingiz jarayonlarini avtomatlashtiruvchi web, mobil va korporativ tizimlarni bitta jamoa sifatida yaratamiz."
      >
        <ButtonLink href="/contact" size="lg">
          Loyiha muhokamasi
          <ButtonArrow />
        </ButtonLink>
      </PageHero>

      <section aria-label="Xizmatlar ro‘yxati" className="pb-24 lg:pb-32">
        <div className="container-wide">
          <ul className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} id={service.slug} className="scroll-mt-28">
                <Reveal as="article" className="surface-card flex h-full flex-col gap-6 p-7 sm:flex-row lg:p-9">
                  <IconTile icon={service.icon} size="lg" />
                  <div>
                    <h2 className="text-title-lg font-bold">{service.title}</h2>
                    <p className="mt-3 leading-relaxed text-body">{service.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[0.95rem] font-medium text-ink">
                          <Check aria-hidden="true" className="size-4 text-brand-600" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-24 lg:mt-32">
            <Kicker className="mb-6 justify-center">Qanday ishlaymiz</Kicker>
            <h2 className="mx-auto mb-12 max-w-2xl text-center text-display">
              Ish <Accent>jarayoni</Accent>
            </h2>
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
