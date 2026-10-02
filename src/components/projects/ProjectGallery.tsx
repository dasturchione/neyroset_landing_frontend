import type { Project } from "@/types/project";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceMockup } from "@/components/mockups/DeviceMockup";
import { Reveal } from "@/components/motion/Reveal";
import { GalleryLightbox, type LightboxItem } from "./GalleryLightbox";

export function ProjectGallery({ project }: { project: Project }) {
  if (project.gallery.length === 0) return null;

  const items: LightboxItem[] = project.gallery.map((item) => ({
    title: item.title,
    caption: item.caption,
    narrow: item.device === "phone",
    media: (
      <div role="img" aria-label={`${project.title}: ${item.title}`}>
        <DeviceMockup device={item.device} screen={item.screen} image={item.image} sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
      </div>
    ),
  }));

  return (
    <section id="interfeys" aria-labelledby="gallery-title" className="section-y relative">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="gallery-title"
            eyebrow="Interfeys"
            title={
              <>
                Interfeysdan <Accent>lavhalar</Accent>
              </>
            }
            description="Tizimning asosiy ekranlari. Kattalashtirib ko‘rish uchun rasm ustiga bosing."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-12 lg:mt-14">
          <GalleryLightbox items={items} />
        </Reveal>
      </div>
    </section>
  );
}
