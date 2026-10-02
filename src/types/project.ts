import type { LucideIcon } from "lucide-react";
import type { ImageAsset, Metric } from "./common";
import type { Tone } from "./mockup";
import type { ScreenId } from "@/data/mockups";

export type ProjectCategory = "erp" | "ai" | "web" | "mobile" | "automation";

export type ProjectVisual = {
  screen: ScreenId;
  /** Optional phone screen layered over the main device. */
  mobile?: ScreenId;
  /** "screen" = the interface fills the whole cover without a device frame. */
  device: "laptop" | "phone" | "screen";
  /** Real screenshot; takes precedence over the code-drawn mockup. */
  image?: ImageAsset;
};

export type GalleryItem = {
  title: string;
  caption: string;
  screen: ScreenId;
  device: "browser" | "phone";
  image?: ImageAsset;
};

export type ProjectFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProjectStep = {
  title: string;
  description: string;
};

/** Only add testimonials that a real client has approved for publication. */
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  photo?: ImageAsset;
};

export type Project = {
  slug: string;
  title: string;
  /** Full H1 of the project page. */
  headline: string;
  categories: ProjectCategory[];
  /** Human readable label shown in pills, e.g. "ERP / Tibbiyot". */
  categoryLabel: string;
  industry: string;
  platforms: string[];
  shortDescription: string;
  fullDescription: string[];
  accent: Tone;
  featured: boolean;
  /** Higher numbers show first. */
  order: number;

  cover: ProjectVisual;
  hero: ProjectVisual;
  /** Wide screenshot shown under the feature list. */
  showcase?: GalleryItem;
  gallery: GalleryItem[];

  /** Names that match entries in `data/technologies.ts`. */
  technologies: string[];

  /** TODO-able facts. `null` hides the field on the page. */
  client: string | null;
  duration: string | null;
  year: number | null;
  demoUrl: string | null;

  problem: string;
  solution: string;
  features: ProjectFeature[];
  process: ProjectStep[];
  /** Rendered only when at least one metric is `verified`. */
  outcomes: Metric[];
  testimonial: Testimonial | null;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};
