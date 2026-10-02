import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path starting with "/" — used for the canonical URL and og:url. */
  path: string;
  keywords?: string[];
  /** When true the title is used as-is instead of "%s | Neyroset". */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /**
   * Share image. Defaults to the site-wide generated card. Pass `null` for routes
   * that have their own `opengraph-image` file (it takes precedence).
   */
  image?: string | null;
};

const DEFAULT_OG_IMAGE = "/opengraph-image";

/**
 * Builds consistent page metadata: canonical URL, Open Graph and Twitter.
 * Open Graph images come from the `opengraph-image` file conventions.
 */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const images = image ? [{ url: image, width: 1200, height: 630, alt: siteConfig.title }] : undefined;
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
}
