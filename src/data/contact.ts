import { FileText, Lightbulb, MessageSquareMore, Rocket } from "lucide-react";
import type { ProcessStep } from "@/types/common";

export const contactSteps: ProcessStep[] = [
  { title: "Bog‘lanish", description: "Loyiha haqida qisqacha ma’lumot qoldirasiz", icon: MessageSquareMore },
  { title: "Tahlil", description: "Ehtiyojlaringizni tahlil qilib, eng yaxshi yechimni taklif qilamiz", icon: FileText },
  { title: "Yechim", description: "Texnik va dizayn yechimlarini birgalikda tasdiqlaymiz", icon: Lightbulb },
  { title: "Ishga tushirish", description: "Loyihani ishlab chiqib, qo‘llab-quvvatlashni davom ettiramiz", icon: Rocket },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "Loyiha qancha vaqt oladi?",
    answer:
      "Muddat loyiha hajmi va funksiyalariga bog‘liq. Tahlil bosqichidan so‘ng aniq reja, bosqichlar va muddatlarni yozma ravishda taqdim etamiz.",
  },
  {
    question: "Loyiha narxi qanday aniqlanadi?",
    answer:
      "Talablarni o‘rganib chiqqach, ishlar hajmi bo‘yicha smeta tayyorlaymiz. Katta loyihalarni bosqichlarga bo‘lib, har bir bosqichni alohida baholaymiz.",
  },
  {
    question: "Mavjud tizimimiz bilan integratsiya qila olasizmi?",
    answer:
      "Ha. To‘lov tizimlari, SMS-provayderlar, buxgalteriya dasturlari va boshqa servislar bilan API orqali integratsiya qilamiz.",
  },
  {
    question: "Ishga tushirilgandan keyin qo‘llab-quvvatlaysizmi?",
    answer: "Ha, loyiha ishga tushgandan keyin ham texnik yordam, xatolarni tuzatish va yangi funksiyalar qo‘shishni davom ettiramiz.",
  },
];
