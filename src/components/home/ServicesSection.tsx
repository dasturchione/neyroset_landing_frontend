import { services } from "@/data/services";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="xizmatlar" aria-labelledby="xizmatlar-title" className="section-y relative">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="xizmatlar-title"
            eyebrow="Bizning xizmatlar"
            note="Sizning g‘oyangiz — bizning yechimimiz"
            title={
              <>
                Bizning <Accent>xizmatlar</Accent>
              </>
            }
            description={
              <>
                G‘oyangizni to‘liq raqamli mahsulotga aylantirish uchun kerak bo‘lgan barcha{" "}
                <strong className="font-bold text-ink">xizmatlar</strong> bir joyda.
              </>
            }
          />
        </Reveal>
        <Stagger as="ul" stagger={0.05} className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-5">
          {services.map((service) => (
            <StaggerItem as="li" key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
