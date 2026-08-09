import { cn } from "@/lib/utils";
import { FlaskIcon } from "@phosphor-icons/react/dist/ssr/Flask";
import { RocketLaunchIcon } from "@phosphor-icons/react/dist/ssr/RocketLaunch";

export function RdPipeline({ className }: { className?: string }) {
  return (
    <section
      aria-label="R&D Pipeline"
      className={cn("relative w-full border-t muted-border overflow-hidden", className)}
    >
      {/* Header — left-aligned, large */}
      <div className="px-6 pt-14 md:px-14 md:pt-20 flex flex-col items-start gap-5">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground border muted-border rounded-full px-3 py-1">
          <FlaskIcon size={14} weight="thin" />
          R&amp;D Pipeline
        </span>
        <p className="text-balance text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
          Products under development, prototypes, pilot systems. Structured
          pipeline from concept to validation to market.
        </p>
      </div>

      {/* Stacked image placeholders — no separator, back panel fades into the page */}
      <div className="relative h-[360px] md:h-[460px] w-full mt-10 md:mt-14">
        {/* Back placeholder — borderless, fades out at the bottom */}
        <div
          className="absolute left-6 top-0 h-[92%] w-[58%] md:left-14 md:w-[48%] rounded-t-xl bg-accent/50 [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
        >
          <div className="flex flex-col items-start gap-2 p-6">
            <FlaskIcon
              size={28}
              weight="thin"
              className="text-muted-foreground/50"
            />
            <span className="text-xs font-medium text-muted-foreground/60">
              Concept &amp; Prototype
            </span>
          </div>
        </div>

        {/* Front placeholder — bordered, elevated, overlaps the back panel */}
        <div className="absolute left-[42%] top-[33%] z-10 h-[72%] w-[46%] md:left-[38%] md:top-[33%] md:h-[75%] md:w-[36%] rounded-xl border muted-border bg-background shadow-xl shadow-black/10 dark:shadow-black/40">
          <div className="flex h-full flex-col items-start justify-center gap-2 p-6">
            <RocketLaunchIcon
              size={28}
              weight="thin"
              className="text-muted-foreground/70"
            />
            <span className="text-xs font-medium text-muted-foreground">
              Pilot System
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
