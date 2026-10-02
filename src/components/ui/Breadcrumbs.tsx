import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Navigatsiya zanjiri">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="focus-ring rounded transition-colors hover:text-brand-600">
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-3.5 text-line-strong" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
