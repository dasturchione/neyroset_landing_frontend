import { Send, Sparkle } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { Orb } from "@/components/ui/Decor";

const glass =
  "border border-white/90 bg-linear-to-br from-white/90 via-white/70 to-[#e6ebff]/70 shadow-[0_30px_60px_-30px_rgb(60_70_200/0.45),inset_0_1px_0_rgb(255_255_255/0.9)] backdrop-blur-xl";

/** Glass chat bubbles around the brand mark (decorative), as in the contact reference. */
export function CtaVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[1.6/1] w-full max-w-[50rem] [perspective:1600px]">
      {/* lavender blobs + ring */}
      <div className="absolute top-[30%] left-[2%] h-[62%] w-[60%] rounded-[50%] bg-linear-to-br from-[#d9defe] to-[#c4cbfb] opacity-80 blur-[2px]" />
      <div className="absolute top-[4%] right-[-2%] h-[78%] w-[58%] rounded-[45%] bg-linear-to-br from-[#e4e8ff] to-[#c9d0fb] opacity-80" />
      <div className="absolute top-[12%] left-[6%] h-[76%] w-[88%] rounded-[50%] border border-brand-200/70 [transform:rotate(-8deg)]" />
      <Orb className="top-[0%] right-[27%] w-[14%]" slow />

      {/* back panel */}
      <div className={`absolute top-[12%] left-[38%] h-[70%] w-[42%] rounded-[2rem] ${glass} [transform:rotateY(-18deg)_rotateZ(-2deg)]`} />

      {/* centre: brand mark */}
      <div className={`absolute top-[22%] left-[44%] grid aspect-[0.9/1] w-[28%] place-items-center rounded-[42%] ${glass} [transform:rotateY(-14deg)]`}>
        <LogoMark className="size-[46%] -rotate-6" />
      </div>

      {/* left card */}
      <div className="absolute top-[16%] left-[8%] w-[37%] animate-float">
      <div className={`rounded-[1.6rem] p-[13%] ${glass} [transform:rotateY(-20deg)_rotateZ(8deg)]`}>
        <p className="font-display text-[clamp(0.85rem,1.5vw,1.2rem)] leading-snug font-semibold tracking-wide text-ink/75">
          G‘oyangiz
          <br />
          biz uchun muhim
        </p>
        <div className="mt-[10%] flex gap-[6%]">
          <span className="size-[0.7rem] rounded-full bg-brand-300" />
          <span className="size-[0.7rem] rounded-full bg-brand-300" />
          <span className="size-[0.7rem] rounded-full bg-brand-300" />
        </div>
      </div>
      </div>

      {/* telegram tile */}
      <div className={`absolute top-[54%] left-[34%] grid aspect-square w-[16%] place-items-center rounded-[26%] ${glass} [transform:rotateY(-16deg)_rotateZ(-4deg)]`}>
        <Send className="size-[46%] -rotate-12 fill-[#2a8cf0] text-[#2a8cf0]" strokeWidth={1.2} />
      </div>

      {/* right card */}
      <div className="absolute top-[46%] right-[1%] w-[34%] animate-float-slow">
      <div className={`relative rounded-[1.6rem] p-[13%] ${glass} [transform:rotateY(-20deg)_rotateZ(-12deg)]`}>
        <Sparkle className="absolute top-[14%] right-[10%] size-[12%] fill-brand-400 text-brand-400" />
        <p className="font-display text-[clamp(0.85rem,1.5vw,1.2rem)] leading-snug font-semibold tracking-wide text-ink/75">
          Birga
          <br />
          katta natijalarga
          <br />
          erishamiz
        </p>
      </div>
      </div>
    </div>
  );
}
