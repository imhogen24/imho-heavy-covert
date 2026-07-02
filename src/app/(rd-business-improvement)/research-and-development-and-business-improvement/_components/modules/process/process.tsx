import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "The Intake",
    body: "You define the problem—the raw materials you have and the final product you need.",
  },
  {
    number: "02",
    title: "The Synthesis",
    body: "Our engineers conduct a rigorous Needs Assessment to define the physical, environmental, and human constraints of your site.",
  },
  {
    number: "03",
    title: "The Virtual Build",
    body: "We design and stress-test the machine entirely in 3D CAD, proving its feasibility before any money is spent on fabrication.",
  },
  {
    number: "04",
    title: "The Physical Reality",
    body: "Using heavy-duty fabrication and strict Quality Assurance (QA), we build, test, and commission the machine on your floor.",
  },
];

export function Process({ className }: { className?: string }) {
  return (
    <section
      aria-label="How We Work"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            How We Turn Messy Inputs into Industrial Outputs
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, idx) => (
          <div
            key={step.number}
            className={cn(
              "flex flex-col gap-6 p-8 lg:p-10",
              // mobile: border after every card except last
              idx < 3 && "border-b muted-border",
              // sm (2-col): right on left-col, bottom on top-row
              idx === 0 && "sm:border-r sm:border-b muted-border",
              idx === 1 && "sm:border-r-0 sm:border-b muted-border",
              idx === 2 && "sm:border-r sm:border-b-0",
              idx === 3 && "sm:border-r-0 sm:border-b-0",
              // lg (4-col): right on all but last
              idx < 3 && "lg:border-b-0 lg:border-r muted-border",
              idx === 3 && "lg:border-r-0",
            )}
          >
            <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border text-sm font-semibold tabular-nums text-muted-foreground">
              {step.number}
            </span>
            <h3 className="text-lg font-semibold leading-snug">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
