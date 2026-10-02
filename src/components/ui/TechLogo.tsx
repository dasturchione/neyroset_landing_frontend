import type { TechLogo as TechLogoSpec } from "@/types/common";
import { cn } from "@/lib/utils";

export function TechLogo({ logo, className }: { logo: TechLogoSpec; className?: string }) {
  const classes = cn("size-9", className);

  if (logo.type === "path") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={classes} fill={logo.color}>
        <path d={logo.path} />
      </svg>
    );
  }

  if (logo.type === "monogram") {
    const small = logo.text.length > 2;
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={classes}>
        {logo.shape === "circle" ? (
          <circle cx="12" cy="12" r="11" fill={logo.color} />
        ) : (
          <path d="M12 1.5 21.1 6.75v10.5L12 22.5l-9.1-5.25V6.75z" fill={logo.color} />
        )}
        <text
          x="12"
          y={small ? "14.9" : "15.6"}
          textAnchor="middle"
          fontSize={small ? "6.6" : "9.5"}
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          fill="#fff"
        >
          {logo.text}
        </text>
      </svg>
    );
  }

  const Icon = logo.icon;
  return <Icon aria-hidden="true" className={classes} color={logo.color} strokeWidth={1.75} />;
}
