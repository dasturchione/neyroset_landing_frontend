import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "@/types/project";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Glow, Orb } from "@/components/ui/Decor";
import { ProjectHeroVisual } from "@/components/mockups/ProjectVisual";
import { Parallax } from "@/components/motion/Parallax";
import { CategoryPill } from "./CategoryPill";
import { ProjectMeta } from "./ProjectMeta";

function Headline({ project }: { project: Project }) {
  if (!project.headline.startsWith(project.title)) return <>{project.headline}</>;
  return (
    <>
      <span className="text-brand-600">{project.title}</span>
      {project.headline.slice(project.title.length)}
    </>
  );
}

export function ProjectHero({ project, breadcrumbs }: { project: Project; breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <Glow className="-top-40 right-[-20%] -z-10 size-[60rem]" />
      <Orb className="top-[16%] left-[46%] hidden size-12 lg:block" />
      <div className="container-wide">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <div className="animate-rise">
              <Breadcrumbs items={breadcrumbs} />
            </div>
            <CategoryPill accent={project.accent} className="mt-8 animate-rise [animation-delay:40ms]">
              {project.categoryLabel}
            </CategoryPill>
            <h1 id="page-title" className="mt-6 text-display [text-wrap:wrap] animate-rise [animation-delay:80ms] lg:[font-size:clamp(2.5rem,1.3rem+2.2vw,3.6rem)]">
              <Headline project={project} />
            </h1>
            <p className="mt-6 max-w-xl text-lead text-body animate-rise [animation-delay:140ms]">{project.shortDescription}</p>
            <div className="mt-10 flex flex-col gap-4 animate-rise [animation-delay:220ms] sm:flex-row">
              {project.demoUrl ? (
                <ButtonLink href={project.demoUrl} external size="lg">
                  Demo ko‘rish
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </ButtonLink>
              ) : (
                <ButtonLink href="#interfeys" size="lg">
                  Interfeysni ko‘rish
                  <ChevronDown aria-hidden="true" className="size-5" />
                </ButtonLink>
              )}
              <ButtonLink href="/contact" size="lg" variant="secondary">
                Bog‘lanish
                <ButtonArrow />
              </ButtonLink>
            </div>
          </div>
          <Parallax offset={40}>
            <div className="animate-rise [animation-delay:160ms]">
              <ProjectHeroVisual visual={project.hero} title={project.title} accent={project.accent} />
            </div>
          </Parallax>
        </div>
        <div className="mt-16 animate-rise [animation-delay:320ms] lg:mt-20">
          <ProjectMeta project={project} />
        </div>
      </div>
    </section>
  );
}
