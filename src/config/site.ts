/**
 * Central company configuration.
 *
 * Every field that is `null` is intentionally hidden on the public site.
 * Fill them with REAL, verified company data — placeholder values must never
 * be published because they look like genuine contact details.
 */

const FALLBACK_SITE_URL = "https://neyroset.uz"; // TODO: haqiqiy domenni tasdiqlang yoki NEXT_PUBLIC_SITE_URL ni sozlang

export const siteConfig = {
  name: "Neyroset",
  shortName: "Neyroset",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL).replace(/\/$/, ""),
  locale: "uz_UZ",
  language: "uz",

  title: "Neyroset — biznes uchun aqlli dasturiy yechimlar",
  tagline: "Biznes uchun aqlli dasturiy yechimlar",
  description:
    "Neyroset — dasturchilar jamoasi. Web va mobil ilovalar, backend tizimlar, ERP/CRM, buxgalteriya dasturlari va biznes jarayonlarini avtomatlashtirish yechimlarini ishlab chiqamiz.",
  keywords: [
    "dastur ishlab chiqish",
    "korxona avtomatlashtirish",
    "ERP tizimlari",
    "CRM tizimlari",
    "buxgalteriya dasturlari",
    "web dasturlar",
    "mobil ilovalar",
    "backend ishlab chiqish",
    "biznes jarayonlarini avtomatlashtirish",
    "dasturchilar jamoasi",
  ],

  contact: {
    email: "hello@neyroset.uz" as string | null,
    /** Telegram username without "@" */
    telegram: "neyroset" as string | null,
    /** International format */
    phone: "+998 90 123 45 67" as string | null,
    /** City / country shown publicly. */
    address: "Toshkent, O‘zbekiston" as string | null,
    addressLocality: "Toshkent",
    addressCountry: "UZ",
    workingHours: "Ish kunlari 09:00 – 19:00" as string | null,
  },

  socials: {
    telegram: "https://t.me/neyroset" as string | null,
    instagram: null as string | null, // TODO
    linkedin: null as string | null, // TODO
    github: null as string | null, // TODO
    youtube: null as string | null, // TODO
  },

  /** Year shown in the footer copyright. */
  foundedYear: 2024 as number | null,

  /** Hero figures (confirmed by the team). */
  stats: [
    { value: "50+", label: "Muvaffaqiyatli loyihalar" },
    { value: "3+", label: "Yillik tajriba" },
    { value: "20+", label: "Mamnun mijozlar" },
    { value: "24/7", label: "Texnik support" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function telegramUrl(): string | null {
  const handle = siteConfig.contact.telegram;
  return handle ? `https://t.me/${handle.replace(/^@/, "")}` : null;
}

export type SocialLink = { label: string; href: string; key: keyof SiteConfig["socials"] };

export function getSocialLinks(): SocialLink[] {
  const labels: Record<keyof SiteConfig["socials"], string> = {
    telegram: "Telegram",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
    youtube: "YouTube",
  };
  return (Object.keys(siteConfig.socials) as (keyof SiteConfig["socials"])[])
    .map((key) => ({ key, label: labels[key], href: siteConfig.socials[key] }))
    .filter((item): item is SocialLink => typeof item.href === "string" && item.href.length > 0);
}
