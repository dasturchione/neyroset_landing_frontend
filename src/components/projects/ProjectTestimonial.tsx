import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/project";
import { Reveal } from "@/components/motion/Reveal";
import { initials } from "@/lib/utils";

/** Rendered only for real, client-approved testimonials. */
export function ProjectTestimonial({ testimonial }: { testimonial: Testimonial | null }) {
  if (!testimonial) return null;

  return (
    <section aria-label="Mijoz fikri" className="section-y-sm">
      <div className="container-wide">
        <Reveal y={32}>
          <figure className="surface-card relative mx-auto max-w-5xl overflow-hidden p-8 sm:p-12 lg:p-16">
            <Quote aria-hidden="true" className="size-12 fill-brand-100 text-brand-200" />
            <blockquote className="mt-6 font-display text-[clamp(1.25rem,1rem+1vw,1.75rem)] leading-snug font-semibold text-ink">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              {testimonial.photo ? (
                <Image
                  src={testimonial.photo.src}
                  alt={testimonial.photo.alt}
                  width={56}
                  height={56}
                  className="size-14 rounded-full object-cover"
                />
              ) : (
                <span aria-hidden="true" className="grid size-14 place-items-center rounded-full bg-brand-50 font-bold text-brand-600">
                  {initials(testimonial.author)}
                </span>
              )}
              <span>
                <span className="block font-semibold text-ink">{testimonial.author}</span>
                <span className="block text-sm text-muted">
                  {testimonial.role}
                  {testimonial.company ? `, ${testimonial.company}` : ""}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
