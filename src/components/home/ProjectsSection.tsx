import { getFeaturedProjects } from "@/lib/projects";
import { projectCategoryLabels } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FilterButtons, FilterItem, ProjectFilter } from "@/components/projects/ProjectFilter";
import { Reveal } from "@/components/motion/Reveal";
import { Orb } from "@/components/ui/Decor";
import type { ProjectCategory } from "@/types/project";
import { TestimonialsBlock } from "./TestimonialsBlock";

const filterCategories: ProjectCategory[] = ["erp", "ai", "web", "mobile"];

export function ProjectsSection() {
  const featured = getFeaturedProjects(4);
  const options = filterCategories.map((category) => ({
    value: category,
    label: projectCategoryLabels[category],
    count: featured.filter((project) => project.categories.includes(category)).length,
  }));

  return (
    <section id="loyihalar" aria-labelledby="loyihalar-title" className="section-y relative">
      <Orb className="top-[9%] left-[66%] hidden w-14 lg:block" />
      <div className="container-wide">
        <ProjectFilter options={options} total={featured.length}>
          <Reveal>
            <SectionHeading
              id="loyihalar-title"
              eyebrow="Portfolio"
              title={
                <>
                  <Accent>Tanlangan</Accent> loyihalar
                </>
              }
              description="Har bir loyiha — bu ishonch, tajriba va natija. Quyida bizning so‘nggi va eng muhim loyihalarimiz bilan tanishing."
            >
              <FilterButtons className="lg:mb-4" />
            </SectionHeading>
          </Reveal>

          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {featured.map((project) => (
              <FilterItem key={project.slug} categories={project.categories}>
                <ProjectCard project={project} />
              </FilterItem>
            ))}
          </ul>
        </ProjectFilter>

        <Reveal className="mt-5">
          <TestimonialsBlock items={testimonials} />
        </Reveal>
      </div>
    </section>
  );
}
