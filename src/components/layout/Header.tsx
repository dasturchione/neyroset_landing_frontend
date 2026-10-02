"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { ButtonArrow, buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/common";

/** Tracks which homepage section is currently in view (scroll-spy). */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const ids = mainNav.map((item) => item.sectionId).filter((id): id is string => Boolean(id));
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

function isItemActive(item: NavItem, pathname: string, section: string | null): boolean {
  if (pathname === "/") {
    if (section) return item.sectionId === section;
    return item.href === "/";
  }
  if (item.href === "/") return false;
  if (item.matchPath && pathname.startsWith(item.matchPath)) return true;
  const base = item.href.split("#")[0];
  return base !== "/" && pathname.startsWith(base);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const section = useActiveSection(pathname === "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-line/70 bg-white/80 shadow-[0_8px_30px_-20px_rgb(15_23_66/0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className={cn("container-wide flex items-center justify-between gap-6 transition-[height] duration-500", scrolled ? "h-[4.5rem]" : "h-20 lg:h-24")}>
        <Logo />

        <nav aria-label="Asosiy menyu" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => {
              const active = isItemActive(item, pathname, section);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "focus-ring relative inline-flex h-11 items-center rounded-xl px-2.5 text-[0.9rem] font-medium whitespace-nowrap transition-colors xl:px-3.5 xl:text-[0.95rem]",
                      active ? "text-brand-600" : "text-ink/80 hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-2.5 -bottom-0.5 h-0.5 xl:inset-x-3.5 origin-center rounded-full bg-brand-600 transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className={buttonClasses({ size: "md", className: "hidden sm:inline-flex" })}>
            Loyiha muhokamasi
            <ButtonArrow />
          </Link>
          <button
            type="button"
            onClick={openMenu}
            aria-label="Menyuni ochish"
            aria-haspopup="dialog"
            className="focus-ring inline-flex size-12 items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-xs lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Mobil menyu"
        className="nr-dialog nr-drawer fixed inset-y-0 right-0 left-auto m-0 h-dvh w-full max-w-sm"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="flex h-full flex-col bg-white px-6 pt-5 pb-8 shadow-float">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Menyuni yopish"
              className="focus-ring inline-flex size-12 items-center justify-center rounded-2xl border border-line text-ink"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav aria-label="Mobil navigatsiya" className="mt-10 flex-1">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => {
                const active = isItemActive(item, pathname, section);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "focus-ring flex items-center justify-between rounded-2xl px-4 py-4 font-display text-xl font-bold tracking-tight transition-colors",
                        active ? "bg-brand-50 text-brand-600" : "text-ink hover:bg-canvas",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link href="/contact" onClick={closeMenu} className={buttonClasses({ size: "lg", className: "w-full" })}>
            Loyiha muhokamasi
            <ButtonArrow />
          </Link>
        </div>
      </dialog>
    </header>
  );
}
