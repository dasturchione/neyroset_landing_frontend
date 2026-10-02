import { contactSteps } from "@/data/contact";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/utils";

/** 01 Bog‘lanish → 02 Tahlil → 03 Yechim → 04 Ishga tushirish, joined by dashed connectors. */
export function ContactSteps({ className }: { className?: string }) {
  return (
    <Stagger as="ol" className={cn("grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6", className)}>
      {contactSteps.map((step, index) => {
        const Icon = step.icon;
        const last = index === contactSteps.length - 1;
        return (
          <StaggerItem as="li" key={step.title} className="relative flex items-start gap-5">
            <span
              aria-hidden="true"
              className="grid size-[4.5rem] shrink-0 place-items-center rounded-full bg-linear-to-b from-[#eef1fd] to-[#f6f8fe] text-brand-600"
            >
              <Icon className={cn("size-8", last && "fill-current")} strokeWidth={last ? 1.4 : 1.7} />
            </span>
            <div className="min-w-0 flex-1">
              <span className="inline-flex rounded-md bg-[#eef2ff] px-2 py-0.5 text-xs font-bold text-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-1.5 flex items-center gap-3">
                <h3 className="shrink-0 font-display text-[1.1rem] font-bold text-ink">{step.title}</h3>
                {!last && (
                  <span aria-hidden="true" className="hidden flex-1 items-center xl:flex">
                    <span className="h-px flex-1 border-t-2 border-dotted border-brand-200" />
                    <span className="size-1.5 rounded-full bg-brand-300" />
                  </span>
                )}
              </div>
              <p className="mt-1.5 max-w-[17rem] text-[0.92rem] leading-snug text-body">{step.description}</p>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
