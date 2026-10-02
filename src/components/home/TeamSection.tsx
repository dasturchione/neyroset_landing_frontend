import { team } from "@/data/team";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Orb } from "@/components/ui/Decor";
import { TeamMemberCard } from "./TeamMemberCard";

export function TeamSection() {
  return (
    <section id="jamoa" aria-labelledby="jamoa-title" className="section-y relative">
      <Orb slow className="top-[38%] right-[1.5%] hidden w-14 opacity-70 blur-[1px] xl:block" />
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="jamoa-title"
            eyebrow="Bizning jamoa"
            note="Bir galda katta imkoniyatlarga"
            title={
              <>
                Bizning <Accent>jamoa</Accent>
              </>
            }
            description="Neyroset ortida g‘oyalarni real mahsulotga aylantiradigan tajribali va fidoyi mutaxassislar jamoasi turibdi."
          />
        </Reveal>
        <Stagger as="ul" className="mt-8 grid gap-5 lg:gap-6 xl:grid-cols-3">
          {team.map((member) => (
            <StaggerItem as="li" key={member.slug}>
              <TeamMemberCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
