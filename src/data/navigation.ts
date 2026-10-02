import type { NavItem } from "@/types/common";

export const mainNav: NavItem[] = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Biz haqimizda", href: "/#jamoa", sectionId: "jamoa" },
  { label: "Xizmatlar", href: "/#xizmatlar", sectionId: "xizmatlar" },
  { label: "Loyihalar", href: "/#loyihalar", sectionId: "loyihalar", matchPath: "/projects" },
  { label: "Texnologiyalar", href: "/#texnologiyalar", sectionId: "texnologiyalar" },
  { label: "Aloqa", href: "/contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Kompaniya",
    links: [
      { label: "Bosh sahifa", href: "/" },
      { label: "Biz haqimizda", href: "/#jamoa" },
      { label: "Xizmatlar", href: "/#xizmatlar" },
      { label: "Loyihalar", href: "/#loyihalar" },
      { label: "Texnologiyalar", href: "/#texnologiyalar" },
    ],
  },
  {
    title: "Yordam",
    links: [
      { label: "Savol-javob", href: "/contact#savol-javob" },
      { label: "Blog", href: "/blog" },
      { label: "Maxfiylik siyosati", href: "/privacy" },
      { label: "Foydalanish shartlari", href: "/terms" },
      { label: "Aloqa", href: "/contact" },
    ],
  },
];
