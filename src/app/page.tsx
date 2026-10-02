import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import { graph, organizationSchema, websiteSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { HeroSection } from "@/components/home/HeroSection";
import { TeamSection } from "@/components/home/TeamSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  image: null,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(organizationSchema(), websiteSchema())} />
      <HeroSection />

      {/* Order mirrors the main navigation: jamoa → xizmatlar → loyihalar → texnologiyalar */}
      <div className="relative isolate">
        <SectionBackground image="soft" imageClassName="object-[50%_35%] opacity-90" />
        <TeamSection />
        <ServicesSection />
      </div>

      <div className="relative isolate">
        <SectionBackground image="glass" imageClassName="-scale-x-100 object-top opacity-55" />
        <ProjectsSection />
      </div>

      <div className="relative isolate">
        <SectionBackground image="soft" imageClassName="-scale-x-100 object-[50%_40%] opacity-90" />
        <TechnologiesSection />
        <AdvantagesSection />
      </div>

      <CTASection full />
    </>
  );
}
