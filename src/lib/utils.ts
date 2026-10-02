import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** tailwind-merge aware of the custom tokens in globals.css (so `text-lead` is a size, not a color). */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display-xl", "display", "title-lg", "title", "lead", "eyebrow"],
      shadow: ["soft", "card", "float", "button"],
      radius: ["tile", "card", "panel"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
