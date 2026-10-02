import Link from "next/link";
import { ArrowRight, Headset, Heart } from "lucide-react";
import { siGithub, siInstagram, siTelegram, siYoutube } from "simple-icons";
import { footerNav } from "@/data/navigation";
import { getSocialLinks, siteConfig, telegramUrl, type SocialLink } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

/** LinkedIn's mark is not shipped by simple-icons, so it is inlined here. */
const linkedinPath =
  "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z";

const socialPaths: Record<SocialLink["key"], string> = {
  instagram: siInstagram.path,
  telegram: siTelegram.path,
  linkedin: linkedinPath,
  youtube: siYoutube.path,
  github: siGithub.path,
};

export function Footer() {
  const socials = getSocialLinks();
  const telegram = telegramUrl();
  const year = new Date().getFullYear();
  const years = siteConfig.foundedYear && siteConfig.foundedYear < year ? `${siteConfig.foundedYear}–${year}` : `${year}`;

  return (
    <footer className="relative">
      <div className="container-wide border-t border-line-strong/60">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 lg:grid-cols-[1.5fr_0.75fr_0.95fr_1.35fr] lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-3 max-w-[18rem] text-[0.95rem] leading-snug text-body">
              Biz bizneslar uchun zamonaviy raqamli yechimlar yaratamiz.
            </p>
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-3">
                {socials.map((social) => (
                  <li key={social.key}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Neyroset ${social.label} sahifasi`}
                      className="focus-ring grid size-12 place-items-center rounded-xl bg-[#eef1fb] text-ink transition-colors hover:bg-brand-600 hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
                        <path d={socialPaths[social.key]} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-sans text-[0.95rem] font-bold text-ink">{group.title}</h2>
              <ul className="mt-3 space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="focus-ring rounded text-[0.95rem] text-body transition-colors hover:text-brand-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 flex items-start gap-4 self-start rounded-2xl bg-[#f1f4fd]/80 p-5 lg:col-span-1 lg:p-6">
            <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-brand-600 shadow-xs">
              <Headset className="size-7" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="font-sans text-[0.95rem] font-bold text-ink">Hali savollaringiz bormi?</h2>
              <p className="mt-1 text-sm text-body">Biz sizga yordam berishdan mamnunmiz.</p>
              <Link
                href={telegram ?? "/contact"}
                {...(telegram ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="focus-ring group mt-3 inline-flex items-center gap-2 rounded text-[0.95rem] font-medium text-brand-600"
              >
                {telegram ? "Telegram orqali bog‘lanish" : "Biz bilan bog‘lanish"}
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line-strong/60 py-5 text-sm text-body sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {years} {siteConfig.name}. Barcha huquqlar himoyalangan.
          </p>
          <p className="flex items-center gap-2">
            <Heart aria-hidden="true" className="size-4 fill-rose-500 text-rose-500" />
            Texnologiya orqali katta imkoniyatlar sari.
          </p>
        </div>
      </div>
    </footer>
  );
}
