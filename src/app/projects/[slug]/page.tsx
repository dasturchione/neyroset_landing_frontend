import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs, getRelatedProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, projectSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectProcess } from "@/components/projects/ProjectProcess";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectTestimonial } from "@/components/projects/ProjectTestimonial";
import { ProjectTechnologies } from "@/components/projects/ProjectTechnologies";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { CTASection } from "@/components/home/CTASection";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    path: `/projects/${project.slug}`,
    type: "article",
    image: null,
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbs = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Loyihalar", href: "/projects" },
    { name: project.title, href: `/projects/${project.slug}` },
  ];

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(breadcrumbs), projectSchema(project))} />
      <ProjectHero project={project} breadcrumbs={breadcrumbs} />
      <ProjectOverview project={project} />
      <ProjectProcess project={project} />
      <ProjectGallery project={project} />
      <ProjectTestimonial testimonial={project.testimonial} />
      <ProjectTechnologies names={project.technologies} />
      <RelatedProjects projects={getRelatedProjects(project)} />
      <CTASection
        id="project-cta-title"
        eyebrow="Keyingi qadam"
        title={
          <>
            Shunday loyiha <span className="text-brand-600">kerakmi?</span>
          </>
        }
        description="Biznesingiz uchun shunga o‘xshash tizim kerak bo‘lsa, talablaringizni muhokama qilib, eng mos yechimni taklif qilamiz."
      />
    </>
  );
}
