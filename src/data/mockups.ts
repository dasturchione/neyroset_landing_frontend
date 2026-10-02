import type { ScreenSpec } from "@/types/mockup";

/**
 * Sample interface content for the code-drawn product mockups.
 * Values are illustrative UI data (aria-hidden on the page), not business claims.
 */

const clinicApp = {
  name: "Clinic ERP",
  menu: ["Boshqaruv", "Bemorlar", "Qabullar", "Shifokorlar", "Kassa", "Ombor", "Hisobotlar"],
};

const accountingApp = {
  name: "Buxgalteriya",
  menu: ["Boshqaruv", "Kassa", "Hisob-fakturalar", "Kontragentlar", "Ish haqi", "Hisobotlar"],
};

const posApp = {
  name: "Market POS",
  menu: ["Savdo", "Mahsulotlar", "Ombor", "Mijozlar", "Hisobotlar"],
};

export const screens = {
  "neyroset-dashboard": {
    kind: "admin",
    app: { name: "Neyroset", menu: ["Boshqaruv", "Analitika", "Mijozlar", "Loyihalar", "Xodimlar", "Hisobotlar", "Sozlamalar"] },
    title: "Biznes ko‘rsatkichlari",
    kpis: [
      { label: "Daromad", value: "256,8", unit: "mln so‘m", delta: "+12%" },
      { label: "Mijozlar", value: "1,482", delta: "+18%" },
      { label: "Buyurtmalar", value: "892", delta: "+23%" },
      { label: "Faol tizimlar", value: "12", delta: "+33%" },
    ],
    chartTitle: "Daromad dinamikasi",
    chart: [12, 22, 26, 36, 40, 62, 46, 54, 64, 66, 74],
    sideTitle: "Loyihalar holati",
    donut: { value: 72, legend: ["Tayyor", "Jarayonda", "Rejalashtirish"] },
    period: "Davr: So‘nggi 30 kun",
    axis: { y: ["300", "200", "100", "0"], x: ["Yan", "Fev", "Mar", "Apr", "May", "Iyn"] },
    tooltip: { value: "256,8 mln", delta: "+ 12%" },
    highlightFirst: true,
  },
  "neyroset-mobile": {
    kind: "mobile",
    appName: "Neyroset",
    title: "Bugungi kun",
    variant: "stats",
    items: [
      { label: "Faol loyihalar", value: "12", tone: "brand", icon: "projects" },
      { label: "Yangi so‘rovlar", value: "5", tone: "brand", icon: "chat" },
      { label: "Tizimlar ishlamoqda", value: "98%", tone: "mint", icon: "status" },
    ],
  },

  "clinic-dashboard": {
    kind: "admin",
    app: { ...clinicApp, active: 0 },
    title: "Klinika boshqaruvi",
    kpis: [
      { label: "Bugungi qabullar", value: "64", delta: "+8" },
      { label: "Bemorlar", value: "3 120", delta: "+4%" },
      { label: "Tushum", value: "42,6 mln", delta: "+11%" },
      { label: "Shifokorlar", value: "18" },
    ],
    chartTitle: "Haftalik qabullar",
    chart: [40, 52, 47, 66, 61, 74, 69, 83, 78],
    sideTitle: "Xonalar bandligi",
    donut: { value: 81, legend: ["Band", "Bo‘sh", "Ta’mirda"] },
  },
  "clinic-patients": {
    kind: "table",
    app: { ...clinicApp, active: 2 },
    title: "Qabul jadvali",
    columns: ["Bemor", "Shifokor", "Vaqt", "Holat"],
    rows: [
      ["Dilnoza R.", "Kardiolog", "09:00", "Keldi"],
      ["Javohir T.", "Terapevt", "09:30", "Kutmoqda"],
      ["Madina S.", "Nevrolog", "10:00", "Keldi"],
      ["Bekzod A.", "Stomatolog", "10:30", "Bekor"],
      ["Nilufar K.", "Pediatr", "11:00", "Kutmoqda"],
      ["Sherzod M.", "Terapevt", "11:30", "Keldi"],
    ],
    statusColumn: 3,
    aside: { type: "calendar", title: "Oktabr" },
  },
  "clinic-reports": {
    kind: "analytics",
    app: { ...clinicApp, active: 6 },
    title: "Hisobotlar va analitika",
    kpis: [
      { label: "Oylik tushum", value: "1,24 mlrd", delta: "+9%" },
      { label: "O‘rtacha chek", value: "186 ming" },
      { label: "Qayta tashriflar", value: "38%", delta: "+5%" },
    ],
    bars: [46, 58, 52, 70, 64, 82, 76, 90, 72, 84, 95, 88],
    barLabels: ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"],
    list: [
      { label: "Kardiologiya", value: "28%" },
      { label: "Terapiya", value: "24%" },
      { label: "Stomatologiya", value: "19%" },
      { label: "Pediatriya", value: "14%" },
    ],
  },
  "clinic-mobile": {
    kind: "mobile",
    appName: "Clinic ERP",
    title: "Bugungi qabullar",
    variant: "list",
    items: [
      { label: "Dilnoza R.", value: "09:00", meta: "Kardiolog", tone: "mint" },
      { label: "Javohir T.", value: "09:30", meta: "Terapevt", tone: "amber" },
      { label: "Madina S.", value: "10:00", meta: "Nevrolog", tone: "brand" },
      { label: "Nilufar K.", value: "11:00", meta: "Pediatr", tone: "violet" },
    ],
  },

  "sms-panel": {
    kind: "analytics",
    app: { name: "SMS Gateway", menu: ["Boshqaruv", "Xabarlar", "Shablonlar", "Kampaniyalar", "API kalitlar", "Hisobotlar"], active: 0 },
    title: "Yuborishlar statistikasi",
    kpis: [
      { label: "Bugun yuborildi", value: "48 210", delta: "+6%" },
      { label: "Yetkazildi", value: "99,1%" },
      { label: "Navbatda", value: "312" },
    ],
    bars: [38, 52, 61, 49, 73, 66, 84, 79, 92, 70, 88, 96],
    barLabels: ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22"],
    list: [
      { label: "Tasdiqlash kodlari", value: "62%" },
      { label: "Eslatmalar", value: "21%" },
      { label: "Marketing", value: "11%" },
      { label: "Tizim xabarlari", value: "6%" },
    ],
  },
  "sms-messages": {
    kind: "table",
    app: { name: "SMS Gateway", menu: ["Boshqaruv", "Xabarlar", "Shablonlar", "Kampaniyalar", "API kalitlar", "Hisobotlar"], active: 1 },
    title: "Xabarlar jurnali",
    columns: ["Raqam", "Turi", "Vaqt", "Holat"],
    rows: [
      ["+998 9• ••• •• 12", "Tasdiqlash kodi", "12:04", "Yetkazildi"],
      ["+998 9• ••• •• 47", "Eslatma", "12:03", "Yetkazildi"],
      ["+998 9• ••• •• 85", "Marketing", "12:01", "Navbatda"],
      ["+998 9• ••• •• 30", "Tasdiqlash kodi", "11:58", "Yetkazildi"],
      ["+998 9• ••• •• 64", "Tizim xabari", "11:56", "Xato"],
      ["+998 9• ••• •• 19", "Eslatma", "11:52", "Yetkazildi"],
    ],
    statusColumn: 3,
    aside: {
      type: "summary",
      title: "Provayderlar",
      items: [
        { label: "Asosiy kanal", value: "Faol" },
        { label: "Zaxira kanal", value: "Tayyor" },
        { label: "O‘rtacha kechikish", value: "1,2 s" },
      ],
    },
  },
  "sms-mobile": {
    kind: "mobile",
    appName: "SMS Gateway",
    title: "So‘nggi xabarlar",
    variant: "list",
    items: [
      { label: "Xabarnoma yuborildi", value: "12:04", meta: "Tasdiqlash kodi", tone: "brand" },
      { label: "Promokod", value: "12:01", meta: "Marketing", tone: "amber" },
      { label: "Eslatma", value: "11:58", meta: "Qabul vaqti", tone: "mint" },
      { label: "Marketing xabari", value: "11:52", meta: "Kampaniya", tone: "violet" },
    ],
  },

  "ocr-scan": {
    kind: "ocr",
    reading: "01256.8",
    fields: [
      { label: "Hisoblagich", value: "№ 058742" },
      { label: "Ko‘rsatkich", value: "1256,8", highlight: true },
      { label: "Holat", value: "Aniqlangan" },
      { label: "Ishonchlilik", value: "Yuqori" },
    ],
  },
  "ocr-records": {
    kind: "table",
    app: { name: "Meter AI", menu: ["Boshqaruv", "Tasvirlar", "Ko‘rsatkichlar", "Abonentlar", "Tekshiruv", "Hisobotlar"], active: 2 },
    title: "Aniqlangan ko‘rsatkichlar",
    columns: ["Hisoblagich", "Ko‘rsatkich", "Sana", "Holat"],
    rows: [
      ["№ 058742", "1256,8", "02.10", "Tasdiqlandi"],
      ["№ 041190", "884,2", "02.10", "Tasdiqlandi"],
      ["№ 067315", "2190,4", "02.10", "Tekshiruvda"],
      ["№ 052208", "640,9", "01.10", "Tasdiqlandi"],
      ["№ 039874", "1502,1", "01.10", "Qayta suratga"],
      ["№ 061457", "977,3", "01.10", "Tasdiqlandi"],
    ],
    statusColumn: 3,
    aside: {
      type: "summary",
      title: "Navbat",
      items: [
        { label: "Yangi tasvirlar", value: "128" },
        { label: "Avto-tasdiq", value: "Yoqilgan" },
        { label: "Qo‘lda tekshiruv", value: "14" },
      ],
    },
  },
  "ocr-analytics": {
    kind: "analytics",
    app: { name: "Meter AI", menu: ["Boshqaruv", "Tasvirlar", "Ko‘rsatkichlar", "Abonentlar", "Tekshiruv", "Hisobotlar"], active: 5 },
    title: "Qayta ishlash statistikasi",
    kpis: [
      { label: "Qayta ishlangan", value: "18 430" },
      { label: "Avto-tasdiq", value: "91%" },
      { label: "O‘rtacha vaqt", value: "1,4 s" },
    ],
    bars: [40, 55, 48, 62, 70, 66, 78, 82, 74, 88, 92, 86],
    barLabels: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23"],
    list: [
      { label: "Elektr", value: "54%" },
      { label: "Suv", value: "31%" },
      { label: "Gaz", value: "15%" },
    ],
  },

  "pos-terminal": {
    kind: "pos",
    appName: "Market POS",
    categories: ["Barchasi", "Ichimliklar", "Non", "Sut", "Shirinlik"],
    products: [
      { name: "Mineral suv", price: "4 000", tone: "sky" },
      { name: "Non", price: "3 500", tone: "amber" },
      { name: "Sut 1L", price: "12 000", tone: "brand" },
      { name: "Qatiq", price: "9 000", tone: "mint" },
      { name: "Shokolad", price: "15 000", tone: "rose" },
      { name: "Choy", price: "22 000", tone: "violet" },
    ],
    receipt: [
      { name: "Sut 1L", qty: "×2", sum: "24 000" },
      { name: "Non", qty: "×3", sum: "10 500" },
      { name: "Choy", qty: "×1", sum: "22 000" },
    ],
    total: "56 500",
  },
  "pos-sales": {
    kind: "analytics",
    app: { ...posApp, active: 4 },
    title: "Savdo hisobotlari",
    kpis: [
      { label: "Bugungi savdo", value: "18,4 mln", delta: "+7%" },
      { label: "Cheklar", value: "426" },
      { label: "O‘rtacha chek", value: "43 ming" },
    ],
    bars: [30, 42, 58, 66, 52, 48, 61, 74, 88, 92, 80, 64],
    barLabels: ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
    list: [
      { label: "Naqd", value: "41%" },
      { label: "Karta", value: "37%" },
      { label: "QR to‘lov", value: "22%" },
    ],
  },
  "pos-inventory": {
    kind: "table",
    app: { ...posApp, active: 2 },
    title: "Ombor qoldiqlari",
    columns: ["Mahsulot", "Qoldiq", "Narx", "Holat"],
    rows: [
      ["Sut 1L", "84 dona", "12 000", "Yetarli"],
      ["Non", "36 dona", "3 500", "Yetarli"],
      ["Mineral suv", "12 dona", "4 000", "Kam qoldi"],
      ["Choy", "58 dona", "22 000", "Yetarli"],
      ["Shokolad", "0 dona", "15 000", "Tugagan"],
      ["Qatiq", "40 dona", "9 000", "Yetarli"],
    ],
    statusColumn: 3,
    aside: {
      type: "summary",
      title: "Filiallar",
      items: [
        { label: "Markaziy ombor", value: "Sinxron" },
        { label: "1-filial", value: "Sinxron" },
        { label: "2-filial", value: "Offline" },
      ],
    },
  },

  "learning-home": {
    kind: "learning",
    appName: "NeyroLearn",
    headline: "Yangi bilimlar — yangi imkoniyatlar",
    courses: [
      { title: "Web dasturlash", tone: "brand" },
      { title: "UI/UX dizayn", tone: "rose" },
      { title: "Ma’lumotlar tahlili", tone: "violet" },
    ],
  },
  "learning-students": {
    kind: "table",
    app: { name: "NeyroLearn", menu: ["Boshqaruv", "Kurslar", "Talabalar", "Topshiriqlar", "Sertifikatlar", "Sozlamalar"], active: 2 },
    title: "Talabalar progressi",
    columns: ["Talaba", "Kurs", "Progress", "Holat"],
    rows: [
      ["Aziza N.", "Web dasturlash", "86%", "Faol"],
      ["Otabek R.", "UI/UX dizayn", "64%", "Faol"],
      ["Malika U.", "Ma’lumotlar tahlili", "100%", "Tugatdi"],
      ["Sardor Q.", "Web dasturlash", "42%", "Faol"],
      ["Kamola J.", "UI/UX dizayn", "18%", "To‘xtatilgan"],
      ["Jasur E.", "Ma’lumotlar tahlili", "100%", "Tugatdi"],
    ],
    statusColumn: 3,
    aside: { type: "calendar", title: "Dars jadvali" },
  },
  "learning-mobile": {
    kind: "mobile",
    appName: "NeyroLearn",
    title: "Mening kurslarim",
    variant: "list",
    items: [
      { label: "Web dasturlash", value: "86%", meta: "12-dars", tone: "brand" },
      { label: "UI/UX dizayn", value: "64%", meta: "8-dars", tone: "rose" },
      { label: "Ma’lumotlar tahlili", value: "30%", meta: "4-dars", tone: "violet" },
    ],
  },

  "accounting-dashboard": {
    kind: "admin",
    app: { ...accountingApp, active: 0 },
    title: "Moliyaviy holat",
    kpis: [
      { label: "Kirim", value: "512 mln", delta: "+9%" },
      { label: "Chiqim", value: "348 mln" },
      { label: "Debitorlik", value: "64 mln" },
      { label: "Kassa qoldig‘i", value: "92 mln" },
    ],
    chartTitle: "Pul oqimi",
    chart: [44, 50, 46, 58, 54, 66, 63, 72, 80],
    sideTitle: "Xarajatlar tarkibi",
    donut: { value: 64, legend: ["Ish haqi", "Ta’minot", "Boshqa"] },
  },
  "accounting-ledger": {
    kind: "table",
    app: { ...accountingApp, active: 2 },
    title: "Hisob-fakturalar",
    columns: ["Kontragent", "Summa", "Sana", "Holat"],
    rows: [
      ["Kontragent #1042", "18 400 000", "01.10", "To‘langan"],
      ["Kontragent #1038", "7 250 000", "30.09", "Kutilmoqda"],
      ["Kontragent #1031", "12 900 000", "29.09", "To‘langan"],
      ["Kontragent #1027", "4 380 000", "28.09", "Muddati o‘tgan"],
      ["Kontragent #1019", "9 640 000", "27.09", "To‘langan"],
      ["Kontragent #1012", "6 120 000", "26.09", "Kutilmoqda"],
    ],
    statusColumn: 3,
    aside: {
      type: "summary",
      title: "Oy yakuni",
      items: [
        { label: "Jami kirim", value: "512 mln" },
        { label: "Jami chiqim", value: "348 mln" },
        { label: "Sof oqim", value: "+164 mln" },
      ],
    },
  },
  "accounting-reports": {
    kind: "analytics",
    app: { ...accountingApp, active: 5 },
    title: "Moliyaviy hisobotlar",
    kpis: [
      { label: "Sof foyda", value: "164 mln", delta: "+6%" },
      { label: "Rentabellik", value: "32%" },
      { label: "Soliq to‘lovlari", value: "41 mln" },
    ],
    bars: [52, 48, 60, 58, 66, 72, 69, 78, 74, 86, 82, 90],
    barLabels: ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"],
    list: [
      { label: "Ish haqi", value: "42%" },
      { label: "Ta’minot", value: "31%" },
      { label: "Ijara", value: "15%" },
      { label: "Boshqa", value: "12%" },
    ],
  },
} satisfies Record<string, ScreenSpec>;

export type ScreenId = keyof typeof screens;

export function getScreen(id: ScreenId): ScreenSpec {
  return screens[id];
}
