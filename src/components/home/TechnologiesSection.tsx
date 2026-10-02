import { CodeXml } from "lucide-react";
import { getTechnologies, technologyGrid } from "@/data/technologies";
import { TechLogo } from "@/components/ui/TechLogo";
import { Accent, Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Orb } from "@/components/ui/Decor";

/** Glassy 3D laptop with a code glyph — decorative, right edge of the section. */
function CodeLaptop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute top-[4%] -right-[8%] hidden w-[14rem] xl:block 2xl:-right-[4%]">
      <Orb className="top-[-4%] left-[2%] w-12" />
      <Orb slow className="top-[58%] right-[22%] w-9 opacity-70" />
      <div className="[transform:perspective(1100px)_rotateY(-32deg)_rotateX(8deg)]">
        <div className="relative aspect-[1.15/1] rounded-[1.75rem] border border-white/80 bg-linear-to-br from-[#dfe6ff] via-[#b9c6ff] to-[#8f9cf7] p-4 shadow-[0_40px_80px_-30px_rgb(60_70_200/0.55)]">
          <div className="grid size-full place-items-center rounded-[1.1rem] bg-linear-to-br from-white via-[#eef1ff] to-[#d9defe] shadow-inner">
            <CodeXml className="size-24 text-brand-500" strokeWidth={1.6} />
          </div>
        </div>
        <div className="mx-auto -mt-1 h-5 w-[108%] -translate-x-[4%] rounded-b-3xl bg-linear-to-b from-[#e8ecfb] to-[#b4bde6] shadow-[0_18px_30px_-12px_rgb(60_70_200/0.45)]" />
      </div>
    </div>
  );
}

export function TechnologiesSection() {
  const items = getTechnologies(technologyGrid);

  return (
    <section id="texnologiyalar" aria-labelledby="texnologiyalar-title" className="section-y relative isolate overflow-hidden">
      <div className="container-wide relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)] lg:gap-8">
        <Reveal>
          <Eyebrow>Zamonaviy texnologiyalar</Eyebrow>
          <h2 id="texnologiyalar-title" className="mt-6 text-display-xl xl:[font-size:4.6rem]">
            <Accent>Texno</Accent>logiyalar
          </h2>
          <p className="mt-4 max-w-[34rem] text-lead text-body">
            Neyroset zamonaviy va ishonchli texnologiyalar asosida yuqori samarali, xavfsiz va kengaytiriladigan dasturiy
            yechimlar yaratadi.
          </p>
        </Reveal>

        <div className="relative xl:pr-[9.5rem]">
          <Stagger as="ul" stagger={0.03} className="grid grid-cols-3 gap-2.5 sm:grid-cols-7 sm:gap-3">
            {items.map((tech) => (
              <StaggerItem as="li" key={tech.name}>
                <div className="group flex aspect-[1.03/1] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white bg-white/90 p-2 text-center shadow-[0_12px_30px_-18px_rgb(40_60_140/0.35)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-card">
                  <TechLogo logo={tech.logo} className="size-9 transition-transform duration-500 group-hover:scale-110 sm:size-8 lg:size-11" />
                  <span className="text-[0.78rem] leading-tight text-ink sm:text-[0.72rem] lg:text-[0.85rem]">{tech.name}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <CodeLaptop />
        </div>
      </div>
    </section>
  );
}
