/**
 * Building blocks for the code-drawn interface mockups.
 * All sizes use container query units (cqw) so a screen scales as one picture.
 */
import Image from "next/image";
import { useId } from "react";
import {
  Bell,
  ChartColumn,
  ContactRound,
  FileText,
  FolderKanban,
  House,
  LayoutGrid,
  Search,
  Settings,
  User,
  UsersRound,
} from "lucide-react";
import type { MockApp, MockKpi, Tone } from "@/types/mockup";
import { cn } from "@/lib/utils";

export const toneClasses: Record<Tone, { soft: string; text: string; solid: string; gradient: string }> = {
  brand: { soft: "bg-brand-50", text: "text-brand-600", solid: "bg-brand-600", gradient: "from-brand-500 to-brand-700" },
  violet: { soft: "bg-violet-50", text: "text-violet-600", solid: "bg-violet-500", gradient: "from-violet-400 to-indigo-600" },
  mint: { soft: "bg-emerald-50", text: "text-emerald-600", solid: "bg-emerald-500", gradient: "from-emerald-400 to-teal-600" },
  amber: { soft: "bg-amber-50", text: "text-amber-600", solid: "bg-amber-500", gradient: "from-amber-300 to-orange-500" },
  rose: { soft: "bg-rose-50", text: "text-rose-600", solid: "bg-rose-500", gradient: "from-rose-400 to-fuchsia-500" },
  sky: { soft: "bg-sky-50", text: "text-sky-600", solid: "bg-sky-500", gradient: "from-sky-400 to-blue-600" },
};

const cardShadow = "shadow-[0_0.3cqw_1.2cqw_-0.4cqw_rgb(40_60_140/0.15)]";
const menuIcons = [House, ChartColumn, UsersRound, FolderKanban, ContactRound, FileText, Settings];

/** Real brand mark, small enough for mockup chrome. */
export function MiniMark({ className }: { className?: string }) {
  return <Image src="/brand/neyroset-mark.png" alt="" width={64} height={64} sizes="48px" className={cn("object-contain", className)} />;
}

