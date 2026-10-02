import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectCover } from "@/components/mockups/ProjectVisual";
import { CategoryPill } from "./CategoryPill";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
  className?: string;
};

export function ProjectCard({ project, headingLevel: Heading = "h3", className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "surface-card group relative flex h-full flex-col overflow-hidden p-1.5 transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-card",
        className,
      )}
    >
      <ProjectCover
        visual={project.cover}
        title={project.title}
        accent={project.accent}
        className="aspect-[400/305] rounded-[1rem]"
      />
      <div className="flex flex-1 flex-col px-4 pt-4 pb-4 sm:px-5 sm:pb-5">
        <CategoryPill accent={project.accent}>{project.categoryLabel}</CategoryPill>
        <Heading className="mt-3 font-display text-[1.35rem] leading-tight font-bold tracking-[-0.02em]">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring rounded after:absolute after:inset-0 after:rounded-card after:content-['']"
          >
            {project.title}
          </Link>
        </Heading>
        <div className="mt-2 flex flex-1 items-center justify-between gap-4">
          <p className="text-[0.92rem] leading-normal text-body">{project.shortDescription}</p>
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eef2ff] text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white"
          >
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
