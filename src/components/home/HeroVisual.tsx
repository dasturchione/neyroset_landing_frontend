import { Brain, ChevronRight } from "lucide-react";
import { DeviceMockup } from "@/components/mockups/DeviceMockup";
import { Parallax } from "@/components/motion/Parallax";
import { Orb } from "@/components/ui/Decor";

/** Laptop + phone composition with the "AI Yechimlar" card, as in the hero reference. */
export function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="Neyroset tomonidan ishlab chiqiladigan boshqaruv paneli va mobil ilova namunasi"
      className="relative mx-auto aspect-[1.38/1] w-full max-w-[62rem]"
    >
      {/* soft glass pedestal under the devices */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[2%] bottom-[2%] h-[16%] rounded-[50%] bg-[radial-gradient(closest-side,rgb(255_255_255/0.95),rgb(214_224_255/0.55)_60%,transparent)]"
      />
      <Orb className="top-[1%] left-[46%] w-[5.5%]" />

      <Parallax offset={30} className="absolute top-[17%] left-[-5%] w-[88%]">
        <div className="animate-rise [animation-delay:120ms]">
          <div className="[transform:perspective(2400px)_rotateY(-9deg)_rotateX(4deg)_rotateZ(-0.6deg)]">
            <DeviceMockup device="laptop" screen="neyroset-dashboard" />
          </div>
        </div>
      </Parallax>

      <Parallax offset={60} className="absolute top-[33%] right-[4%] w-[21%]">
        <div className="animate-rise [animation-delay:320ms]">
          <div className="animate-float-slow">
            <div className="[transform:perspective(1200px)_rotateY(-10deg)_rotateZ(1deg)]">
              <DeviceMockup device="phone" screen="neyroset-mobile" />
            </div>
          </div>
        </div>
      </Parallax>

      <div className="absolute top-0 right-[5%] z-10 hidden w-[33%] min-w-[18.5rem] animate-rise [animation-delay:480ms] sm:block">
        <div
          aria-hidden="true"
          className="flex animate-float items-center gap-4 rounded-2xl border border-white bg-white/85 p-4 pr-5 shadow-[0_24px_60px_-28px_rgb(40_60_140/0.35)] backdrop-blur-xl"
        >
          <span className="grid size-[3.75rem] shrink-0 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#e4e8ff_60%,#d3d9ff)] text-brand-600 shadow-[0_10px_24px_-10px_rgb(80_80_220/0.5)]">
            <Brain className="size-8" strokeWidth={1.6} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[1.05rem] font-bold text-ink">AI Yechimlar</span>
            <span className="mt-1 block text-[0.85rem] leading-snug text-body">Ma’lumotlarni tahlil qilish va avtomatlashtirish</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-brand-600" />
        </div>
      </div>
    </div>
  );
}
