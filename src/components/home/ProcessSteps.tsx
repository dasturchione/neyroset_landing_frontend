import { MoveRight } from "lucide-react";
import { processSteps } from "@/data/advantages";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { ProcessStep } from "@/types/common";
import { cn } from "@/lib/utils";

type ProcessStepsProps = {
  /** Optional per-project descriptions (same order as the default steps). */
  steps?: { title: string; description: string }[];
};

const filled = new Set(["Dizayn", "Joriy etish"]);

/** 01 Tahlil → 02 Dizayn → 03 Dasturlash → 04 Joriy etish */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  // Project pages pass longer, project-specific text: give it two roomy columns.
  const roomy = Boolean(steps);
  const items: ProcessStep[] = processSteps.map((step, index) => ({
    ...step,
    ...(steps?.[index] ?? {}),
  }));

  return (
    <Stagger as="ol" className={cn("grid gap-4 sm:grid-cols-2", roomy ? "lg:gap-5" : "xl:grid-cols-4 xl:gap-x-16")}>
      {items.map((step, index) => {
        const Icon = step.icon;
        const isFilled = filled.has(processSteps[index].title);
        return (
          <StaggerItem as="li" key={step.title} className="relative flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full border border-[#e1e6f7] bg-white/80 text-[0.95rem] font-bold text-brand-700 xl:size-[3.25rem]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex min-w-0 flex-1 items-center gap-3.5 rounded-2xl bg-white/70 p-2.5 pr-3 shadow-[0_10px_30px_-20px_rgb(40_60_140/0.35)]">
              <span
                aria-hidden="true"
                className="grid size-14 shrink-0 place-items-center rounded-full bg-linear-to-b from-[#eef2ff] to-white text-brand-600"
              >
                <Icon className={cn("size-6", isFilled && "fill-current")} strokeWidth={isFilled ? 1.5 : 2.2} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[1rem] leading-tight font-bold text-ink">
                  <span className="sr-only">{index + 1}-bosqich: </span>
                  {step.title}
                </h3>
                <p className={cn("mt-1 leading-snug text-body", roomy ? "text-[0.92rem]" : "text-[0.8rem]")}>{step.description}</p>
              </div>
            </div>
            {!roomy && index < items.length - 1 && (
              <MoveRight
                aria-hidden="true"
                className="absolute top-1/2 -right-[3.25rem] hidden size-9 -translate-y-1/2 text-brand-400 xl:block"
                strokeWidth={1.25}
              />
            )}
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
