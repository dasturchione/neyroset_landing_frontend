import type { Metadata } from "next";
import { faq } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, organizationSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = createPageMetadata({
  title: "Aloqa — loyihangizni muhokama qilamiz",
  description:
    "Neyroset jamoasi bilan bog‘laning: web, mobil, ERP/CRM yoki avtomatlashtirish loyihangiz haqida gaplashamiz va eng mos yechimni taklif qilamiz.",
  path: "/contact",
});

const breadcrumbs = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Aloqa", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(breadcrumbs),
          { "@type": "ContactPage", name: "Neyroset bilan aloqa", about: organizationSchema() },
          {
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        )}
      />
      <CTASection
        headingAs="h1"
        id="page-title"
        full
        className="pt-28 lg:pt-36"
        before={
          <div className="mb-7">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        }
      />

      <section id="savol-javob" aria-labelledby="faq-title" className="section-y scroll-mt-24">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              id="faq-title"
              eyebrow="Savol-javob"
              size="md"
              title={
                <>
                  Ko‘p beriladigan <Accent>savollar</Accent>
                </>
              }
            />
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faq.map((item) => (
              <details key={item.question} className="surface-card group p-6 open:shadow-card">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded font-display text-[1.1rem] font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eef2ff] text-brand-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-body">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
