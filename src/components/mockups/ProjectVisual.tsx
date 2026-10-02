import Image from "next/image";
import { Mail } from "lucide-react";
import type { Tone } from "@/types/mockup";
import type { ProjectVisual as ProjectVisualSpec } from "@/types/project";
import { cn } from "@/lib/utils";
import { DeviceMockup } from "./DeviceMockup";
import { Screen } from "./Screen";

const accentBackgrounds: Record<Tone, string> = {
  brand: "from-[#eef2ff] via-[#e6ebff] to-[#dfe6ff]",
  violet: "from-[#f3f0ff] via-[#ebe8ff] to-[#e2e4ff]",
  mint: "from-[#e9f7f3] via-[#e6eefb] to-[#e2e8fb]",
  amber: "from-[#fff6ea] via-[#f3eefb] to-[#e6eaff]",
  rose: "from-[#fff0f4] via-[#f1edff] to-[#e5eaff]",
  sky: "from-[#eaf6ff] via-[#e8eeff] to-[#e2e7ff]",
};

type Props = {
  visual: ProjectVisualSpec;
  title: string;
  accent: Tone;
  className?: string;
};

/** Cover artwork for project cards — a tilted device on the brand glass background. */
export function ProjectCover({ visual, title, accent, className }: Props) {
  return (
    <div
      role="img"
      aria-label={`${title} loyihasi interfeysi`}
      className={cn("relative isolate overflow-hidden bg-linear-to-br", accentBackgrounds[accent], className)}
    >
      <Image
        src="/backgrounds/glass.webp"
        alt=""
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="-z-10 object-cover object-[30%_60%] opacity-80"
      />
      {visual.device === "screen" ? (
        <div className="@container absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          {visual.image ? (
            <Image src={visual.image.src} alt={visual.image.alt} fill sizes="(min-width: 1280px) 25vw, 50vw" className="object-cover" />
          ) : (
            <Screen id={visual.screen} />
          )}
        </div>
      ) : visual.device === "phone" ? (
        <>
          <div className="absolute top-[38%] left-[9%] grid w-[22%] aspect-square -rotate-12 place-items-center rounded-[24%] border border-white/80 bg-linear-to-br from-white/80 to-brand-100/60 text-brand-600 shadow-float backdrop-blur-md">
            <Mail className="size-1/2" strokeWidth={1.5} />
          </div>
          <div className="absolute top-[5%] left-[34%] w-[46%] rotate-[10deg] transition-transform duration-700 ease-out group-hover:translate-y-[-2%] group-hover:rotate-[8deg]">
            <DeviceMockup device="phone" screen={visual.screen} image={visual.image} sizes="240px" />
          </div>
        </>
      ) : (
        <div className="absolute top-[11%] left-[-2%] w-[118%] [transform:perspective(1300px)_rotateY(-18deg)_rotateX(10deg)_rotateZ(-5deg)] transition-transform duration-700 ease-out group-hover:[transform:perspective(1300px)_rotateY(-13deg)_rotateX(8deg)_rotateZ(-4deg)_translateY(-2%)]">
          <DeviceMockup device="laptop" screen={visual.screen} image={visual.image} sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
        </div>
      )}
    </div>
  );
}

/** Hero artwork for project detail pages — laptop with an optional phone. */
export function ProjectHeroVisual({ visual, title, accent, className }: Props) {
  return (
    <div role="img" aria-label={`${title} — boshqaruv paneli va mobil ilova ko‘rinishi`} className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className={cn("absolute inset-x-[4%] top-[6%] bottom-[2%] -z-10 rounded-[3rem] bg-linear-to-br opacity-90 blur-2xl", accentBackgrounds[accent])}
      />
      <div className={cn(visual.mobile ? "pr-[9%]" : "px-[2%]")}>
        <DeviceMockup device="laptop" screen={visual.screen} image={visual.image} sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      {visual.mobile && (
        <div className="absolute right-0 bottom-[-8%] w-[22%]">
          <DeviceMockup device="phone" screen={visual.mobile} sizes="200px" />
        </div>
      )}
    </div>
  );
}
