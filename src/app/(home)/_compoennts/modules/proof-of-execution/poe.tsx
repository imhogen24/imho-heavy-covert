"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

import { FactoryIcon } from "@phosphor-icons/react/dist/csr/Factory";
import { CompassIcon } from "@phosphor-icons/react/dist/csr/Compass";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/csr/GraduationCap";
import { ChartLineUpIcon } from "@phosphor-icons/react/dist/csr/ChartLineUp";
import { GearFineIcon } from "@phosphor-icons/react/dist/csr/GearFine";
import { RocketLaunchIcon } from "@phosphor-icons/react/dist/csr/RocketLaunch";
import { SealCheckIcon } from "@phosphor-icons/react/dist/csr/SealCheck";

const DELIVERABLES = [
  {
    icon: <FactoryIcon size={20} weight="thin" />,
    label: "Engineering systems designed and deployed",
    image: "/poe-1.webp",
  },
  {
    icon: <CompassIcon size={20} weight="thin" />,
    label: "CAD-driven industrial machinery development",
    image: "/poe-2.webp",
  },
  {
    icon: <GraduationCapIcon size={20} weight="thin" />,
    label: "Structured training producing measurable capability",
    image: "/poe-3.webp",
  },
  {
    icon: <ChartLineUpIcon size={20} weight="thin" />,
    label: "Early-stage industrial impact across multiple sectors",
    image: "/poe-4.webp",
  },
];

const METRICS = [
  {
    value: "80+",
    label: "Engineers trained",
    icon: <GraduationCapIcon size={16} weight="thin" />,
  },
  {
    value: "5+",
    label: "Industry solutions delivered",
    icon: <GearFineIcon size={16} weight="thin" />,
  },
  {
    value: "3",
    label: "Startups enabled",
    icon: <RocketLaunchIcon size={16} weight="thin" />,
  },
];

export function Poe({ className }: { className?: string }) {
  return (
    <section
      id="proof-of-execution"
      aria-label="Proof of Execution"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Zone 1 — Header + Stats */}
      <div className="border-b muted-border">
      <div className="flex flex-col items-center gap-8 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground border muted-border rounded-full px-3 py-1">
          <SealCheckIcon size={14} weight="thin" />
          Proof of Execution
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          From Concept to Operational Systems
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Real systems deployed. Real engineers trained. Real industrial
          impact — measured in operating capability, not promises.
        </p>
        <div className="flex justify-center gap-10 md:gap-16 pt-4">
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center gap-1">
              <p className="text-3xl md:text-4xl font-bold text-[#EF7D00] tracking-tight leading-none">
                {metric.value}
              </p>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Zone 2 — Deliverables */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b muted-border">
        {DELIVERABLES.map((item, idx) => (
          <div
            key={item.label}
            className={cn(
              "flex flex-col",
              // mobile: border after every card except last
              idx < 3 && "border-b muted-border",
              // sm (2-col): reset mobile, add right on left-col, bottom on top-row
              idx === 0 && "sm:border-r sm:border-b muted-border",
              idx === 1 && "sm:border-r-0 sm:border-b muted-border",
              idx === 2 && "sm:border-r sm:border-b-0",
              idx === 3 && "sm:border-r-0 sm:border-b-0",
              // lg (4-col): reset sm, right on all but last
              idx < 3 && "lg:border-b-0 lg:border-r muted-border",
              idx === 3 && "lg:border-r-0",
            )}
          >
            <div className="flex flex-col gap-6 p-8 md:p-10">
              <span className="size-9 flex items-center justify-center rounded-full border muted-border bg-background">
                {item.icon}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.label}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border-t muted-border p-4">
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zone 3 — Closing quote */}
      <div className="bg-accent/60 p-10 md:p-16">
        <p className="text-base md:text-lg lg:text-xl font-medium tracking-tight leading-[1.5] max-w-3xl">
          Each system replaces multiple cycles of{" "}
          <span className="text-muted-foreground">failed trial-and-error</span>{" "}
          with a{" "}
          <span className="font-semibold text-foreground">
            controlled engineering pathway
          </span>
          .
        </p>
      </div>
    </section>
  );
}
