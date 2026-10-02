import type { Testimonial } from "@/types/project";

export type ClientTestimonial = Testimonial & { projectSlug?: string };

/** Client-approved testimonials shown on the homepage and project pages. */
export const testimonials: ClientTestimonial[] = [
  {
    quote:
      "Neyroset jamoasi bizning klinikamiz uchun ishlab chiqqan ERP tizimi jarayonlarimizni to‘liq raqamlashtirdi. Endi bemorlar bilan ishlash, moliya va hisobotlar ancha qulay va tez. Professional yondashuv va doimiy qo‘llab-quvvatlash uchun alohida rahmat!",
    author: "Dr. Azizbek Karimov",
    role: "Direktor",
    company: "MedLife Clinic",
    photo: { src: "/testimonials/azizbek-karimov.webp", alt: "Dr. Azizbek Karimov", width: 92, height: 92 },
    projectSlug: "clinic-erp",
  },
];
