import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Glow, Orb } from "@/components/ui/Decor";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

/** Top section for inner pages; holds the page's single H1. */
export function PageHero({ eyebrow, title, description, breadcrumbs, children, aside, className }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className={cn("relative isolate overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20", className)}>
      <Glow className="-top-48 right-[-20%] -z-10 size-[56rem]" />
      <Orb className="top-[22%] right-[30%] hidden size-14 lg:block" />
      <div className="container-wide">
        {breadcrumbs && (
          <div className="mb-8 animate-rise">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="animate-rise">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 id="page-title" className="mt-6 text-display-xl animate-rise [animation-delay:60ms]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-body animate-rise [animation-delay:140ms]">{description}</p>
            {children && <div className="mt-10 animate-rise [animation-delay:220ms]">{children}</div>}
          </div>
          {aside && <div className="animate-rise [animation-delay:260ms]">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
