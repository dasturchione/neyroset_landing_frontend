"use client";

import { useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  title: string;
  caption: string;
  /** Server-rendered artwork (mockup or next/image). */
  media: ReactNode;
  /** Narrow items (phones) get a narrower stage. */
  narrow?: boolean;
};

export function GalleryLightbox({ items }: { items: LightboxItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = items[index];

  const open = (next: number) => {
    setIndex(next);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const go = (delta: number) => setIndex((value) => (value + delta + items.length) % items.length);

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, itemIndex) => (
          <li key={item.title}>
            <figure className="group h-full">
              <button
                type="button"
                onClick={() => open(itemIndex)}
                aria-label={`${item.title} — kattalashtirib ko‘rish`}
                className="focus-ring relative block w-full overflow-hidden rounded-card border border-line bg-linear-to-br from-[#f2f5ff] to-[#e8edff] p-5 text-left transition-shadow duration-500 hover:shadow-card sm:p-6"
              >
                <div className={cn("mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]", item.narrow ? "w-[38%]" : "w-full")}>
                  {item.media}
                </div>
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white/90 text-brand-600 opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <Maximize2 className="size-4" />
                </span>
              </button>
              <figcaption className="mt-5 px-1">
                <h3 className="text-title font-bold">{item.title}</h3>
                <p className="mt-1.5 text-[0.95rem] text-muted">{item.caption}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Interfeys lavhalari"
        className="nr-dialog m-auto h-auto max-h-[calc(100dvh-2rem)] w-[min(72rem,calc(100vw-2rem))] overflow-y-auto"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(1);
          if (event.key === "ArrowLeft") go(-1);
        }}
      >
        <div className="rounded-panel bg-white p-4 shadow-float sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-4 px-1">
            <div className="min-w-0">
              <p className="truncate font-display text-lg font-bold text-ink">{current.title}</p>
              <p className="truncate text-sm text-muted">{current.caption}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="mr-2 hidden text-sm text-muted sm:inline" aria-live="polite">
                {index + 1} / {items.length}
              </span>
              <button type="button" onClick={() => go(-1)} aria-label="Oldingi lavha" className="focus-ring grid size-11 place-items-center rounded-full border border-line text-ink hover:bg-canvas">
                <ChevronLeft className="size-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Keyingi lavha" className="focus-ring grid size-11 place-items-center rounded-full border border-line text-ink hover:bg-canvas">
                <ChevronRight className="size-5" />
              </button>
              <button type="button" onClick={close} aria-label="Yopish" className="focus-ring grid size-11 place-items-center rounded-full bg-ink text-white">
                <X className="size-5" />
              </button>
            </div>
          </div>
          <div className="rounded-[1.25rem] bg-linear-to-br from-[#f2f5ff] to-[#e8edff] p-4 sm:p-8">
            <div key={index} className={cn("mx-auto animate-rise", current.narrow ? "w-[min(18rem,70%)]" : "w-full")}>
              {current.media}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
