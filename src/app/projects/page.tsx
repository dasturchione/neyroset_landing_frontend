import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";
import { projectCategoryLabels } from "@/data/projects";
import { getAllProjects, getUsedCategories } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Accent } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FilterButtons, FilterItem, ProjectFilter } from "@/components/projects/ProjectFilter";
import { CTASection } from "@/components/home/CTASection";

const title = "Loyihalar — ERP, AI, web va mobil yechimlar";
const description =
  "Neyroset portfoliosi: klinika ERP tizimi, SMS gateway, OCR asosidagi AI yechim, POS, ta’lim platformasi va buxgalteriya dasturi kabi loyihalar.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/projects",
  keywords: ["dasturiy loyihalar", "portfolio", "ERP tizimlari", "web dasturlar", "mobil ilovalar"],
});

const breadcrumbs = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Loyihalar", href: "/projects" },
];

export default function ProjectsPage() {
  const projects = getAllProjects();
  const options = getUsedCategories().map((category) => ({
    value: category,
    label: projectCategoryLabels[category],
    count: projects.filter((project) => project.categories.includes(category)).length,
  }));

  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(breadcrumbs), {
          "@type": "ItemList",
          name: "Neyroset loyihalari",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/projects/${project.slug}`),
            name: project.title,
          })),
        })}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Portfolio"
        title={
          <>
            Bizning <Accent>loyihalarimiz</Accent>
          </>
        }
        description="Har bir loyiha — bu ishonch, tajriba va natija. Biznes jarayonlarini avtomatlashtiruvchi tizimlardan tortib AI yechimlargacha."
      />

      <section aria-label="Loyihalar ro‘yxati" className="pb-24 lg:pb-32">
        <div className="container-wide">
          <ProjectFilter options={options} total={projects.length}>
            <FilterButtons />
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 xl:grid-cols-3">
              {projects.map((project) => (
                <FilterItem key={project.slug} categories={project.categories}>
                  <ProjectCard project={project} headingLevel="h2" />
                </FilterItem>
              ))}
            </ul>
          </ProjectFilter>
        </div>
      </section>

      <CTASection
        title={
          <>
            Sizning loyihangiz <Accent>keyingisi</Accent> bo‘lishi mumkin
          </>
        }
      />
    </>
  );
}
