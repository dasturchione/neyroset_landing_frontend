import Image from "next/image";
import { cn } from "@/lib/utils";

const sources = {
  /** Glass bubbles and liquid glass flows. */
  glass: "/backgrounds/glass.webp",
  /** Lavender waves with glass spheres. */
  waves: "/backgrounds/waves.webp",
  /** Very soft white/blue waves. */
  soft: "/backgrounds/soft.webp",
} as const;

type SectionBackgroundProps = {
  image: keyof typeof sources;
  className?: string;
  /** Classes for the <img> (object-position, opacity, flip...). */
  imageClassName?: string;
  /** Extra overlay gradient classes for text readability. */
  overlayClassName?: string;
  /** Only for the first, above-the-fold background. */
  priority?: boolean;
  /** Fade the artwork into the page colour so stacked bands blend seamlessly. */
  fade?: "both" | "bottom" | "none";
};

const fades = {
  both: "[mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)]",
  bottom: "[mask-image:linear-gradient(to_bottom,#000_70%,transparent)]",
  none: "",
};

/**
 * Brand background artwork placed behind a section. Decorative: empty alt,
 * aria-hidden, lazy by default, served as optimized AVIF/WebP by next/image.
 */
export function SectionBackground({
  image,
  className,
  imageClassName,
  overlayClassName,
  priority = false,
  fade = "both",
}: SectionBackgroundProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", fades[fade], className)}>
      <Image
        src={sources[image]}
        alt=""
        fill
        sizes="100vw"
        quality={75}
        preload={priority}
        loading={priority ? "eager" : "lazy"}
        className={cn("object-cover", imageClassName)}
      />
      {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}
    </div>
  );
}
