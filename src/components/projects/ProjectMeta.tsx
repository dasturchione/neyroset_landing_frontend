import { Building2, CalendarClock, Code, Layers, MonitorSmartphone, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/types/project";

type MetaItem = { label: string; value: string; icon: LucideIcon };

/** Project facts row. Unknown facts (client, duration, year) are omitted, never invented. */
export function ProjectMeta({ project }: { project: Project }) {
  const tech = project.technologies;
  const items: MetaItem[] = [
    ...(project.client ? [{ label: "Mijoz", value: project.client, icon: UserRound }] : []),
    { label: "Soha", value: project.industry, icon: Building2 },
    { label: "Platforma", value: project.platforms.join(" · "), icon: MonitorSmartphone },
    { label: "Texnologiyalar", value: tech.length > 3 ? `${tech.slice(0, 3).join(", ")} +${tech.length - 3}` : tech.join(", "), icon: Code },
    ...(project.duration ? [{ label: "Muddat", value: project.duration, icon: CalendarClock }] : []),
    ...(!project.duration ? [{ label: "Yo‘nalish", value: project.categoryLabel, icon: Layers }] : []),
  ];

  return (
    <ul aria-label="Loyiha ma’lumotlari" className="grid gap-px overflow-hidden rounded-card border border-line bg-line shadow-soft sm:grid-cols-2 lg:grid-cols-4">
      {items.slice(0, 4).map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label} className="flex items-center gap-4 bg-white px-6 py-6 lg:px-7">
            <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <p className="flex min-w-0 flex-col">
              <span className="text-sm text-muted">{item.label}</span>
              <span className="truncate font-display text-[1.05rem] font-bold text-ink">{item.value}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
