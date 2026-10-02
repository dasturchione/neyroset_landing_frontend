import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-[#dfe5fb] bg-[#eef1fd]/80 px-4 py-2.5 text-eyebrow font-semibold uppercase text-brand-700 backdrop-blur",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-600" />
      {children}
    </p>
  );
}

/** Small letter-spaced caption between two hairlines, e.g. "— BIZNING AFZALLIKLARIMIZ —". */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#5d668c] sm:tracking-[0.3em]",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-brand-300/70" />
      {children}
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-brand-300/70" />
    </p>
  );
}

/** Highlighted word inside a heading. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-brand-600">{children}</span>;
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Letter-spaced side note shown on wide screens. */
  note?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  /** "md" for sub-sections on detail pages. */
  size?: "lg" | "md";
  id?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  note,
  align = "left",
  as: Heading = "h2",
  size = "lg",
  id,
  className,
  children,
}: SectionHeadingProps) {
  const centered = align === "center";
  const heading = (
    <Heading
      id={id}
      className={cn(
        "text-display",
        Heading === "h1" && "text-display-xl",
        size === "md" && "[font-size:clamp(1.85rem,1.35rem+1.6vw,2.75rem)]",
      )}
    >
      {title}
    </Heading>
  );

  if (centered) {
    return (
      <div className={cn("mx-auto max-w-6xl text-center", className)}>
        {note && <Kicker className="mb-4 justify-center">{note}</Kicker>}
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        {heading}
        {description && <p className="mx-auto mt-3 max-w-6xl text-lead text-body">{description}</p>}
      </div>
    );
  }

  return (
    <div className={className}>
      {(eyebrow || note) && (
        <div className="mb-5 flex items-center justify-between gap-6">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : <span />}
          {note && <Kicker className="hidden xl:flex">{note}</Kicker>}
        </div>
      )}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          {heading}
          {description && <p className="mt-2 max-w-[38rem] text-lead text-body">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
