import type { Project } from "@/types/project";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/** Process for this project + verified results. Unverified metrics are never rendered. */
export function ProjectProcess({ project }: { project: Project }) {
  const verified = project.outcomes.filter((metric) => metric.verified);

  return (
    <section aria-labelledby="process-title" className="section-y relative bg-linear-to-b from-transparent via-white/70 to-transparent">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="Jarayon"
            title={
              verified.length > 0 ? (
                <>
                  Jarayon va <Accent>natijalar</Accent>
                </>
              ) : (
                <>
                  Loyiha <Accent>jarayoni</Accent>
                </>
              )
            }
            description="Har bir bosqichda mijoz bilan yaqin hamkorlikda ishlab, natijani qisqa iteratsiyalarda taqdim etamiz."
          />
        </Reveal>
        <div className="mt-12 lg:mt-14">
          <ProcessSteps steps={project.process} />
        </div>

        {verified.length > 0 && (
          <div className="mt-16">
            <h3 className="text-title-lg font-bold">Natijalar</h3>
            <Stagger as="ul" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {verified.map((metric) => (
                <StaggerItem as="li" key={metric.label}>
                  <div className="surface-card p-7">
                    <p className="font-display text-[2.5rem] leading-none font-extrabold tracking-tight text-brand-600">{metric.value}</p>
                    <p className="mt-3 text-[0.95rem] text-muted">{metric.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}
      </div>
    </section>
  );
}
