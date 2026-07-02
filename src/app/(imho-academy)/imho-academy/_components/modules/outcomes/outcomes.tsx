import { cn } from "@/lib/utils";
import { GearSixIcon } from "@phosphor-icons/react/dist/ssr/GearSix";
import { CompassIcon } from "@phosphor-icons/react/dist/ssr/Compass";
import { LightbulbIcon } from "@phosphor-icons/react/dist/ssr/Lightbulb";
import { BriefcaseIcon } from "@phosphor-icons/react/dist/ssr/Briefcase";
import { ChartLineUpIcon } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import type { Icon } from "@phosphor-icons/react";

type Outcome = {
  Icon: Icon;
  title: string;
  body: string;
};

const OUTCOMES: Outcome[] = [
  {
    Icon: GearSixIcon,
    title: "Engineering Design Capability",
    body: "Ability to solve real engineering problems from start to finish.",
  },
  {
    Icon: CompassIcon,
    title: "CAD & Technical Documentation",
    body: "Industry-level modeling, assemblies, and drawings.",
  },
  {
    Icon: LightbulbIcon,
    title: "Engineering Thinking",
    body: "Structured approach to functions, concepts, and systems.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Real Project Portfolio",
    body: "Evidence of what you can design and build.",
  },
  {
    Icon: ChartLineUpIcon,
    title: "Measurable Performance Record",
    body: "Proof of your improvement and capability level.",
  },
];

export function Outcomes({ className }: { className?: string }) {
  return (
    <section
      aria-label="What You Leave With"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Visual placeholder */}
      <div
        aria-hidden
        className="border-b muted-border p-6 md:p-10"
      >
        <div className="flex min-h-[220px] md:min-h-[280px] items-center justify-center rounded-xl border border-dashed muted-border bg-accent/40">
          <span className="text-sm font-medium text-muted-foreground">
            Outcomes Showcase
          </span>
        </div>
      </div>

      {/* Header + outcomes grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Header column — narrower */}
        <div className="border-b lg:border-b-0 lg:border-r muted-border p-8 lg:p-14 flex items-start">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            You Don&apos;t Leave With Notes. You Leave With Design Capability.
          </h2>
        </div>

        {/* Outcomes grid column — wider */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {OUTCOMES.map((outcome, idx) => {
            const isLast = idx === OUTCOMES.length - 1;
            return (
              <div
                key={outcome.title}
                className={cn(
                  "flex flex-col gap-4 p-8 lg:p-10",
                  !isLast && "border-b muted-border",
                  idx % 2 === 0 &&
                    idx + 1 < OUTCOMES.length &&
                    "sm:border-r muted-border",
                  isLast && "sm:col-span-2 sm:flex-row sm:items-center sm:gap-6",
                )}
              >
                <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border">
                  <outcome.Icon size={20} weight="thin" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold leading-snug">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {outcome.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