export function MockSidebar({ app }: { app: MockApp }) {
  return (
    <div className="flex w-[18cqw] shrink-0 flex-col gap-[0.55cqw] bg-[#0d1433] px-[1.3cqw] py-[2cqw]">
      <div className="mb-[2cqw] flex items-center gap-[0.7cqw] px-[0.5cqw]">
        <MiniMark className="size-[2.4cqw]" />
        <span className="truncate text-[1.45cqw] font-bold text-white">{app.name}</span>
      </div>
      {app.menu.map((item, index) => {
        const Icon = menuIcons[index % menuIcons.length];
        const active = index === (app.active ?? 0);
        return (
          <div
            key={item}
            className={cn(
              "flex items-center gap-[0.9cqw] rounded-[0.8cqw] px-[1cqw] py-[0.85cqw] text-[1.05cqw]",
              active ? "bg-linear-to-r from-[#2f5bff] to-[#2149f3] text-white shadow-[0_0.5cqw_1.4cqw_-0.4cqw_rgb(33_73_243/0.8)]" : "text-white/70",
            )}
          >
            <Icon className="size-[1.3cqw] shrink-0" strokeWidth={2} />
            <span className="truncate">{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export function MockTopBar() {
  return (
    <div className="flex items-center justify-between gap-[1.5cqw]">
      <div className="flex h-[3.2cqw] w-[44%] items-center gap-[0.8cqw] rounded-[0.9cqw] bg-[#f3f5fb] px-[1.2cqw] text-[1.05cqw] text-muted">
        <Search className="size-[1.25cqw]" />
        Qidiruv...
      </div>
      <div className="flex items-center gap-[2cqw]">
        <div className="flex items-center gap-[0.8cqw]">
          <span className="grid size-[3cqw] place-items-center rounded-full bg-linear-to-b from-[#2f5bff] to-[#2149f3] text-[1.2cqw] font-bold text-white">
            N
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[1.05cqw] font-semibold text-ink">Neyroset Team</span>
            <span className="text-[0.85cqw] text-muted">Admin</span>
          </span>
        </div>
        <Bell className="size-[1.5cqw] text-body" />
      </div>
    </div>
  );
}

export function MockKpiCard({ kpi, highlight = false }: { kpi: MockKpi; highlight?: boolean }) {
  return (
    <div className={cn("rounded-[1cqw] bg-white p-[1.3cqw]", cardShadow)}>
      <p className="truncate text-[0.95cqw] text-muted">{kpi.label}</p>
      <p className={cn("mt-[0.7cqw] truncate text-[1.9cqw] font-bold tracking-tight", highlight ? "text-emerald-500" : "text-ink")}>
        {kpi.value}
        {kpi.unit && <span className="ml-[0.3cqw] text-[0.85cqw] font-semibold text-ink">{kpi.unit}</span>}
      </p>
      {kpi.delta && <p className="mt-[0.4cqw] text-[0.95cqw] font-semibold text-emerald-500">↑ {kpi.delta}</p>}
    </div>
  );
}

export function MockCard({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex min-h-0 flex-col rounded-[1cqw] bg-white p-[1.4cqw]", cardShadow, className)}>
      {title && <p className="mb-[1cqw] text-[1.15cqw] font-semibold text-ink">{title}</p>}
      {children}
    </div>
  );
}

type LineChartProps = {
  values: number[];
  axis?: { y: string[]; x: string[] };
  tooltip?: { value: string; delta: string };
  className?: string;
};

/** Area line chart from 0–100 values, with optional axes, point dots and a tooltip. */
export function MockLineChart({ values, axis, tooltip, className }: LineChartProps) {
  const gradientId = useId();
  const step = 100 / (values.length - 1);
  const coords = values.map((v, i) => ({ x: i * step, y: 40 - (v / 100) * 36 }));
  const line = `M${coords.map((c) => `${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" L")}`;
  const area = `${line} L100,40 L0,40 Z`;
  const tip = coords[values.length - 3];

  const plot = (
    <div className="relative min-h-0 flex-1">
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3d5cf6" stopOpacity="0.22" />
            <stop offset="1" stopColor="#3d5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[4, 16, 28, 40].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#eef1f8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        ))}
        <path d={area} fill={`url(#${gradientId})`} />
        <path d={line} fill="none" stroke="#2149f3" strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      </svg>
      {axis &&
        coords.map((c, i) => (
          <span
            key={i}
            className="absolute size-[0.65cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.18cqw] border-[#2149f3] bg-white"
            style={{ left: `${c.x}%`, top: `${(c.y / 40) * 100}%` }}
          />
        ))}
      {!axis && (
        <span
          className="absolute size-[1cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600 ring-[0.35cqw] ring-white"
          style={{ left: "100%", top: `${(coords[coords.length - 1].y / 40) * 100}%` }}
        />
      )}
      {tooltip && (
        <span
          className="absolute -translate-x-1/2 -translate-y-[135%] rounded-[0.6cqw] bg-[#121a3d] px-[0.9cqw] py-[0.6cqw] text-left leading-tight whitespace-nowrap text-white shadow-lg"
          style={{ left: `${tip.x}%`, top: `${(tip.y / 40) * 100}%` }}
        >
          <span className="block text-[1.05cqw] font-bold">{tooltip.value}</span>
          <span className="block text-[0.8cqw] text-emerald-400">{tooltip.delta}</span>
        </span>
      )}
    </div>
  );

  if (!axis) return <div className={cn("flex h-full w-full", className)}>{plot}</div>;

  return (
    <div className={cn("grid h-full w-full grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-x-[0.8cqw] gap-y-[0.5cqw]", className)}>
      <div className="flex flex-col justify-between text-[0.75cqw] text-muted">
        {axis.y.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div className="flex">{plot}</div>
      <span />
      <div className="flex justify-between text-[0.8cqw] text-muted">
        {axis.x.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export function MockDonut({ value, legend }: { value: number; legend: string[] }) {
  const gradientId = useId();
  const circumference = 2 * Math.PI * 15.9155;
  const colors = ["bg-teal-400", "bg-sky-400", "bg-brand-600"];
  return (
    <div className="flex flex-1 items-center gap-[1.4cqw]">
      <div className="relative size-[10cqw] shrink-0">
        <svg viewBox="0 0 36 36" className="size-full -rotate-90">
          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e6ebfa" strokeWidth="4.6" />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="4.6"
            strokeDasharray={`${(value / 100) * circumference} ${circumference}`}
          />
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2dd4bf" />
              <stop offset="0.5" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#2149f3" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-[1.8cqw] font-bold text-ink">{value}%</span>
      </div>
      <ul className="space-y-[0.8cqw]">
        {legend.map((item, i) => (
          <li key={item} className="flex items-center gap-[0.6cqw] text-[0.95cqw] text-body">
            <span className={cn("size-[0.8cqw] shrink-0 rounded-full", colors[i % colors.length])} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MockBars({ values, labels }: { values: number[]; labels: string[] }) {
  const max = Math.max(...values);
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1 items-end gap-[0.9cqw] border-b border-line pb-[0.4cqw]">
        {values.map((v, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 rounded-t-[0.5cqw] bg-linear-to-t",
              i === values.indexOf(max) ? "from-brand-600 to-brand-400" : "from-brand-200 to-brand-100",
            )}
            style={{ height: `${(v / max) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-[0.6cqw] flex gap-[0.9cqw]">
        {labels.map((label) => (
          <span key={label} className="flex-1 text-center text-[0.8cqw] text-muted">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const statusTone: [RegExp, string][] = [
  [/keldi|yetkazildi|tasdiqlandi|to‘langan|tugatdi|yetarli|faol|sinxron|tayyor|yoqilgan/i, "bg-emerald-50 text-emerald-700"],
  [/kutmoqda|navbatda|tekshiruvda|kutilmoqda|kam qoldi/i, "bg-amber-50 text-amber-700"],
  [/bekor|xato|muddati|tugagan|to‘xtatilgan|qayta|offline/i, "bg-rose-50 text-rose-700"],
];

export function MockStatus({ value, className }: { value: string; className?: string }) {
  const tone = statusTone.find(([pattern]) => pattern.test(value))?.[1] ?? "bg-brand-50 text-brand-700";
  return <span className={cn("inline-flex rounded-full px-[0.8cqw] py-[0.3cqw] font-semibold", tone, className)}>{value}</span>;
}

export function MockCalendar({ title }: { title: string }) {
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  return (
    <div>
      <p className="mb-[1cqw] text-[1.1cqw] font-semibold text-ink">{title}</p>
      <div className="grid grid-cols-7 gap-[0.45cqw] text-center text-[0.85cqw]">
        {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((d) => (
          <span key={d} className="text-muted">
            {d}
          </span>
        ))}
        {days.map((day) => (
          <span
            key={day}
            className={cn(
              "grid aspect-square place-items-center rounded-[0.5cqw]",
              day < 1 || day > 31 ? "text-transparent" : "text-body",
              day === 14 && "bg-brand-600 font-bold text-white",
              [3, 9, 17, 22, 27].includes(day) && "bg-brand-50 text-brand-700",
            )}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

export const mobileNavIcons = [House, LayoutGrid, FileText, User];
