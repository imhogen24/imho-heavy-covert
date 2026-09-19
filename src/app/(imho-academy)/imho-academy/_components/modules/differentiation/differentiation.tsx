import { cn } from "@/lib/utils";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/ssr/ArrowsClockwise";
import { TargetIcon } from "@phosphor-icons/react/dist/ssr/Target";
import { BrainIcon } from "@phosphor-icons/react/dist/ssr/Brain";
import { GaugeIcon } from "@phosphor-icons/react/dist/ssr/Gauge";
import type { Icon } from "@phosphor-icons/react";

type Pillar = {
  Icon: Icon;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    Icon: ArrowsClockwiseIcon,
    title: "Trial-Based Learning",
    body: "You don't do tasks once. You repeat them until you improve—from crude to calibrated performance.",
  },
  {
    Icon: TargetIcon,
    title: "Output-Based Training",
    body: "You are evaluated based on your designs, decisions, analysis and calculations, documentation, and results.",
  },
  {
    Icon: BrainIcon,
    title: "Engineering Discipline",
    body: "You follow structured design processes, functional thinking, systems thinking, design thinking, and engineering logic.",
  },
  {
    Icon: GaugeIcon,
    title: "Measurable Performance",
    body: "We track your improvement across time, errors, quality, and decision-making.",
  },
];

export function Differentiation({ className }: { className?: string }) {
  return (
    <section
      aria-label="Experience the Difference"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Experience the Difference
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, idx) => (
          <div
            key={pillar.title}
            className={cn(
              "flex flex-col gap-6 p-8 lg:p-10",
              idx < 3 && "border-b muted-border",
              idx === 0 && "sm:border-r sm:border-b muted-border",
              idx === 1 && "sm:border-r-0 sm:border-b muted-border",
              idx === 2 && "sm:border-r sm:border-b-0",
              idx === 3 && "sm:border-r-0 sm:border-b-0",
              idx < 3 && "lg:border-b-0 lg:border-r muted-border",
              idx === 3 && "lg:border-r-0",
            )}
          >
            <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border">
              <pillar.Icon size={20} weight="thin" />
            </span>
            <h3 className="text-lg font-semibold leading-snug">
              {pillar.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
