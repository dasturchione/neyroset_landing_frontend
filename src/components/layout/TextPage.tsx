import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

type TextPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs: { name: string; href: string }[];
  sections: { heading: string; body: ReactNode }[];
  updated?: string;
};

/** Simple long-form page (privacy policy, terms). */
export function TextPage({ eyebrow, title, description, breadcrumbs, sections, updated }: TextPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} breadcrumbs={breadcrumbs} />
      <section aria-label={eyebrow} className="pb-20 lg:pb-28">
        <div className="container-wide">
          <div className="surface-card max-w-4xl space-y-9 p-7 sm:p-10 lg:p-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-title-lg font-bold">{section.heading}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-body">{section.body}</div>
              </div>
            ))}
            {updated && <p className="border-t border-line pt-6 text-sm text-muted">Oxirgi yangilanish: {updated}</p>}
          </div>
        </div>
      </section>
    </>
  );
}
