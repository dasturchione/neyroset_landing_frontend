import { siteConfig } from "@/config/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = siteConfig.title;
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Dasturchilar jamoasi",
    title: "Biznes uchun aqlli dasturiy yechimlar",
    description: "Web va mobil ilovalar, ERP/CRM, buxgalteriya va avtomatlashtirish tizimlari.",
  });
}
