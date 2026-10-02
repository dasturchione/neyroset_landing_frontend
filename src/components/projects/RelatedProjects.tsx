import type { Project } from "@/types/project";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ProjectCard } from "./ProjectCard";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section aria-labelledby="related-title" className="section-y relative">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="related-title"
            size="md"
            title={
              <>
                Boshqa <Accent>loyihalar</Accent>
              </>
            }
            description="Turli sohalardagi yechimlarimiz bilan tanishing."
          >
            <ButtonLink href="/projects" variant="secondary" className="self-start lg:self-end">
              Barcha loyihalar
              <ButtonArrow />
            </ButtonLink>
          </SectionHeading>
        </Reveal>
        <Stagger as="ul" stagger={0.1} className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem as="li" key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
