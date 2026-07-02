import { cn } from "@/lib/utils";

const STAGES = [
  "Problem Definition",
  "Requirement Analysis and Solution Architecture",
  "Concept Development",
  "Engineering Design & CAD",
  "Design & Make",
  "Validation",
];

export function Program({ className }: { className?: string }) {
  return (
    <section
      aria-label="Program Structure"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Header column — narrower */}
        <div className="border-b lg:border-b-0 lg:border-r muted-border p-8 lg:p-14 flex items-start">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Your Capability Development Journey
          </h2>
        </div>

        {/* Stages column — wider, sequential list */}
        <div className="flex flex-col">
          {STAGES.map((stage, idx) => {
            const isLast = idx === STAGES.length - 1;
            return (
              <div
                key={stage}
                className={cn(
                  "flex items-center gap-5 px-8 py-6 lg:px-10",
                  !isLast && "border-b muted-border",
                )}
              >
                <span className="text-xs font-semibold tabular-nums text-muted-foreground/50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base font-medium leading-snug">
                  {stage}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
