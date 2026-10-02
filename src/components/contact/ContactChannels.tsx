import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig, telegramUrl } from "@/config/site";

type Channel = { label: string; value: string; hint?: string; href?: string; icon: LucideIcon; tone: string; filled?: boolean };

/** Builds the channel list from siteConfig. Empty (null) fields are skipped. */
export function getContactChannels(): Channel[] {
  const { email, phone, telegram, address, workingHours } = siteConfig.contact;
  const channels: Channel[] = [];
  if (email)
    channels.push({ label: "Email", value: email, hint: "Savollaringiz uchun yozing", href: `mailto:${email}`, icon: Mail, tone: "bg-[#eef2ff] text-brand-600" });
  if (telegram)
    channels.push({
      label: "Telegram",
      value: `@${telegram.replace(/^@/, "")}`,
      hint: "Tezkor javob oling",
      href: telegramUrl() ?? undefined,
      icon: Send,
      tone: "bg-[#eef2ff] text-brand-600",
      filled: true,
    });
  if (phone)
    channels.push({
      label: "Telefon",
      value: phone,
      hint: workingHours ?? undefined,
      href: `tel:${phone.replace(/[^+\d]/g, "")}`,
      icon: PhoneCall,
      tone: "bg-emerald-50 text-emerald-500",
    });
  if (address)
    channels.push({ label: "Manzil", value: address, hint: "Ofisimizga tashrif buyuring", icon: MapPin, tone: "bg-rose-50 text-rose-500", filled: true });
  return channels;
}

export function ContactChannels() {
  const channels = getContactChannels();
  if (channels.length === 0) return null;

  return (
    <ul className="grid overflow-hidden rounded-[1.75rem] border border-white bg-white/60 px-2 py-2 shadow-[0_24px_60px_-48px_rgb(40_60_140/0.4)] backdrop-blur sm:grid-cols-2 xl:grid-cols-4">
      {channels.map((channel, index) => {
        const Icon = channel.icon;
        const content = (
          <>
            <span aria-hidden="true" className={`grid size-[3.75rem] shrink-0 place-items-center rounded-2xl ${channel.tone}`}>
              <Icon className={`size-7 ${channel.filled ? "fill-current [&>circle]:fill-white" : ""}`} strokeWidth={channel.filled ? 1.3 : 1.8} />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[0.92rem] text-body">{channel.label}</span>
              <span className="font-display text-[1.12rem] leading-snug font-bold break-words text-ink">{channel.value}</span>
              {channel.hint && <span className="text-[0.95rem] text-muted">{channel.hint}</span>}
            </span>
          </>
        );
        const divider = index > 0 ? "xl:before:absolute xl:before:inset-y-6 xl:before:left-0 xl:before:w-px xl:before:bg-line-strong/70" : "";
        return (
          <li key={channel.label} className={`relative ${divider}`}>
            {channel.href ? (
              <a
                href={channel.href}
                {...(channel.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="focus-ring flex h-full items-center gap-4 rounded-2xl px-5 py-5 transition-colors hover:bg-white/70 xl:px-6"
              >
                {content}
              </a>
            ) : (
              <div className="flex h-full items-center gap-5 px-5 py-5 lg:px-8">{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
