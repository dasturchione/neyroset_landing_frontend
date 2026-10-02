"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

const elements = {
  div: m.div,
  section: m.section,
  article: m.article,
  header: m.header,
  li: m.li,
  p: m.p,
  span: m.span,
} as const;

type RevealProps = {
  children: ReactNode;
  as?: keyof typeof elements;
  className?: string;
  delay?: number;
  /** Vertical offset in px before the element enters. */
  y?: number;
  /** Start slightly scaled down (0.96–1). */
  scale?: number;
  /** Subtle blur-to-sharp; use sparingly. */
  blur?: boolean;
  id?: string;
};

/**
 * Fades + lifts content in once it enters the viewport.
 * Content is server-rendered and present in the HTML; only its paint is animated.
 */
export function Reveal({ children, as = "div", className, delay = 0, y = 24, scale = 1, blur = false, id }: RevealProps) {
  const Component = elements[as];
  return (
    <Component
      id={id}
      data-reveal=""
      className={className}
      initial={blur ? { opacity: 0, y, scale, filter: "blur(8px)" } : { opacity: 0, y, scale }}
      whileInView={blur ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.75, delay }}
    >
      {children}
    </Component>
  );
}
