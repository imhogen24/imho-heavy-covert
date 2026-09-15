"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { badgeVariants } from "@/components/ui/badge";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center text-black justify-center rounded-full border muted-border bg-white p-3",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const BADGE_TONES = {
  paid: "bg-emerald-500/15 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300",
  scoped: "bg-blue-500/15 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300",
  equity:
    "bg-violet-500/15 text-violet-800 dark:bg-violet-500/20 dark:text-violet-300",
} satisfies Record<string, string>;

function NotionBadge({
  children,
  tone = "paid",
}: {
  children: React.ReactNode;
  tone?: keyof typeof BADGE_TONES;
}) {
  return (
    <span
      className={cn(
        badgeVariants({ variant: "outline" }),
        "rounded-full border-0 px-2.5 py-0.5 text-xs font-medium",
        BADGE_TONES[tone],
      )}
    >
      {children}
    </span>
  );
}

const STEPS = [
  {
    number: 1,
    badge: "Paid",
    badgeTone: "paid" as const,
    label: "Diagnostic",
    description:
      "Requirements, constraints, and deliverables agreed before design work.",
  },
  {
    number: 2,
    badge: "Paid",
    badgeTone: "scoped" as const,
    label: "Budget approval",
    description: "Capital, timeline, and engagement terms approved in writing.",
  },
  {
    number: 3,
    badge: "Funded",
    badgeTone: "equity" as const,
    label: "Controlled execution",
    description:
      "Engineering, procurement, and fabrication within the approved plan.",
  },
] as const;

export function Steps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const stepRefs = [step1Ref, step2Ref, step3Ref];

  return (
    <>
      {/* Mobile: each step as a complete unit with vertical connector */}
      <div className="flex flex-col items-center sm:hidden px-6 pb-12 pt-4">
        {STEPS.map((step, i) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-3 py-6 text-center max-w-xs">
              <Circle>{step.number}</Circle>
              <NotionBadge tone={step.badgeTone}>{step.badge}</NotionBadge>
              <p className="text-lg font-medium">{step.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
            {i < STEPS.length - 1 && (
              <div className="h-8 w-px border-l border-dashed muted-border" />
            )}
          </div>
        ))}
      </div>

      {/* Desktop: beam layout */}
      <div
        className="relative hidden sm:flex w-full flex-col overflow-hidden p-8 md:p-10 md:px-16 lg:px-28"
        ref={containerRef}
      >
        <div className="flex w-full flex-col gap-10">
          <div className="grid w-full grid-cols-3 gap-0">
            {STEPS.map((step, index) => (
              <div
                key={`circle-${step.number}`}
                className="flex justify-center"
              >
                <Circle ref={stepRefs[index]}>{step.number}</Circle>
              </div>
            ))}
          </div>

          <div className="grid w-full grid-cols-3 gap-x-8">
            {STEPS.map((step) => (
              <div
                key={`copy-${step.number}`}
                className="flex flex-col items-center gap-2 text-center"
              >
                <NotionBadge tone={step.badgeTone}>{step.badge}</NotionBadge>
                <p className="text-lg font-medium">{step.label}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          fromRef={step1Ref}
          toRef={step2Ref}
        />
        <AnimatedBeam
          duration={5}
          containerRef={containerRef}
          fromRef={step2Ref}
          toRef={step3Ref}
        />
      </div>
    </>
  );
}
