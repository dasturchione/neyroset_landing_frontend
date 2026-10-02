import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** The "N" brand mark on its own (used inside mockups and illustrations). */
export function LogoMark({ className, alt = "" }: { className?: string; alt?: string }) {
  return (
    <Image
      src="/brand/neyroset-mark.png"
      alt={alt}
      width={256}
      height={256}
      sizes="64px"
      className={cn("size-9 object-contain", className)}
    />
  );
}

/** Full logo (mark + wordmark) linking to the homepage. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — bosh sahifa`}
      className={cn("focus-ring inline-flex shrink-0 items-center rounded-xl", className)}
    >
      <Image
        src="/brand/neyroset-logo.png"
        alt={siteConfig.name}
        width={960}
        height={223}
        sizes="200px"
        loading="eager"
        className="h-9 w-auto sm:h-10 xl:h-11"
      />
    </Link>
  );
}
