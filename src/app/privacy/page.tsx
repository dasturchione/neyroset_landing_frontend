import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { TextPage } from "@/components/layout/TextPage";
import { Accent } from "@/components/ui/SectionHeading";

export const metadata: Metadata = createPageMetadata({
  title: "Maxfiylik siyosati",
  description: "Neyroset saytida shaxsiy ma’lumotlar qanday yig‘ilishi, ishlatilishi va himoyalanishi haqida.",
  path: "/privacy",
});

const breadcrumbs = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Maxfiylik siyosati", href: "/privacy" },
];

// TODO: matnni yurist bilan tekshirib chiqing.
export default function PrivacyPage() {
  const { email } = siteConfig.contact;
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(breadcrumbs))} />
      <TextPage
        eyebrow="Hujjatlar"
        title={
          <>
            Maxfiylik <Accent>siyosati</Accent>
          </>
        }
        description="Biz sizning ma’lumotlaringizni hurmat qilamiz va faqat zarur hollarda ishlatamiz."
        breadcrumbs={breadcrumbs}
        updated="2026-yil oktyabr"
        sections={[
          {
            heading: "Qanday ma’lumotlar yig‘iladi",
            body: (
              <p>
                Saytda ro‘yxatdan o‘tish yoki to‘lov formalari yo‘q. Siz biz bilan email, Telegram yoki telefon orqali bog‘langaningizda
                yuborgan ma’lumotlaringiz (ism, aloqa ma’lumotlari va loyiha tavsifi) bizga ma’lum bo‘ladi.
              </p>
            ),
          },
          {
            heading: "Ma’lumotlardan foydalanish",
            body: (
              <p>
                Yuborilgan ma’lumotlar faqat murojaatingizga javob berish, loyihani muhokama qilish va hamkorlikni tashkil etish uchun
                ishlatiladi. Ular uchinchi shaxslarga sotilmaydi va berilmaydi.
              </p>
            ),
          },
          {
            heading: "Cookie fayllar",
            body: <p>Sayt reklama yoki kuzatuv cookie fayllaridan foydalanmaydi.</p>,
          },
          {
            heading: "Bog‘lanish",
            body: (
              <p>
                Ma’lumotlaringizni o‘chirish yoki savollar bo‘yicha{" "}
                {email ? (
                  <a href={`mailto:${email}`} className="font-semibold text-brand-600 hover:underline">
                    {email}
                  </a>
                ) : (
                  "aloqa sahifasi"
                )}{" "}
                orqali murojaat qiling.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
