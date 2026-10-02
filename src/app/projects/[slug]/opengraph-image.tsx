import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Neyroset loyihasi";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return renderOgImage({
    eyebrow: project?.categoryLabel ?? "Loyiha",
    title: project?.title ?? "Neyroset loyihasi",
    description: project?.shortDescription ?? "",
  });
}
