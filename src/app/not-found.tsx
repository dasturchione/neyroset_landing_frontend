import type { Metadata } from "next";
import { ButtonArrow, ButtonLink } from "@/components/ui/Button";
import { Glow } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Sahifa topilmadi",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="page-title" className="relative isolate flex min-h-[80dvh] items-center overflow-hidden pt-32 pb-24">
      <Glow className="top-0 left-1/2 -z-10 size-[50rem] -translate-x-1/2" />
      <div className="container-site text-center">
        <p className="font-display text-[clamp(5rem,3rem+10vw,10rem)] leading-none font-extrabold tracking-tighter text-brand-600/15">404</p>
        <h1 id="page-title" className="mt-4 text-display">
          Sahifa topilmadi
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lead text-body">
          Siz qidirgan sahifa ko‘chirilgan yoki mavjud emas. Bosh sahifaga qaytib, kerakli bo‘limni tanlang.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Bosh sahifaga qaytish
            <ButtonArrow />
          </ButtonLink>
          <ButtonLink href="/projects" size="lg" variant="secondary">
            Loyihalarni ko‘rish
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
