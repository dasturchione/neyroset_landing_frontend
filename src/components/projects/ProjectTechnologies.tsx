import { getTechnologies, technologyCategories } from "@/data/technologies";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogo";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ProjectTechnologies({ names }: { names: string[] }) {
  const items = getTechnologies(names);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="stack-title" className="section-y-sm relative">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="stack-title"
            size="md"
            title={
              <>
                Foydalanilgan <Accent>texnologiyalar</Accent>
              </>
            }
          />
        </Reveal>
        <Stagger as="ul" stagger={0.05} className="mt-10 flex flex-wrap gap-4">
          {items.map((tech) => (
            <StaggerItem as="li" key={tech.name}>
              <div className="surface-card flex items-center gap-4 py-4 pr-6 pl-4">
                <span className="grid size-12 place-items-center rounded-xl bg-canvas">
                  <TechLogo logo={tech.logo} className="size-7" />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-ink">{tech.name}</span>
                  <span className="text-sm text-muted">{technologyCategories[tech.category]}</span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
