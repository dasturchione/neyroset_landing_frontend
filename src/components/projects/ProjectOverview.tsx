import { CircleAlert, Lightbulb } from "lucide-react";
import type { Project } from "@/types/project";
import { Accent, Eyebrow } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/IconTile";
import { DeviceMockup } from "@/components/mockups/DeviceMockup";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section id="loyiha-haqida" aria-labelledby="overview-title" className="section-y relative">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <Eyebrow>Loyiha haqida</Eyebrow>
            <h2 id="overview-title" className="mt-6 text-display">
              Loyiha <Accent>haqida</Accent>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-lead text-body">
              {project.fullDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Reveal delay={0.05} className="surface-card p-7 lg:p-8">
              <span aria-hidden="true" className="grid size-12 place-items-center rounded-2xl bg-rose-50 text-rose-600">
                <CircleAlert className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-title-lg font-bold">Muammo</h3>
              <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
            </Reveal>
            <Reveal delay={0.15} className="surface-card relative overflow-hidden p-7 lg:p-8">
              <div aria-hidden="true" className="absolute -top-16 -right-16 size-48 rounded-full bg-brand-50" />
              <span aria-hidden="true" className="relative grid size-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-button">
                <Lightbulb className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="relative mt-6 text-title-lg font-bold">Yechim</h3>
              <p className="relative mt-3 leading-relaxed text-muted">{project.solution}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="text-title-lg font-bold">Asosiy imkoniyatlar</h3>
          </Reveal>
          <Stagger as="ul" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {project.features.map((feature) => (
              <StaggerItem as="li" key={feature.title}>
                <article className="surface-card flex h-full items-start gap-5 p-6 lg:p-7">
                  <IconTile icon={feature.icon} />
                  <div>
                    <h4 className="font-display text-title font-bold text-ink">{feature.title}</h4>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {project.showcase && (
          <Reveal y={40} className="mt-16 lg:mt-24">
            <figure>
              <div className="relative mx-auto max-w-6xl">
                <div aria-hidden="true" className="absolute inset-x-[8%] -bottom-8 top-[20%] -z-10 rounded-full bg-brand-200/40 blur-3xl" />
                <div role="img" aria-label={`${project.title}: ${project.showcase.title}`}>
                  <DeviceMockup
                    device="browser"
                    screen={project.showcase.screen}
                    image={project.showcase.image}
                    sizes="(min-width: 1280px) 1150px, 100vw"
                  />
                </div>
              </div>
              <figcaption className="mt-6 text-center text-[0.95rem] text-muted">
                <span className="font-semibold text-ink">{project.showcase.title}.</span> {project.showcase.caption}
              </figcaption>
            </figure>
          </Reveal>
        )}
      </div>
    </section>
  );
}
