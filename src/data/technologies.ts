import { Braces, Cable } from "lucide-react";
import {
  siAdonisjs,
  siDocker,
  siElectron,
  siExpress,
  siFastapi,
  siFlutter,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { Technology, TechnologyCategory } from "@/types/common";

type SimpleIcon = { path: string; hex: string };

const brand = (icon: SimpleIcon) => ({ type: "path" as const, path: icon.path, color: `#${icon.hex}` });

export const technologyCategories: Record<TechnologyCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobil va desktop",
  data: "Ma’lumotlar bazasi",
  infrastructure: "Infratuzilma",
};

export const technologies: Technology[] = [
  { name: "TypeScript", category: "frontend", logo: brand(siTypescript) },
  { name: "JavaScript", category: "frontend", logo: { ...brand(siJavascript), color: "#E3C412" } },
  { name: "React", category: "frontend", logo: { ...brand(siReact), color: "#149ECA" } },
  { name: "Next.js", category: "frontend", logo: brand(siNextdotjs) },
  { name: "Tailwind CSS", category: "frontend", logo: brand(siTailwindcss) },

  { name: "Node.js", category: "backend", logo: brand(siNodedotjs) },
  { name: "Express", category: "backend", logo: brand(siExpress) },
  { name: "AdonisJS", category: "backend", logo: brand(siAdonisjs) },
  { name: ".NET", category: "backend", logo: { type: "monogram", text: ".NET", color: "#512BD4", shape: "circle" } },
  { name: "C#", category: "backend", logo: { type: "monogram", text: "C#", color: "#7B3FE4", shape: "hex" } },
  { name: "Laravel", category: "backend", logo: brand(siLaravel) },
  { name: "PHP", category: "backend", logo: brand(siPhp) },
  { name: "Python", category: "backend", logo: brand(siPython) },
  { name: "FastAPI", category: "backend", logo: brand(siFastapi) },

  { name: "Flutter", category: "mobile", logo: brand(siFlutter) },
  { name: "Electron", category: "mobile", logo: brand(siElectron) },

  { name: "PostgreSQL", category: "data", logo: brand(siPostgresql) },
  { name: "MySQL", category: "data", logo: brand(siMysql) },
  { name: "Redis", category: "data", logo: brand(siRedis) },

  { name: "Docker", category: "infrastructure", logo: brand(siDocker) },
  { name: "Nginx", category: "infrastructure", logo: brand(siNginx) },
  { name: "WebSocket", category: "infrastructure", logo: { type: "icon", icon: Cable, color: "#111827" } },
  { name: "REST API", category: "infrastructure", logo: { type: "icon", icon: Braces, color: "#7A5CFA" } },
];

const byName = new Map(technologies.map((tech) => [tech.name, tech]));

export function getTechnology(name: string): Technology | undefined {
  return byName.get(name);
}

export function getTechnologies(names: string[]): Technology[] {
  return names.map((name) => byName.get(name)).filter((tech): tech is Technology => Boolean(tech));
}

/** The 7×3 technology grid shown on the homepage, in reference order. */
export const technologyGrid = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "AdonisJS", "Laravel",
  "PHP", "Python", "FastAPI", ".NET", "C#", "Flutter", "Electron",
  "PostgreSQL", "MySQL", "Redis", "Docker", "Nginx", "Tailwind CSS", "WebSocket",
];
