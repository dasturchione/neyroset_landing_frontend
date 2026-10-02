import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
 * Device frames. Each frame is a size container: everything inside is drawn
 * in cqw units so the whole device scales proportionally with its slot.
 */

export function LaptopFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("@container relative w-full", className)}>
      <div className="mx-auto w-[88%] rounded-t-[2.2cqw] bg-linear-to-b from-[#1b2140] to-[#0c1029] p-[1.3cqw] pb-[1.6cqw] shadow-[0_3cqw_6cqw_-2cqw_rgb(15_23_66/0.45)] ring-1 ring-white/10">
        <div className="@container relative aspect-[16/10] overflow-hidden rounded-[0.7cqw] bg-white">{children}</div>
      </div>
      <div className="relative mx-auto h-[2.2cqw] w-full rounded-b-[2.4cqw] rounded-t-[0.4cqw] bg-linear-to-b from-[#e9edf6] via-[#cfd6e6] to-[#9aa4bb] shadow-[0_2.4cqw_3cqw_-1.2cqw_rgb(15_23_66/0.35)]">
        <div className="absolute top-0 left-1/2 h-[0.9cqw] w-[14%] -translate-x-1/2 rounded-b-[1cqw] bg-[#b8c0d3]" />
      </div>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("@container relative", className)}>
      <div className="relative aspect-[9/19] rounded-[16cqw] bg-linear-to-b from-[#e7ebf5] to-[#b9c2d6] p-[2.4cqw] shadow-[0_8cqw_14cqw_-6cqw_rgb(15_23_66/0.5)]">
        <div className="relative size-full rounded-[14cqw] bg-[#0c1029] p-[3cqw]">
          <div className="@container relative size-full overflow-hidden rounded-[11.5cqw] bg-white">
            {children}
            <span className="absolute top-[2.2%] left-1/2 h-[3.4%] w-[34%] -translate-x-1/2 rounded-full bg-[#0c1029]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrowserFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("@container relative w-full", className)}>
      <div className="overflow-hidden rounded-[1.6cqw] border border-line bg-white shadow-card">
        <div className="flex h-[3.4cqw] items-center gap-[0.8cqw] border-b border-line bg-[#f8f9fd] px-[1.6cqw]">
          <span className="size-[1cqw] rounded-full bg-[#ff6b6b]/80" />
          <span className="size-[1cqw] rounded-full bg-[#ffc94d]/90" />
          <span className="size-[1cqw] rounded-full bg-[#3ecf8e]/80" />
          <span className="mx-auto h-[1.8cqw] w-[36%] rounded-full bg-white ring-1 ring-line" />
        </div>
        <div className="@container relative aspect-[16/10]">{children}</div>
      </div>
    </div>
  );
}
