"use client";

import { m, type Variants } from "motion/react";
import type { ReactNode } from "react";

const containers = { div: m.div, ul: m.ul, ol: m.ol } as const;
const items = { div: m.div, li: m.li, article: m.article } as const;

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type StaggerProps = {
  children: ReactNode;
  as?: keyof typeof containers;
  className?: string;
  stagger?: number;
  delay?: number;
};

/** Reveals its `StaggerItem` children one after another when scrolled into view. */
export function Stagger({ children, as = "div", className, stagger = 0.07, delay = 0 }: StaggerProps) {
  const Component = containers[as];
  return (
    <Component
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  as?: keyof typeof items;
  className?: string;
};

export function StaggerItem({ children, as = "div", className }: StaggerItemProps) {
  const Component = items[as];
  return (
    <Component data-reveal="" className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
