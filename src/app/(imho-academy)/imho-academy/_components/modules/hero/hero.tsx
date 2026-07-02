import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";

const CLARIFICATIONS = [
  "Define real engineering problems",
  "Develop functional solutions",
  "Perform analysis and make design decisions",
  "Model and document designs (CAD)",
  "Prepare designs for manufacturing",
  "Validate performance against requirements",
];

export function Hero({ className }: { className?: string }) {
  return (
    <section
      aria-label="IMHO GEN Academy Hero"
      className={cn("relative w-full border-b muted-border", className)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
        {/* Text column — centered */}
        <div className="border-b lg:border-b-0 lg:border-r muted-border p-8 lg:p-14 flex flex-col items-center justify-center text-center gap-8">
          <div className="flex flex-col items-center gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground border muted-border rounded-full px-3 py-1">
              <GraduationCapIcon size={14} weight="thin" />
              IMHO GEN Academy
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
              Stop Learning Engineering. Start Producing Engineering Design
              Capability.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              A structured system that transforms you into a capable
              engineering designer and maker—through real projects,
              measurable performance, and industry-standard processes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="primary" size="standard" className="w-fit">
              <Link href="#">
                <GraduationCapIcon size={20} weight="light" />
                Apply Now
              </Link>
            </Button>
            <Button
              asChild
              variant="primary-outline"
              size="standard"
              className="w-fit"
            >
              <Link href="#">Take Capability Assessment</Link>
            </Button>
          </div>
        </div>

        {/* Visual column — clarification list, then CAD + prototype below */}
        <div className="p-8 lg:p-14 flex flex-col gap-6">
          <div className="rounded-lg border muted-border bg-accent/20 p-5 flex flex-col gap-4">
            <p className="text-sm">
              <span className="font-semibold">Engineering Design Capability</span>{" "}
              <span className="text-muted-foreground">means your ability to:</span>
            </p>
            <div className="flex flex-col gap-2.5">
              {CLARIFICATIONS.map((item) => (
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

          <div
            aria-hidden
            className="flex min-h-[200px] md:min-h-[240px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed muted-border bg-accent/40"
          >
            <span className="text-sm font-medium text-muted-foreground">
              CAD Model
            </span>
          </div>
          <div
            aria-hidden
            className="flex min-h-[200px] md:min-h-[240px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed muted-border bg-accent/40"
          >
            <span className="text-sm font-medium text-muted-foreground">
              Prototype
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
