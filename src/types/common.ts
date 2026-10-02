import type { LucideIcon } from "lucide-react";

/** Raster image that can be rendered through next/image. */
export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: string;
  /** Section id on the homepage used for scroll-spy highlighting. */
  sectionId?: string;
  /** Inner pages that should also highlight this item, e.g. "/projects". */
  matchPath?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  /** Real portrait. When omitted a branded monogram placeholder is rendered. */
  photo?: ImageAsset;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  icon: LucideIcon;
};

export type TechnologyCategory = "frontend" | "backend" | "mobile" | "data" | "infrastructure";

export type Technology = {
  name: string;
  category: TechnologyCategory;
  logo: TechLogo;
};

/** Brand mark rendered as an inline SVG — no network requests, no client JS. */
export type TechLogo =
  | { type: "path"; path: string; color: string }
  | { type: "monogram"; text: string; color: string; shape?: "hex" | "circle" }
  | { type: "icon"; icon: LucideIcon; color: string };

export type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** A verifiable public figure shown on the site. Only render when `verified` is true. */
export type Metric = {
  value: string;
  label: string;
  verified: boolean;
};
