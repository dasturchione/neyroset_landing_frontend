import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/common";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="surface-card group relative flex h-full items-center gap-5 p-4 transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-card sm:gap-6 sm:p-[1.1rem] sm:pr-6">
      <span
        aria-hidden="true"
        className="grid size-16 shrink-0 place-items-center rounded-2xl bg-linear-to-b from-[#eef2ff] to-[#e7ecfd] text-brand-600 sm:size-[4.6rem]"
      >
        <Icon className="size-8 sm:size-9" strokeWidth={1.6} />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-[1.15rem] leading-snug font-bold tracking-[-0.01em] sm:text-[1.2rem]">
          <Link
            href={`/services#${service.slug}`}
            className="focus-ring rounded after:absolute after:inset-0 after:rounded-card after:content-['']"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-1 text-[0.92rem] leading-snug text-muted">{service.summary}</p>
      </div>
      <span
        aria-hidden="true"
        className="hidden size-10 shrink-0 place-items-center rounded-full bg-[#eef2ff] text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white sm:grid"
      >
        <ArrowRight className="size-[1.1rem]" />
      </span>
    </article>
  );
}
