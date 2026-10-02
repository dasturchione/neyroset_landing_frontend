import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fe",
    theme_color: "#1f44f0",
    lang: siteConfig.language,
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
