"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

const STEPS = [
  { name: "Identify", body: "Find the problem where people actually work." },
  {
    name: "Define",
    body: "Pin down the users, the constraints, and what success looks like.",
  },
  { name: "Design", body: "Engineer concepts in CAD, backed by analysis." },
  {
    name: "Prototype",
    body: "Build it physically—quick enough to learn from, real enough to trust.",
  },
  { name: "Test", body: "Put it in real hands, under real conditions." },
  { name: "Refine", body: "Fix what the field revealed. Then test again." },
  { name: "Deploy", body: "Put it to work with users and local partners." },
  {
    name: "Scale",
    body: "Local fabrication and distribution, at the volume the need demands.",
  },
];

export function Pathway({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section
      id="pathway"
      aria-label="Development Pathway"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className="grid grid-cols-1 gap-10 px-8 py-14 md:px-14 md:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
          From Problem to Deployment
        </h2>

        {/* Active step readout — fixed height so the layout never jumps */}
        <div className="flex min-h-28 items-baseline gap-5">
          <span className="text-5xl font-semibold tabular-nums tracking-tight text-[#EF7D00] md:text-6xl">
            {active + 1}
            <span className="text-muted-foreground/40">/{STEPS.length}</span>
          </span>
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-1.5"
            >
              <p className="text-xl font-semibold">{step.name}</p>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Track — each step is a segment; everything up to the active one fills */}
      <ol className="grid grid-cols-4 gap-y-6 px-8 pb-14 md:grid-cols-8 md:px-14 md:pb-20">
        {STEPS.map((s, i) => {
          const reached = i <= active;

          return (
            <li key={s.name}>
              <button
                type="button"
                aria-current={i === active ? "step" : undefined}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex w-full flex-col gap-3 pr-2 text-left focus-visible:outline-none"
              >
                <span className="relative h-1 w-full overflow-hidden bg-border dark:bg-muted">
                  <span
                    className={cn(
                      "absolute inset-0 origin-left bg-[#EF7D00] transition-transform duration-300",
                      reached ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors group-focus-visible:underline",
                    i === active
                      ? "text-foreground"
                      : reached
                        ? "text-foreground/70"
                        : "text-muted-foreground",
                  )}
                >
                  {s.name}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
