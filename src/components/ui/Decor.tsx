import { cn } from "@/lib/utils";

/**
 * Soft blurred colour fields used behind sections. Pure CSS gradients — no
 * filters, no images — so they are cheap to paint.
 */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(closest-side,rgb(110_135_251/0.22),rgb(122_92_250/0.08)_55%,transparent)]",
        className,
      )}
    />
  );
}

/** Large soft wave shape like the references' background swooshes. */
export function Wave({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-x-0 h-64 w-full text-brand-100/60 [mask-image:linear-gradient(to_bottom,#000_35%,transparent)]", className)}
    >
      <path
        fill="currentColor"
        d="M0 192c120-42 260-64 420-48s300 74 470 74 330-64 550-122v224H0z"
        opacity="0.55"
      />
      <path fill="currentColor" d="M0 240c160-30 320-26 480 6s310 58 470 40 330-78 490-110v144H0z" opacity="0.4" />
    </svg>
  );
}

/** Glossy glass sphere decoration. */
export function Orb({ className, slow = false }: { className?: string; slow?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute aspect-square rounded-full bg-[radial-gradient(circle_at_32%_28%,#fff_0%,#dfe5ff_18%,#9fb0ff_48%,#7a5cfa_78%,#5b45d6_100%)] opacity-80 shadow-[inset_-6px_-10px_20px_rgb(60_40_180/0.35),0_20px_40px_-12px_rgb(80_70_220/0.45)]",
        slow ? "animate-float-slow" : "animate-float",
        className,
      )}
    />
  );
}

/** Faint dotted grid used in a few hero backgrounds. */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute bg-[radial-gradient(rgb(31_68_240/0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(closest-side,#000,transparent)]",
        className,
      )}
    />
  );
}
