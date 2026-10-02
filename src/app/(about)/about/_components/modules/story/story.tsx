"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

const HEADLINE = "Building the Capability Behind African Industry";

const MILESTONES = [
  { mark: "2018", label: "CAD at KNUST", detail: "Where it started." },
  {
    mark: "2019",
    label: "The CAD Bureau",
    detail: "Design and drafting, done properly.",
  },
  {
    mark: "2021",
    label: "Innovate Make and Have Ours Ltd",
    detail: "The problem was capability.",
  },
  {
    mark: "IMHO GEN",
    label: "Generation",
    detail: "Engineers, designers, makers, enterprises.",
  },
  {
    mark: "Today",
    label: "Engineering Design & R&D",
    detail: "Capability infrastructure for Africa.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const RAIL_DURATION = 1.6;

export function Story({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  // Collapse every animation to its end state for reduced-motion users.
  const t = (delay: number, duration = 0.7) =>
    reduce ? { duration: 0 } : { delay, duration, ease: EASE };

  return (
    <section
      id="story"
      aria-label="Our Story"
      className={cn("relative w-full", className)}
    >
      <div className="relative isolate overflow-hidden px-8 pt-16 pb-14 md:px-14 md:pt-24 md:pb-20">
        <GridPattern
          width={56}
          height={56}
          className="-z-10 stroke-border/70 fill-transparent dark:stroke-muted/70 [mask-image:radial-gradient(ellipse_70%_60%_at_85%_0%,white,transparent)]"
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t(0)}
          className="block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        >
          01 — Our Story
        </motion.span>

        <h1 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl lg:text-7xl">
          {HEADLINE.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: "0.4em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.1 + i * 0.06)}
              className="inline-block"
            >
              {word}
              {" "}
            </motion.span>
          ))}
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={t(0.2)}
            className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            It all started with CAD in 2018–2019 at KNUST. From a CAD Bureau to
            establishing Innovate Make and Have Ours Ltd in 2021, one thing
            became clear.
          </motion.p>

          {/* The turn — "tools" gets struck through, "capability" lights up */}
          <motion.p
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.8 }}
            className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl"
          >
            The core problem wasn&apos;t{" "}
            <span className="whitespace-nowrap">
              just{" "}
              <motion.span
                variants={{
                  hidden: { opacity: 1 },
                  shown: { opacity: 0.4 },
                }}
                transition={t(0.9, 0.5)}
                className="relative inline-block"
              >
                tools
                <motion.span
                  aria-hidden
                  variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
                  transition={t(0.5, 0.5)}
                  className="absolute left-0 right-0 top-[55%] h-[2px] origin-left bg-current"
                />
              </motion.span>
              .
            </span>
            <br />
            It was{" "}
            <span className="relative inline-block">
              capability
              <motion.span
                aria-hidden
                variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
                transition={t(1.2, 0.6)}
                className="absolute inset-0 text-[#EF7D00]"
              >
                capability
              </motion.span>
            </span>
            .
          </motion.p>
        </div>
      </div>

      {/* Milestones — a rail draws across, each mark settles in as it passes */}
      <motion.ol
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.4 }}
        className="relative grid grid-cols-1 border-t muted-border md:grid-cols-5"
      >
        <motion.span
          aria-hidden
          variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
          transition={t(0, RAIL_DURATION)}
          className="absolute -top-px left-0 hidden h-px w-full origin-left bg-gradient-to-r from-muted-foreground/40 via-muted-foreground/40 to-[#EF7D00] md:block"
        />
        <motion.span
          aria-hidden
          variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
          transition={t(0, RAIL_DURATION)}
          className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-muted-foreground/40 via-muted-foreground/40 to-[#EF7D00] md:hidden"
        />

        {MILESTONES.map((m, i) => {
          const isLast = i === MILESTONES.length - 1;
          const delay = (RAIL_DURATION / MILESTONES.length) * i;

          return (
            <motion.li
              key={m.mark}
              variants={{
                hidden: { opacity: 0, y: 10 },
                shown: { opacity: 1, y: 0 },
              }}
              transition={t(delay, 0.6)}
              className={cn(
                "group relative flex items-baseline gap-6 px-8 py-6 transition-colors md:flex-col md:gap-3 md:px-6 md:py-10",
                !isLast && "border-b md:border-b-0 md:border-r muted-border",
                !isLast && "hover:bg-accent/40",
              )}
            >
              <span
                className={cn(
                  "w-28 shrink-0 whitespace-nowrap md:whitespace-normal lg:whitespace-nowrap text-xl font-semibold tracking-tight tabular-nums transition-colors md:w-auto md:text-2xl lg:text-3xl",
                  isLast
                    ? "text-[#EF7D00]"
                    : "text-muted-foreground/40 group-hover:text-foreground",
                )}
              >
                {m.mark}
              </span>
              <span className="flex flex-col gap-1">
                <span
                  className={cn(
                    "text-sm leading-snug",
                    isLast ? "font-semibold" : "font-medium",
                  )}
                >
                  {m.label}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {m.detail}
                </span>
              </span>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}
