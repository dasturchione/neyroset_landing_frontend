"use client";

import { m } from "motion/react";
import { createContext, use, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FilterState = { active: string; interacted: boolean };
type FilterOption = { value: string; label: string; count: number };

type FilterContextValue = {
  state: FilterState;
  setActive: (value: string) => void;
  options: FilterOption[];
};

const FilterContext = createContext<FilterContextValue | null>(null);

function useFilter() {
  const value = use(FilterContext);
  if (!value) throw new Error("ProjectFilter komponenti ichida ishlatilishi kerak");
  return value;
}

type ProjectFilterProps = {
  options: FilterOption[];
  total: number;
  children: ReactNode;
};

/**
 * Client-side category filter. Every project card is still server-rendered in
 * the HTML (good for crawling); filtering only toggles visibility.
 */
export function ProjectFilter({ options, total, children }: ProjectFilterProps) {
  const [state, setState] = useState<FilterState>({ active: "all", interacted: false });
  const all: FilterOption[] = [{ value: "all", label: "Barchasi", count: total }, ...options];
  const visibleCount = all.find((option) => option.value === state.active)?.count ?? total;

  return (
    <FilterContext value={{ state, options: all, setActive: (active) => setState({ active, interacted: true }) }}>
      {children}
      <p aria-live="polite" className="sr-only">
        {visibleCount} ta loyiha ko‘rsatilmoqda
      </p>
    </FilterContext>
  );
}

export function FilterButtons({ className }: { className?: string }) {
  const { state, options, setActive } = useFilter();
  return (
    <div
      role="group"
      aria-label="Loyihalarni yo‘nalish bo‘yicha saralash"
      className={cn(
        "flex w-fit max-w-full flex-wrap gap-2 rounded-[1.75rem] border border-white bg-white/75 p-2 shadow-[0_14px_40px_-24px_rgb(40_60_140/0.35)] backdrop-blur",
        className,
      )}
    >
      {options.map((option) => {
        const pressed = state.active === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={pressed}
            onClick={() => setActive(option.value)}
            className={cn(
              "focus-ring h-11 rounded-full px-6 text-[0.95rem] font-medium transition-colors duration-300 sm:px-7",
              pressed
                ? "bg-linear-to-b from-[#2f5bff] to-brand-600 text-white shadow-button"
                : "border border-[#e6eaf6] bg-white text-ink hover:border-brand-200",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function FilterItem({ categories, children, className }: { categories: string[]; children: ReactNode; className?: string }) {
  const { state } = useFilter();
  const visible = state.active === "all" || categories.includes(state.active);

  return (
    <m.li
      key={state.active}
      hidden={!visible}
      className={className}
      initial={state.interacted ? { opacity: 0, y: 18 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </m.li>
  );
}
