/**
 * Specs for the code-drawn product mockups (dashboards, phones, terminals).
 * They are rendered as lightweight HTML instead of raster screenshots, so they
 * stay sharp at any size. Replace them with real screenshots through the
 * `image` fields on a project once those are available.
 */

export type Tone = "brand" | "violet" | "mint" | "amber" | "rose" | "sky";

export type MockKpi = {
  label: string;
  value: string;
  /** Small unit after the value, e.g. "mln so‘m". */
  unit?: string;
  delta?: string;
};

export type MockApp = {
  name: string;
  menu: string[];
  /** Index of the highlighted menu item. */
  active?: number;
};

export type AdminScreenSpec = {
  kind: "admin";
  app: MockApp;
  title: string;
  kpis: MockKpi[];
  chartTitle: string;
  chart: number[];
  sideTitle: string;
  donut: { value: number; legend: string[] };
  /** Period selector label, e.g. "Davr: So‘nggi 30 kun". */
  period?: string;
  axis?: { y: string[]; x: string[] };
  tooltip?: { value: string; delta: string };
  /** Colour the first KPI value (green), as in the hero reference. */
  highlightFirst?: boolean;
};

export type TableScreenSpec = {
  kind: "table";
  app: MockApp;
  title: string;
  columns: string[];
  rows: string[][];
  /** Column rendered as a coloured status pill. */
  statusColumn?: number;
  aside: { type: "calendar"; title: string } | { type: "summary"; title: string; items: MockKpi[] };
};

export type AnalyticsScreenSpec = {
  kind: "analytics";
  app: MockApp;
  title: string;
  kpis: MockKpi[];
  bars: number[];
  barLabels: string[];
  list: { label: string; value: string }[];
};

export type MobileScreenSpec = {
  kind: "mobile";
  appName: string;
  title: string;
  variant: "stats" | "list";
  items: { label: string; value: string; meta?: string; tone?: Tone; icon?: "projects" | "chat" | "status" }[];
};

export type OcrScreenSpec = {
  kind: "ocr";
  reading: string;
  fields: { label: string; value: string; highlight?: boolean }[];
};

export type LearningScreenSpec = {
  kind: "learning";
  appName: string;
  headline: string;
  courses: { title: string; tone: Tone }[];
};

export type PosScreenSpec = {
  kind: "pos";
  appName: string;
  categories: string[];
  products: { name: string; price: string; tone: Tone }[];
  receipt: { name: string; qty: string; sum: string }[];
  total: string;
};

export type ScreenSpec =
  | AdminScreenSpec
  | TableScreenSpec
  | AnalyticsScreenSpec
  | MobileScreenSpec
  | OcrScreenSpec
  | LearningScreenSpec
  | PosScreenSpec;
