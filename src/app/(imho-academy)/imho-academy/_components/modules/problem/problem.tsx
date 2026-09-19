import { cn } from "@/lib/utils";

const RESULT = [
  "Cannot structure engineering problems",
  "Jump into CAD without design logic",
  "Struggle to connect design to manufacturing",
  "Have no measurable proof of capability",
];

export function Problem({ className }: { className?: string }) {
  return (
    <section
      aria-label="Why Most Graduates Lack Design Capability"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header + causal context */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-5 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Why Most Engineering Graduates Lack Engineering Design Capability
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Most training systems focus on theory without application, tools
            without process, and assignments without real validation.
          </p>
        </div>
      </div>

      {/* The result — the actual deficiencies, as parallel items */}
      <div className="border-b muted-border">
        <div className="h-12 flex items-center justify-center border-b muted-border">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            As a Result, Many Graduates
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {RESULT.map((item, idx) => (
            <div
              key={item}
              className={cn(
                "flex flex-col gap-4 p-8 lg:p-10",
                idx < 3 && "border-b muted-border",
                idx === 0 && "sm:border-r sm:border-b muted-border",
                idx === 1 && "sm:border-r-0 sm:border-b muted-border",
                idx === 2 && "sm:border-r sm:border-b-0",
                idx === 3 && "sm:border-r-0 sm:border-b-0",
                idx < 3 && "lg:border-b-0 lg:border-r muted-border",
                idx === 3 && "lg:border-r-0",
              )}
            >
              <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border text-sm font-semibold tabular-nums text-muted-foreground">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Close */}
      <div className="flex flex-col items-center gap-1 px-6 py-12 md:py-16 text-center">
        <p className="text-base md:text-lg font-medium tracking-tight">
          <span className="text-muted-foreground">
            They have knowledge—but not
          </span>{" "}
          <span className="text-foreground">
            engineering design capability.
          </span>
        </p>
      </div>
    </section>
  );
}
