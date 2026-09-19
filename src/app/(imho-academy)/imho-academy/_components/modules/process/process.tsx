"use client";

import { useRef } from "react";
import type { RefObject } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";

const OUTPUTS = [
  "Design",
  "CAD model",
  "Documentation",
  "Performance validation",
];

const STEPS = [
  {
    title: "You Are Given a Real Engineering Problem",
    body: "Not a classroom exercise—a real design challenge.",
    trial: null,
  },
  {
    title: "You Attempt It",
    body: "Using your current thinking.",
    trial: "Trial 1",
  },
  {
    title: "You Learn the Engineering Design System",
    body: "We introduce structured tools and methods.",
    trial: null,
  },
  {
    title: "You Improve",
    body: "You refine your approach until it meets real-world standards.",
    trial: "Trial 2–4",
  },
  {
    title: "You Produce a Validated Engineering Output",
    body: null,
    trial: null,
  },
] as const;

export function Process({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<RefObject<HTMLElement | null>[]>([]);

  if (nodeRefs.current.length !== STEPS.length) {
    nodeRefs.current = STEPS.map(() => ({ current: null }));
  }

  return (
    <section
      aria-label="How You Build Capability"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            How You Build Engineering Design Capability
          </h2>
        </div>
      </div>

      {/* Vertical timeline — beam-connected, matching the homepage's CapabilityFlow */}
      <div className="flex flex-col items-center px-6 py-14 md:py-20">
        <div className="w-full max-w-2xl rounded-xl border muted-border bg-accent/10 p-8 md:p-10">
          <div ref={containerRef} className="relative flex flex-col">
            {STEPS.map((step, idx) => {
              const isLast = idx === STEPS.length - 1;

              return (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span
                      ref={(el) => {
                        nodeRefs.current[idx].current = el;
                      }}
                      className={cn(
                        "relative z-10 size-9 shrink-0 flex items-center justify-center rounded-full border muted-border text-sm font-semibold tabular-nums",
                        isLast
                          ? "border-transparent bg-[#EF7D00] text-white"
                          : "bg-white text-black",
                      )}
                    >
                      {isLast ? <CheckIcon size={16} weight="bold" /> : idx + 1}
                    </span>
                    {!isLast && <div className="flex-1 min-h-10 my-2" />}
                  </div>
                  <div
                    className={cn(
                      "flex flex-col gap-2 min-w-0",
                      !isLast && "pb-8",
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <h3 className="text-base md:text-lg font-semibold leading-snug">
                        {step.title}
                      </h3>
                      {step.trial && (
                        <span className="rounded-full bg-[#EF7D00]/10 px-2.5 py-0.5 text-xs font-medium text-[#EF7D00]">
                          {step.trial}
                        </span>
                      )}
                    </div>
                    {step.body && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.body}
                      </p>
                    )}
                    {isLast && (
                      <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                        {OUTPUTS.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {STEPS.slice(0, -1).map((_, idx) => (
              <AnimatedBeam
                key={idx}
                containerRef={containerRef}
                fromRef={nodeRefs.current[idx]}
                toRef={nodeRefs.current[idx + 1]}
                vertical
                duration={5}
                delay={idx * 0.4}
                pathOpacity={0.15}
                gradientStartColor="#EF7D00"
                gradientStopColor="#FEB667"
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-muted-foreground text-center">
          Every step is measured. Every output is reviewed.
        </p>
      </div>
    </section>
  );
}
