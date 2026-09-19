"use client";

import { useRef } from "react";
import type { RefObject } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";

const STAGES = [
  "Problem",
  "Function",
  "Concept",
  "Form",
  "Analysis",
  "CAD",
  "Build",
  "Validate",
];

const TRAINS_YOU_TO = [
  "Think like an engineer",
  "Design with logic and structure",
  "Make decisions based on analysis",
  "Build solutions that work in the real world",
];

export function Solution({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<RefObject<HTMLDivElement | null>[]>([]);

  if (nodeRefs.current.length !== STAGES.length) {
    nodeRefs.current = STAGES.map(() => ({ current: null }));
  }

  return (
    <section
      aria-label="The System"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            The System
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            We Built a System That Produces Engineering Design Capability
          </h2>
        </div>
      </div>

      {/* Process flow — beam-connected nodes, matching the homepage's Steps component */}
      <div className="border-b muted-border px-6 py-12 md:py-16 overflow-x-auto">
        <div
          ref={containerRef}
          className="relative flex items-start w-fit mx-auto"
        >
          {STAGES.map((stage, idx) => (
            <div
              key={stage}
              className="flex flex-col items-center gap-3 px-4 md:px-6 shrink-0"
            >
              <div
                ref={(el) => {
                  nodeRefs.current[idx].current = el;
                }}
                className="relative z-10 size-9 shrink-0 flex items-center justify-center rounded-full border muted-border bg-white text-xs font-semibold tabular-nums text-black"
              >
                {idx + 1}
              </div>
              <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                {stage}
              </span>
            </div>
          ))}

          {STAGES.slice(0, -1).map((_, idx) => (
            <AnimatedBeam
              key={idx}
              containerRef={containerRef}
              fromRef={nodeRefs.current[idx]}
              toRef={nodeRefs.current[idx + 1]}
              curvature={0}
              duration={18}
              delay={idx * 0.8}
              pathColor="gray"
              pathOpacity={0.15}
              gradientStartColor="#EF7D00"
              gradientStopColor="#FEB667"
            />
          ))}
        </div>
      </div>

      {/* Body + trains you to */}
      <div className="flex flex-col items-center gap-6 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          At IMHO GEN Academy, you don&apos;t just learn. You go through a
          structured system that trains you to:
        </p>
        <div className="flex flex-col gap-3 w-full text-left sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
          {TRAINS_YOU_TO.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 size-4 shrink-0 flex items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <CheckIcon size={9} weight="bold" />
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
