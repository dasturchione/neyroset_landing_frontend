"use client";

import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Testimonial } from "@/types/project";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** "Mijozlar fikri" panel with a small carousel. Shows only real, approved testimonials. */
export function TestimonialsBlock({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const current = items[index];
  const single = items.length < 2;
  const go = (delta: number) => setIndex((value) => (value + delta + items.length) % items.length);

  return (
    <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white bg-white/70 p-3 shadow-[0_24px_60px_-36px_rgb(40_60_140/0.4)] backdrop-blur sm:p-4">
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8">
        <div className="relative flex flex-col justify-center px-5 pt-6 pb-2 sm:px-8 lg:py-6">
          <Eyebrow className="w-fit">Mijozlar fikri</Eyebrow>
          <h3 className="mt-5 max-w-md font-display text-[clamp(1.5rem,1.15rem+0.9vw,1.85rem)] leading-[1.12] font-extrabold tracking-[-0.02em]">
            Biz uchun eng katta muvaffaqiyat — <span className="text-brand-600">mijozlarimiz ishonchi.</span>
          </h3>
          <div className="mt-6 flex gap-3 lg:absolute lg:right-0 lg:bottom-6 lg:mt-0">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={single}
              aria-label="Oldingi fikr"
              className="focus-ring grid size-12 place-items-center rounded-full border border-[#e6eaf6] bg-white text-ink shadow-xs transition-colors hover:border-brand-200 disabled:cursor-default"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={single}
              aria-label="Keyingi fikr"
              className="focus-ring grid size-12 place-items-center rounded-full border border-[#e6eaf6] bg-white text-ink shadow-xs transition-colors hover:border-brand-200 disabled:cursor-default"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.4rem] bg-white/85 p-6 sm:p-8 sm:pl-24">
          <span aria-hidden="true" className="absolute top-6 left-6 hidden font-display text-[5rem] leading-[0.8] font-extrabold text-brand-400/80 sm:block">
            “
          </span>
          <span
            aria-hidden="true"
            className="absolute top-1/2 right-6 hidden size-24 -translate-y-1/2 place-items-center rounded-full bg-[#f3f5fd] font-display text-[4rem] leading-none font-extrabold text-brand-200 md:grid"
          >
            ”
          </span>
          <AnimatePresence mode="wait">
            <m.figure
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="relative md:pr-28"
            >
              <blockquote className="text-[1.02rem] leading-relaxed text-body">
                <span className="font-bold text-ink">“</span>
                {current.quote}
                <span className="font-bold text-ink">”</span>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-4">
                {current.photo && (
                  <Image
                    src={current.photo.src}
                    alt={current.photo.alt}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover ring-4 ring-[#f1f4fd]"
                  />
                )}
                <span>
                  <span className="block font-bold text-ink">{current.author}</span>
                  <span className="block text-sm text-muted">
                    {current.company ? `${current.company}, ${current.role}` : current.role}
                  </span>
                </span>
              </figcaption>
            </m.figure>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
