import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/button focus-ring inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl transition-[background-color,box-shadow,transform,color] duration-300 ease-out active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-linear-to-b from-[#2f5bff] to-brand-600 font-medium text-white shadow-button hover:to-brand-700 hover:-translate-y-0.5",
  secondary:
    "bg-white font-semibold text-ink border border-white shadow-[0_10px_30px_-12px_rgb(40_60_140/0.25)] hover:-translate-y-0.5 hover:shadow-card",
  ghost: "font-semibold text-ink hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-7 text-base sm:h-[3.6rem] sm:px-9 sm:text-[1.0625rem]",
};

export function buttonClasses({ variant = "primary", size = "md", className }: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

export function ButtonLink({ variant, size, className, external, children, href, ...props }: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  if (external && typeof href === "string") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

/** Arrow that nudges right on parent hover. */
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("size-[1.15em] transition-transform duration-300 group-hover/button:translate-x-1", className)}
    >
      <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
