import { Brain, ChartColumn, Database, GitFork, Monitor, NotepadText, Server, Smartphone, Workflow } from "lucide-react";
import type { Service } from "@/types/common";

export const services: Service[] = [
  {
    slug: "web-platformalar",
    title: "Web platformalar",
    summary: "Zamonaviy, tezkor va masshtablanuvchi veb-platformalar yaratish.",
    description:
      "Korporativ portallar, mijozlar kabinetlari, marketplace va SaaS platformalarni zamonaviy texnologiyalar asosida ishlab chiqamiz. SEO, tezlik va qulay boshqaruv dastlabki bosqichdan hisobga olinadi.",
    includes: ["Korporativ saytlar va portallar", "SaaS va mijoz kabinetlari", "Admin panellar"],
    icon: Monitor,
  },
  {
    slug: "mobil-ilovalar",
    title: "Mobil ilovalar",
    summary: "iOS va Android uchun qulay va ishonchli ilovalar.",
    description:
      "Bitta kod bazasidan iOS va Android uchun ilovalar yaratamiz: mijozlar uchun ilovalar, xodimlar uchun ichki vositalar va mavjud tizimlaringiz bilan bog‘langan mobil interfeyslar.",
    includes: ["Flutter asosidagi ilovalar", "Push-bildirishnomalar", "Offline rejim"],
    icon: Smartphone,
  },
  {
    slug: "erp-crm",
    title: "ERP / CRM",
    summary: "Biznes jarayonlarini boshqarish uchun maxsus tizimlar.",
    description:
      "Savdo, ombor, xodimlar, mijozlar va moliya jarayonlarini yagona tizimda birlashtiramiz. Tayyor andozalar emas — aynan sizning jarayonlaringizga moslashtirilgan ERP va CRM tizimlari.",
    includes: ["Mijozlar va savdo voronkasi", "Ombor va ta’minot", "Rollar va ruxsatlar"],
    icon: Database,
  },
  {
    slug: "korxona-avtomatlashtirish",
    title: "Korxona avtomatlashtirish",
    summary: "Takroriy ishlarni avtomatik jarayonlarga aylantirish.",
    description:
      "Qo‘lda bajariladigan hisobotlar, hujjat aylanishi va kelishuv jarayonlarini avtomatlashtiramiz. Natijada xodimlar vaqti tejaladi, xatolar kamayadi va jarayonlar shaffof bo‘ladi.",
    includes: ["Hujjat aylanishi", "Avtomatik hisobotlar", "Bildirishnoma va eslatmalar"],
    icon: Workflow,
  },
  {
    slug: "buxgalteriya-dasturlari",
    title: "Buxgalteriya dasturlari",
    summary: "Hisob-kitob va moliyaviy jarayonlar uchun qulay dasturlar.",
    description:
      "Kirim-chiqim, kassa, qarzdorlik, ish haqi va moliyaviy hisobotlarni yurituvchi buxgalteriya dasturlarini ishlab chiqamiz hamda mavjud tizimlaringiz bilan bog‘laymiz.",
    includes: ["Kassa va to‘lovlar", "Qarzdorlik nazorati", "Moliyaviy hisobotlar"],
    icon: NotepadText,
  },
  {
    slug: "ai-yechimlar",
    title: "AI yechimlar",
    summary: "Sun’iy intellekt asosida aqlli dasturiy yechimlar.",
    description:
      "Hujjat va tasvirlardan ma’lumot ajratib olish (OCR), matnlarni tahlil qilish, aqlli yordamchilar va AI modellarni mavjud biznes jarayonlariga integratsiya qilamiz.",
    includes: ["OCR va tasvirni tanish", "AI yordamchilar", "LLM integratsiyalari"],
    icon: Brain,
  },
  {
    slug: "backend-api",
    title: "Backend & API",
    summary: "Yuqori yuklamaga tayyor server arxitekturasi.",
    description:
      "Mobil ilovalar, web platformalar va tashqi hamkorlar uchun xavfsiz REST API va real vaqt rejimidagi servislarni loyihalaymiz. Arxitektura o‘sish va yuklama oshishini hisobga olib quriladi.",
    includes: ["REST API va WebSocket", "Mikroservislar", "Ma’lumotlar bazasi dizayni"],
    icon: Server,
  },
  {
    slug: "integratsiyalar",
    title: "Integratsiyalar",
    summary: "Mavjud tizimlar bilan integratsiya va avtomatlashtirish.",
    description:
      "To‘lov tizimlari, SMS-provayderlar, buxgalteriya tizimlari, Telegram botlar va boshqa tashqi servislar bilan ishonchli integratsiyalarni amalga oshiramiz.",
    includes: ["To‘lov tizimlari", "SMS va Telegram", "Uchinchi tomon API’lari"],
    icon: GitFork,
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard & Analytics",
    summary: "Qarorlar uchun aniq va tushunarli ko‘rsatkichlar.",
    description:
      "Turli manbalardagi ma’lumotlarni yig‘ib, rahbariyat uchun real vaqtda yangilanadigan boshqaruv panellari va analitik hisobotlarni tayyorlaymiz.",
    includes: ["KPI boshqaruv panellari", "Real vaqt ma’lumotlari", "Eksport va hisobotlar"],
    icon: ChartColumn,
  },
];


/** Display order used across the site (matches the reference layout). */
const order = [
  "web-platformalar",
  "mobil-ilovalar",
  "erp-crm",
  "ai-yechimlar",
  "buxgalteriya-dasturlari",
  "integratsiyalar",
  "korxona-avtomatlashtirish",
  "backend-api",
  "dashboard-analytics",
];

services.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
