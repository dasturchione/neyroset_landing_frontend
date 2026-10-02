import { BriefcaseBusiness, ChevronDown, CreditCard, Menu, MessageSquareText, MessageSquareDot, ScanLine, Sparkles } from "lucide-react";
import type {
  AdminScreenSpec,
  AnalyticsScreenSpec,
  LearningScreenSpec,
  MobileScreenSpec,
  OcrScreenSpec,
  PosScreenSpec,
  TableScreenSpec,
} from "@/types/mockup";
import { cn } from "@/lib/utils";
import {
  MiniMark,
  MockBars,
  MockCalendar,
  MockCard,
  MockDonut,
  MockKpiCard,
  MockLineChart,
  MockSidebar,
  MockStatus,
  MockTopBar,
  mobileNavIcons,
  toneClasses,
} from "./parts";

const mobileIcons = { projects: BriefcaseBusiness, chat: MessageSquareText, status: MessageSquareDot };

const desktopRoot = "flex size-full overflow-hidden bg-white text-left font-sans text-ink select-none";
const mainArea = "flex min-w-0 flex-1 flex-col gap-[1.4cqw] bg-[#f6f8fd] p-[1.8cqw]";

export function AdminScreen({ spec }: { spec: AdminScreenSpec }) {
  return (
    <div className={desktopRoot}>
      <MockSidebar app={spec.app} />
      <div className={mainArea}>
        <MockTopBar />
        <div className="flex items-center justify-between">
          <p className="text-[1.65cqw] font-bold tracking-tight">{spec.title}</p>
          {spec.period && (
            <span className="flex items-center gap-[0.5cqw] rounded-[0.7cqw] bg-white px-[1cqw] py-[0.55cqw] text-[0.95cqw] text-body shadow-[0_0.2cqw_0.8cqw_-0.3cqw_rgb(40_60_140/0.2)]">
              {spec.period}
              <ChevronDown className="size-[1cqw]" />
            </span>
          )}
        </div>
        <div className="grid grid-cols-4 gap-[1cqw]">
          {spec.kpis.map((kpi, index) => (
            <MockKpiCard key={kpi.label} kpi={kpi} highlight={spec.highlightFirst && index === 0} />
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1.4fr_1fr] gap-[1cqw]">
          <MockCard title={spec.chartTitle}>
            <div className="min-h-0 flex-1 pt-[0.8cqw]">
              <MockLineChart values={spec.chart} axis={spec.axis} tooltip={spec.tooltip} />
            </div>
          </MockCard>
          <MockCard title={spec.sideTitle}>
            <MockDonut value={spec.donut.value} legend={spec.donut.legend} />
          </MockCard>
        </div>
      </div>
    </div>
  );
}

export function TableScreen({ spec }: { spec: TableScreenSpec }) {
  return (
    <div className={desktopRoot}>
      <MockSidebar app={spec.app} />
      <div className={mainArea}>
        <MockTopBar />
        <div className="flex items-center justify-between">
          <p className="text-[1.65cqw] font-bold tracking-tight">{spec.title}</p>
          <span className="rounded-[0.7cqw] bg-brand-600 px-[1.2cqw] py-[0.6cqw] text-[0.95cqw] font-semibold text-white">+ Yangi</span>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1fr_17cqw] gap-[1cqw]">
          <MockCard className="p-0">
            <div className="grid grid-cols-[1.4fr_1.2fr_0.8fr_1fr] gap-[1cqw] border-b border-line px-[1.3cqw] py-[1cqw] text-[0.9cqw] font-semibold text-muted">
              {spec.columns.map((column) => (
                <span key={column}>{column}</span>
              ))}
            </div>
            {spec.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  "grid grid-cols-[1.4fr_1.2fr_0.8fr_1fr] items-center gap-[1cqw] px-[1.3cqw] py-[0.95cqw] text-[0.98cqw]",
                  rowIndex !== spec.rows.length - 1 && "border-b border-line/70",
                )}
              >
                {row.map((cell, cellIndex) =>
                  cellIndex === spec.statusColumn ? (
                    <span key={cellIndex}>
                      <MockStatus value={cell} className="text-[0.85cqw]" />
                    </span>
                  ) : (
                    <span key={cellIndex} className={cn("truncate", cellIndex === 0 ? "font-semibold text-ink" : "text-body")}>
                      {cell}
                    </span>
                  ),
                )}
              </div>
            ))}
          </MockCard>
          <MockCard>
            {spec.aside.type === "calendar" ? (
              <MockCalendar title={spec.aside.title} />
            ) : (
              <>
                <p className="mb-[1.2cqw] text-[1.1cqw] font-semibold">{spec.aside.title}</p>
                <ul className="space-y-[1cqw]">
                  {spec.aside.items.map((item) => (
                    <li key={item.label} className="rounded-[0.8cqw] bg-[#f6f8fd] p-[1cqw]">
                      <p className="text-[0.85cqw] text-muted">{item.label}</p>
                      <p className="mt-[0.3cqw] text-[1.2cqw] font-bold">{item.value}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </MockCard>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsScreen({ spec }: { spec: AnalyticsScreenSpec }) {
  return (
    <div className={desktopRoot}>
      <MockSidebar app={spec.app} />
      <div className={mainArea}>
        <MockTopBar />
        <p className="text-[1.65cqw] font-bold tracking-tight">{spec.title}</p>
        <div className="grid grid-cols-3 gap-[1cqw]">
          {spec.kpis.map((kpi) => (
            <MockKpiCard key={kpi.label} kpi={kpi} />
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1.6fr_1fr] gap-[1cqw]">
          <MockCard title="Dinamika">
            <MockBars values={spec.bars} labels={spec.barLabels} />
          </MockCard>
          <MockCard title="Taqsimot">
            <ul className="space-y-[1.1cqw]">
              {spec.list.map((item) => (
                <li key={item.label}>
                  <div className="flex justify-between text-[0.95cqw]">
                    <span className="text-body">{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                  <div className="mt-[0.45cqw] h-[0.55cqw] rounded-full bg-brand-50">
                    <div className="h-full rounded-full bg-linear-to-r from-brand-600 to-sky-400" style={{ width: item.value }} />
                  </div>
                </li>
              ))}
            </ul>
          </MockCard>
        </div>
      </div>
    </div>
  );
}

export function MobileScreen({ spec }: { spec: MobileScreenSpec }) {
  return (
    <div className="flex size-full flex-col overflow-hidden bg-[#f7f9ff] text-left font-sans text-ink select-none">
      <div className="flex items-center justify-between px-[7cqw] pt-[5cqw] text-[4.2cqw] font-semibold">
        <span>9:41</span>
        <span className="flex gap-[1.2cqw]">
          <span className="h-[2.6cqw] w-[5cqw] rounded-[0.8cqw] bg-ink" />
        </span>
      </div>
      <div className="flex items-center justify-between px-[7cqw] pt-[7cqw]">
        <span className="flex items-center gap-[2cqw]">
          <MiniMark className="size-[7cqw]" />
          <span className="text-[5.6cqw] font-bold">{spec.appName}</span>
        </span>
        <span className="grid size-[9cqw] place-items-center rounded-[3cqw] bg-brand-50 text-brand-600">
          <Menu className="size-[5cqw]" />
        </span>
      </div>
      <p className="px-[7cqw] pt-[7cqw] text-[6.4cqw] font-bold tracking-tight">{spec.title}</p>
      <div className="flex flex-1 flex-col gap-[3.5cqw] px-[5cqw] pt-[5cqw]">
        {spec.items.map((item) => {
          const tone = toneClasses[item.tone ?? "brand"];
          return spec.variant === "stats" ? (
            <div key={item.label} className="flex items-center gap-[4cqw] rounded-[5cqw] border border-line bg-white p-[4.5cqw]">
              <span className={cn("grid size-[11cqw] place-items-center rounded-[3.5cqw]", tone.soft, tone.text)}>
                {(() => {
                  const Icon = item.icon ? mobileIcons[item.icon] : Sparkles;
                  return <Icon className="size-[5.5cqw]" />;
                })()}
              </span>
              <span className="flex flex-col">
                <span className="text-[7.5cqw] leading-none font-bold">{item.value}</span>
                <span className="mt-[1.5cqw] text-[3.8cqw] text-muted">{item.label}</span>
              </span>
            </div>
          ) : (
            <div key={item.label} className="flex items-center gap-[3.5cqw] rounded-[4.5cqw] border border-line bg-white p-[3.8cqw]">
              <span className={cn("size-[9cqw] shrink-0 rounded-full", tone.soft, "grid place-items-center")}>
                <span className={cn("size-[3cqw] rounded-full", tone.solid)} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-[4.4cqw] font-semibold">{item.label}</span>
                {item.meta && <span className="truncate text-[3.5cqw] text-muted">{item.meta}</span>}
              </span>
              <span className="text-[4cqw] font-semibold text-body">{item.value}</span>
            </div>
          );
        })}
      </div>
      <div className="mx-[5cqw] mt-[4cqw] mb-[6cqw] flex justify-around rounded-[5cqw] border border-line bg-white py-[3.5cqw]">
        {mobileNavIcons.map((Icon, i) => (
          <Icon key={i} className={cn("size-[5.5cqw]", i === 0 ? "text-brand-600" : "text-muted")} />
        ))}
      </div>
    </div>
  );
}

export function OcrScreen({ spec }: { spec: OcrScreenSpec }) {
  return (
    <div className="relative size-full overflow-hidden bg-[linear-gradient(135deg,#5b6b7d,#2f3a48_45%,#56606c)] text-left font-sans select-none">
      {/* pipes */}
      <div className="absolute top-0 left-[14%] h-full w-[5cqw] bg-[linear-gradient(90deg,#3b2f2a,#7a5a48_40%,#3b2f2a)] opacity-80" />
      <div className="absolute top-[12%] left-0 h-[4cqw] w-[48%] bg-[linear-gradient(180deg,#3b2f2a,#86624c_45%,#3b2f2a)] opacity-75" />
      {/* meter body */}
      <div className="absolute top-[18%] left-[16%] h-[62%] w-[34%] rounded-[3cqw] bg-[linear-gradient(160deg,#e9edf2,#b6bec8_55%,#8d96a2)] shadow-[0_2cqw_4cqw_rgb(0_0_0/0.45)]">
        <div className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle_at_40%_35%,#fbfcfd,#d4dae2_60%,#aab3bf)] ring-[0.4cqw] ring-[#8a939f]">
          <p className="absolute top-[24%] w-full text-center text-[1.5cqw] font-bold text-[#2a3340]">Hisoblagich</p>
          <div className="absolute top-[42%] left-1/2 flex -translate-x-1/2 gap-[0.25cqw] rounded-[0.5cqw] bg-[#1c232c] px-[0.6cqw] py-[0.45cqw]">
            {spec.reading.split("").map((char, i) => (
              <span
                key={i}
                className={cn(
                  "grid h-[2.6cqw] w-[1.6cqw] place-items-center rounded-[0.2cqw] font-mono text-[1.7cqw] font-bold",
                  char === "." ? "w-[0.6cqw] bg-transparent text-white" : i >= spec.reading.length - 1 ? "bg-rose-600 text-white" : "bg-[#f4f4f4] text-[#1c232c]",
                )}
              >
                {char}
              </span>
            ))}
          </div>
          <p className="absolute bottom-[22%] w-full text-center text-[0.9cqw] tracking-[0.2em] text-[#4a5563]">kWh · 220V</p>
        </div>
      </div>
      {/* scan frame */}
      <div className="absolute top-[30%] left-[19%] h-[34%] w-[28%]">
        {["top-0 left-0 border-t-[0.45cqw] border-l-[0.45cqw] rounded-tl-[1.2cqw]", "top-0 right-0 border-t-[0.45cqw] border-r-[0.45cqw] rounded-tr-[1.2cqw]", "bottom-0 left-0 border-b-[0.45cqw] border-l-[0.45cqw] rounded-bl-[1.2cqw]", "right-0 bottom-0 border-r-[0.45cqw] border-b-[0.45cqw] rounded-br-[1.2cqw]"].map((corner) => (
          <span key={corner} className={cn("absolute size-[3.2cqw] border-sky-300", corner)} />
        ))}
        <span className="absolute inset-x-[4%] top-1/2 h-[0.25cqw] rounded-full bg-sky-300 shadow-[0_0_2cqw_0.4cqw_rgb(125_211_252/0.8)]" />
        <span className="absolute inset-0 rounded-[1.2cqw] bg-sky-300/10" />
      </div>
      <span className="absolute top-[8%] left-[56%] grid size-[6cqw] place-items-center rounded-[1.4cqw] border border-white/40 bg-brand-600/80 text-white shadow-[0_1cqw_3cqw_rgb(31_68_240/0.6)] backdrop-blur">
        <ScanLine className="size-[3.2cqw]" />
      </span>
      {/* data card */}
      <div className="absolute top-[22%] right-[5%] w-[38%] rounded-[1.6cqw] bg-white/95 p-[2cqw] shadow-[0_2cqw_5cqw_rgb(0_0_0/0.35)]">
        <p className="text-[1.45cqw] font-bold text-ink">Hisoblagich ma’lumotlari</p>
        <dl className="mt-[1.5cqw] space-y-[1.15cqw]">
          {spec.fields.map((field) => (
            <div key={field.label} className="flex items-center justify-between text-[1.2cqw]">
              <dt className="text-muted">{field.label}</dt>
              <dd className={cn("font-bold", field.highlight ? "text-brand-600" : field.label === "Holat" ? "text-emerald-600" : "text-ink")}>{field.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-[1.6cqw] h-[0.7cqw] rounded-full bg-emerald-50">
          <div className="h-full w-[92%] rounded-full bg-linear-to-r from-emerald-400 to-emerald-600" />
        </div>
      </div>
    </div>
  );
}

export function LearningScreen({ spec }: { spec: LearningScreenSpec }) {
  return (
    <div className="flex size-full flex-col gap-[1.8cqw] overflow-hidden bg-white p-[2.2cqw] text-left font-sans text-ink select-none">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[0.8cqw]">
          <MiniMark className="size-[2.4cqw]" />
          <span className="text-[1.5cqw] font-bold">{spec.appName}</span>
        </span>
        <span className="flex gap-[2.2cqw] text-[1.05cqw] text-muted">
          <span className="font-semibold text-brand-600">Kurslar</span>
          <span>O‘qituvchilar</span>
          <span>Sertifikatlar</span>
        </span>
        <span className="size-[2.6cqw] rounded-full bg-linear-to-br from-brand-400 to-violet-500" />
      </div>
      <div className="relative overflow-hidden rounded-[1.8cqw] bg-linear-to-br from-brand-50 via-[#eef0ff] to-violet-50 p-[2.6cqw]">
        <p className="max-w-[55%] text-[2.6cqw] leading-[1.1] font-extrabold tracking-tight">{spec.headline}</p>
        <p className="mt-[1cqw] max-w-[50%] text-[1.1cqw] text-body">Zamonaviy kasblarni amaliy loyihalar orqali o‘rganing.</p>
        <span className="mt-[1.6cqw] inline-flex rounded-[0.8cqw] bg-brand-600 px-[1.6cqw] py-[0.8cqw] text-[1.05cqw] font-semibold text-white">Kurslarni ko‘rish</span>
        <div className="absolute top-1/2 right-[6%] size-[14cqw] -translate-y-1/2 rotate-12 rounded-[3cqw] bg-linear-to-br from-brand-400 to-violet-500 opacity-90 shadow-[0_2cqw_4cqw_rgb(31_68_240/0.35)]" />
        <div className="absolute top-[18%] right-[22%] size-[5cqw] rounded-full bg-white/70" />
      </div>
      <div>
        <p className="mb-[1.1cqw] text-[1.35cqw] font-bold">Ommabop kurslar</p>
        <div className="grid grid-cols-3 gap-[1.4cqw]">
          {spec.courses.map((course) => (
            <div key={course.title} className="overflow-hidden rounded-[1.2cqw] border border-line">
              <div className={cn("relative h-[9cqw] bg-linear-to-br", toneClasses[course.tone].gradient)}>
                <span className="absolute bottom-[1cqw] left-[1cqw] rounded-full bg-white/90 px-[0.8cqw] py-[0.3cqw] text-[0.8cqw] font-semibold">12 dars</span>
              </div>
              <div className="p-[1.1cqw]">
                <p className="text-[1.1cqw] font-semibold">{course.title}</p>
                <div className="mt-[0.8cqw] h-[0.5cqw] rounded-full bg-brand-50">
                  <div className="h-full w-[60%] rounded-full bg-brand-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PosScreen({ spec }: { spec: PosScreenSpec }) {
  return (
    <div className="flex size-full overflow-hidden bg-[#f6f8fd] text-left font-sans text-ink select-none">
      <div className="flex min-w-0 flex-1 flex-col gap-[1.4cqw] p-[1.8cqw]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[0.8cqw]">
            <MiniMark className="size-[2.2cqw]" />
            <span className="text-[1.45cqw] font-bold">{spec.appName}</span>
          </span>
          <span className="rounded-[0.8cqw] border border-line bg-white px-[1.2cqw] py-[0.6cqw] text-[1cqw] text-muted">Shtrix-kod yoki nom...</span>
        </div>
        <div className="flex gap-[0.8cqw]">
          {spec.categories.map((category, i) => (
            <span
              key={category}
              className={cn(
                "rounded-full px-[1.2cqw] py-[0.55cqw] text-[0.95cqw] font-semibold",
                i === 0 ? "bg-brand-600 text-white" : "border border-line bg-white text-body",
              )}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-[1.2cqw]">
          {spec.products.map((product) => (
            <div key={product.name} className="flex flex-col rounded-[1.2cqw] border border-line bg-white p-[1cqw]">
              <div className={cn("flex-1 rounded-[0.8cqw] bg-linear-to-br opacity-85", toneClasses[product.tone].gradient)} />
              <p className="mt-[0.8cqw] text-[1.05cqw] font-semibold">{product.name}</p>
              <p className="text-[0.95cqw] text-brand-600">{product.price} so‘m</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[30cqw] flex-col border-l border-line bg-white p-[1.8cqw]">
        <p className="text-[1.4cqw] font-bold">Joriy chek</p>
        <ul className="mt-[1.4cqw] flex-1 space-y-[1.1cqw]">
          {spec.receipt.map((line) => (
            <li key={line.name} className="flex items-center justify-between border-b border-dashed border-line pb-[1cqw] text-[1.05cqw]">
              <span>
                <span className="font-semibold">{line.name}</span> <span className="text-muted">{line.qty}</span>
              </span>
              <span className="font-semibold">{line.sum}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-[1.3cqw]">
          <span className="text-muted">Jami</span>
          <span className="text-[1.9cqw] font-extrabold">{spec.total}</span>
        </div>
        <span className="mt-[1.4cqw] flex items-center justify-center gap-[0.8cqw] rounded-[1cqw] bg-brand-600 py-[1.2cqw] text-[1.2cqw] font-semibold text-white">
          <CreditCard className="size-[1.5cqw]" /> To‘lash
        </span>
      </div>
    </div>
  );
}
