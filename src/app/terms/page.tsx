import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { TextPage } from "@/components/layout/TextPage";
import { Accent } from "@/components/ui/SectionHeading";

export const metadata: Metadata = createPageMetadata({
  title: "Foydalanish shartlari",
  description: "Neyroset saytidan foydalanish shartlari va sayt materiallariga oid qoidalar.",
  path: "/terms",
});

const breadcrumbs = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Foydalanish shartlari", href: "/terms" },
];

// TODO: matnni yurist bilan tekshirib chiqing.
export default function TermsPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(breadcrumbs))} />
      <TextPage
        eyebrow="Hujjatlar"
        title={
          <>
            Foydalanish <Accent>shartlari</Accent>
          </>
        }
        description="Saytdan foydalanish orqali siz quyidagi shartlarga rozilik bildirasiz."
        breadcrumbs={breadcrumbs}
        updated="2026-yil oktyabr"
        sections={[
          {
            heading: "Sayt maqsadi",
            body: (
              <p>
                Sayt Neyroset jamoasi, xizmatlari va loyihalari haqida ma’lumot berish uchun mo‘ljallangan. Saytdagi ma’lumotlar ommaviy
                oferta hisoblanmaydi; har bir loyiha shartlari alohida kelishiladi.
              </p>
            ),
          },
          {
            heading: "Intellektual mulk",
            body: (
              <p>
                Sayt dizayni, matnlari, logotip va loyiha tasvirlari Neyroset yoki tegishli mijozlarga tegishli. Ulardan ruxsatsiz tijorat
                maqsadida foydalanish taqiqlanadi.
              </p>
            ),
          },
          {
            heading: "Javobgarlik",
            body: (
              <p>
                Ma’lumotlarni dolzarb saqlashga harakat qilamiz, biroq ular oldindan ogohlantirmasdan o‘zgarishi mumkin. Tashqi
                saytlarga havolalar uchun ularning egalari javobgar.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
