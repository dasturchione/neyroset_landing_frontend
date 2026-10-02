import type { ReactNode } from "react";
import type { Tone } from "@/types/mockup";
import { cn } from "@/lib/utils";

const tones: Record<Tone, { pill: string; dot: string }> = {
  brand: { pill: "bg-[#eef2ff] text-brand-700", dot: "bg-brand-600" },
  violet: { pill: "bg-violet-50 text-violet-700", dot: "bg-violet-600" },
  mint: { pill: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  amber: { pill: "bg-orange-50 text-orange-600", dot: "bg-orange-500" },
  rose: { pill: "bg-rose-50 text-rose-600", dot: "bg-rose-500" },
  sky: { pill: "bg-sky-50 text-sky-700", dot: "bg-sky-500" },
};

export function CategoryPill({ children, accent = "brand", className }: { children: ReactNode; accent?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[0.8rem] font-semibold tracking-[0.04em] uppercase",
        tones[accent].pill,
        className,
      )}
    >
      <span aria-hidden="true" className={cn("size-2 rounded-full", tones[accent].dot)} />
      {children}
    </span>
  );
}
