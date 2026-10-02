import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconTileProps = {
  icon: LucideIcon;
  size?: "md" | "lg";
  className?: string;
};

/** Soft blue square holding a line icon — the recurring motif of the design. */
export function IconTile({ icon: Icon, size = "md", className }: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-2xl bg-linear-to-b from-brand-50 to-[#f3f5ff] text-brand-600 ring-1 ring-inset ring-brand-100/80",
        size === "md" ? "size-14" : "size-16 sm:size-[4.5rem]",
        className,
      )}
    >
      <Icon className={size === "md" ? "size-6" : "size-7 sm:size-8"} strokeWidth={1.75} />
    </span>
  );
}
