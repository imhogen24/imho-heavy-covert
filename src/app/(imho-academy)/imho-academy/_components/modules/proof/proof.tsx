import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

const EVIDENCE_TYPES = [
  "Trial improvement charts",
  "Sample projects",
  "CAD models and outputs",
];

export function Proof({ className }: { className?: string }) {
  return (
    <section
      aria-label="Evidence"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Not Claims. Evidence.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We don&apos;t tell you you&apos;re improving. We show you—with
            data.
          </p>
        </div>
      </div>

      {/* Before / after comparison */}
      <div className="border-b muted-border px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="w-full flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground text-center">
              Before
            </span>
            <div
              aria-hidden
              className="flex min-h-[200px] md:min-h-[240px] items-center justify-center rounded-xl border border-dashed muted-border bg-accent/40"
            >
              <span className="text-sm font-medium text-muted-foreground">
                Trial 1 Output
              </span>
            </div>
          </div>

          <ArrowRightIcon
            size={20}
            weight="bold"
            className="hidden sm:block shrink-0 text-muted-foreground/40 rotate-0"
          />
          <ArrowRightIcon
            size={20}
            weight="bold"
            className="sm:hidden shrink-0 text-muted-foreground/40 rotate-90"
          />

          <div className="w-full flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground text-center">
              After
            </span>
            <div
              aria-hidden
              className="flex min-h-[200px] md:min-h-[240px] items-center justify-center rounded-xl border muted-border bg-accent/60"
            >
              <span className="text-sm font-medium">
                Validated Output
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting evidence types */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-6 py-10 md:py-14">
        {EVIDENCE_TYPES.map((item) => (
          <span
            key={item}
            className="rounded-full border muted-border px-3 py-1 text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
