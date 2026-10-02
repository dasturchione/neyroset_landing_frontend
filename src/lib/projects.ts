import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/project";

const sorted = [...projects].sort((a, b) => b.order - a.order);

export function getAllProjects(): Project[] {
  return sorted;
}

export function getFeaturedProjects(limit = 4): Project[] {
  return sorted.filter((project) => project.featured).slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return sorted.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return sorted.map((project) => project.slug);
}

/** Related projects: shared categories first, then the rest by order. */
export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const score = (other: Project) => other.categories.filter((c) => project.categories.includes(c)).length;
  return sorted
    .filter((other) => other.slug !== project.slug)
    .map((other, index) => ({ other, rank: score(other) * 100 - index }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, limit)
    .map(({ other }) => other);
}

export function getUsedCategories(): ProjectCategory[] {
  const order: ProjectCategory[] = ["erp", "ai", "web", "mobile", "automation"];
  const used = new Set(sorted.flatMap((project) => project.categories));
  return order.filter((category) => used.has(category));
}

export function hasVerifiedOutcomes(project: Project): boolean {
  return project.outcomes.some((metric) => metric.verified);
}
