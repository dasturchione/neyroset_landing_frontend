import { siteConfig } from "@/config/site";
import { Accent, Eyebrow, Kicker } from "@/components/ui/SectionHeading";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <SectionBackground
        image="glass"
        priority
        fade="bottom"
        imageClassName="object-[75%_20%] opacity-90"
        overlayClassName="bg-linear-to-r from-white/95 via-white/80 to-white/10 max-lg:bg-white/70"
      />

      <div className="container-wide grid items-center gap-x-4 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
        <div className="relative z-10 max-w-[42rem] lg:py-6">
          <div className="animate-rise">
            <Eyebrow>Software development team</Eyebrow>
          </div>
          <h1 id="hero-title" className="mt-7 text-display-xl [text-wrap:wrap] animate-rise [animation-delay:60ms]">
            <Accent>Neyroset</Accent> — biznes uchun aqlli dasturiy yechimlar
          </h1>
          <p className="mt-5 max-w-[38rem] text-lead text-body animate-rise [animation-delay:140ms]">
            Biz zamonaviy web, mobil, backend, buxgalteriya, avtomatlashtirish va korxona tizimlarini ishlab chiqamiz.
            G‘oyangizni texnologiya orqali haqiqiy natijaga aylantiramiz.
          </p>
          <div className="mt-8 flex flex-col gap-4 animate-rise [animation-delay:220ms] sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              Loyiha muhokamasi
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink href="/#loyihalar" size="lg" variant="secondary">
              <span aria-hidden="true" className="grid size-8 place-items-center rounded-full border-2 border-brand-200 text-ink">
                <svg viewBox="0 0 12 12" className="ml-0.5 size-3 fill-current">
                  <path d="M2 1.2v9.6c0 .5.6.8 1 .5l7.4-4.8c.4-.3.4-.8 0-1L3 .7c-.4-.3-1 0-1 .5z" />
                </svg>
              </span>
              Bizning ishlarimiz
            </ButtonLink>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-y-6 animate-rise [animation-delay:320ms] sm:flex sm:flex-nowrap">
            {siteConfig.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex shrink-0 flex-col-reverse justify-end sm:pr-6 xl:pr-8 ${index > 0 ? "sm:border-l sm:border-line-strong/70 sm:pl-6 xl:pl-8" : ""}`}
              >
                <dt className="mt-1 max-w-[8.5rem] text-[0.95rem] leading-snug text-body">{stat.label}</dt>
                <dd className="font-display text-[1.9rem] leading-none font-extrabold tracking-tight text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:-mr-[5vw] lg:-ml-[6%]">
          <HeroVisual />
        </div>
      </div>

      <Kicker className="container-wide mt-12 justify-center pb-6 lg:mt-14">Ishonchli texnologik hamkor</Kicker>
    </section>
  );
}
