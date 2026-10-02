import type { ReactNode } from "react";
import { siTelegram } from "simple-icons";
import { telegramUrl } from "@/config/site";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Accent, Eyebrow } from "@/components/ui/SectionHeading";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSteps } from "@/components/contact/ContactSteps";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { cn } from "@/lib/utils";
import { CtaVisual } from "./CtaVisual";

export function TelegramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d={siTelegram.path} />
    </svg>
  );
}

/** Page H1 must paint without waiting for JS; section headings reveal on scroll. */
function IntroWrapper({ isPageHeading, children }: { isPageHeading: boolean; children: ReactNode }) {
  return isPageHeading ? <div className="animate-rise">{children}</div> : <Reveal>{children}</Reveal>;
}

type CTASectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  id?: string;
  /** The contact page renders this block as its H1. */
  headingAs?: "h1" | "h2";
  /** Adds the 4 collaboration steps and the contact channels strip. */
  full?: boolean;
  /** Content rendered above the eyebrow (e.g. breadcrumbs). */
  before?: ReactNode;
  className?: string;
};

export function CTASection({
  eyebrow = "Loyihangizga keyingi qadam",
  title = (
    <>
      <Accent>Keling,</Accent> loyihangizni birga quramiz
    </>
  ),
  description = "G‘oyangizni real natijaga aylantirish uchun biz har doim siz bilan birga. Neyroset jamoasi sizning loyihangizga texnologik yechim va to‘liq qo‘llab-quvvatlash taqdim etadi.",
  id = "cta-title",
  headingAs: Heading = "h2",
  full = false,
  before,
  className,
}: CTASectionProps) {
  const telegram = telegramUrl();
  const isPageHeading = Heading === "h1";

  return (
    <section aria-labelledby={id} className={cn("section-y relative isolate overflow-hidden", className)}>
      <SectionBackground
        image="waves"
        priority={isPageHeading}
        imageClassName="object-[85%_10%] opacity-50"
        overlayClassName="bg-linear-to-r from-canvas via-canvas/85 to-canvas/30 max-lg:bg-canvas/80"
      />
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <IntroWrapper isPageHeading={isPageHeading}>
            {before}
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading id={id} className="mt-6 text-display-xl">
              {title}
            </Heading>
            <p className="mt-5 max-w-[37rem] text-lead text-body">{description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={isPageHeading ? "#aloqa-kanallari" : "/contact"} size="lg">
                Loyiha muhokamasi
                <ButtonArrow />
              </ButtonLink>
              {telegram && (
                <ButtonLink href={telegram} external size="lg" variant="secondary">
                  <span className="grid size-9 place-items-center rounded-full bg-[#eef2ff] text-[#2a7de1]">
                    <TelegramGlyph className="size-[1.05rem] -translate-x-px" />
                  </span>
                  Telegram orqali bog‘lanish
                </ButtonLink>
              )}
            </div>
          </IntroWrapper>
          <Reveal delay={0.1} y={30} className="lg:-mr-[3vw]">
            <CtaVisual />
          </Reveal>
        </div>

        {full && (
          <>
            <ContactSteps className="mt-12 lg:mt-14" />
            <div id="aloqa-kanallari" className="mt-12 scroll-mt-28">
              <Reveal>
                <ContactChannels />
              </Reveal>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
