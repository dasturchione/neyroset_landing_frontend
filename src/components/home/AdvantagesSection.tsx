import { advantages, filledAdvantageIcons } from "@/data/advantages";
import { Accent, Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/utils";
import { ProcessSteps } from "./ProcessSteps";

export function AdvantagesSection() {
  return (
    <section aria-labelledby="afzalliklar-title" className="section-y relative">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="afzalliklar-title"
            align="center"
            note="Bizning afzalliklarimiz"
            title={
              <>
                Nega aynan <Accent>Neyroset?</Accent>
              </>
            }
            description="Biz faqat kod yozmaymiz — biznesingiz uchun haqiqiy qiymat yaratuvchi raqamli yechimlar ishlab chiqamiz."
          />
        </Reveal>

        <Stagger as="ul" className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-5">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            const filled = filledAdvantageIcons.has(advantage.title);
            return (
              <StaggerItem as="li" key={advantage.title}>
                <article className="surface-card flex h-full items-center gap-5 p-4 sm:gap-7 sm:p-5">
                  <span
                    aria-hidden="true"
                    className="grid size-20 shrink-0 place-items-center rounded-[1.1rem] bg-linear-to-br from-white to-[#eceffd] text-brand-600 shadow-[0_14px_30px_-16px_rgb(60_70_200/0.35)] ring-1 ring-[#eef1fb] sm:size-[5.75rem]"
                  >
                    <Icon
                      className={cn("size-9 sm:size-10", filled && "fill-current")}
                      strokeWidth={filled ? 1.4 : 1.9}
                    />
                  </span>
                  <div>
                    <h3 className="text-[1.15rem] leading-snug font-bold tracking-[-0.01em] sm:text-[1.2rem]">{advantage.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-snug text-body">{advantage.description}</p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-10">
          <Kicker className="mb-6 justify-center">Loyiha jarayoni</Kicker>
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}
