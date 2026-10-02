import { Code, Crown, Headset, Layers, Pencil, Rocket, Search, Settings, ShieldCheck, Zap } from "lucide-react";
import type { Advantage, ProcessStep } from "@/types/common";

export const advantages: Advantage[] = [
  {
    title: "Premium UI/UX",
    description: "Zamonaviy, qulay va biznesingiz imijini oshiruvchi dizayn yechimlari.",
    icon: Crown,
  },
  {
    title: "Ishonchli backend",
    description: "Xavfsiz, barqaror va yuqori yuklamalarga tayyor arxitektura.",
    icon: ShieldCheck,
  },
  {
    title: "Full-cycle development",
    description: "G‘oyadan tortib ishga tushirishgacha bo‘lgan to‘liq jarayonni o‘zimiz amalga oshiramiz.",
    icon: Layers,
  },
  {
    title: "Avtomatlashtirish yechimlari",
    description: "Takroriy jarayonlarni avtomatlashtirib, vaqt va resurslaringizni tejaymiz.",
    icon: Settings,
  },
  {
    title: "Tez joriy etish",
    description: "MVP va tayyor yechimlarni qisqa muddatlarda ishga tushiramiz.",
    icon: Zap,
  },
  {
    title: "Qo‘llab-quvvatlash",
    description: "Loyiha ishga tushgandan keyin ham doimiy texnik yordam va rivojlantirish.",
    icon: Headset,
  },
];

/** Icons drawn filled in the reference. */
export const filledAdvantageIcons = new Set(["Premium UI/UX", "Avtomatlashtirish yechimlari", "Tez joriy etish"]);

export const processSteps: ProcessStep[] = [
  { title: "Tahlil", description: "Maqsad va talablarni chuqur o‘rganamiz.", icon: Search },
  { title: "Dizayn", description: "Zamonaviy UI/UX va tizim arxitekturasini ishlab chiqamiz.", icon: Pencil },
  { title: "Dasturlash", description: "Zamonaviy texnologiyalar asosida sifatli ishlab chiqamiz.", icon: Code },
  { title: "Joriy etish", description: "Loyihani ishga tushirib, qo‘llab-quvvatlaymiz.", icon: Rocket },
];
