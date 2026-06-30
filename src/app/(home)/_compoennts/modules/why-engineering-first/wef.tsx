import { cn } from "@/lib/utils";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

const REALITY = [
  "Reverse engineering from images ignores system constraints",
  "Trial-and-error multiplies cost through rework and delays",
  "Unstructured builds produce non-functional systems",
];

const APPROACH = [
  "Defined system architecture before fabrication",
  "Controlled material and process selection",
  "Build-ready outputs that reduce iteration cycles",
];

export function Wef({ className }: { className?: string }) {
  return (
    <section
      aria-label="Why Engineering First"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Why Engineering First.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The cost of avoiding engineering is paid in failure.
          </p>
        </div>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Reality */}
        <div className="border-b lg:border-b-0 lg:border-r muted-border">
          <div className="h-12 flex items-center px-8 md:px-12 border-b muted-border bg-accent/60">
            <span className="text-sm font-medium">Reality</span>
          </div>
          {REALITY.map((item, idx) => (
            <div
              key={item}
              className={cn(
                "flex items-start gap-4 px-8 md:px-12 py-7",
                idx < REALITY.length - 1 && "border-b muted-border",
              )}
            >
              <span className="mt-0.5 size-5 shrink-0 flex items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <XIcon size={11} weight="bold" />
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* IMHO GEN Approach */}
        <div>
          <div className="h-12 flex items-center px-8 md:px-12 border-b muted-border bg-accent/60">
            <span className="text-sm font-medium">Our Approach</span>
          </div>
          {APPROACH.map((item, idx) => (
            <div
              key={item}
              className={cn(
                "flex items-start gap-4 px-8 md:px-12 py-7",
                idx < APPROACH.length - 1 && "border-b muted-border",
              )}
            >
              <span className="mt-0.5 size-5 shrink-0 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckIcon size={11} weight="bold" />
              </span>
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
