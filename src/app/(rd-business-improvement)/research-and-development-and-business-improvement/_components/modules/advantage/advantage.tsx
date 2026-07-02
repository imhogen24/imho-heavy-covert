import { cn } from "@/lib/utils";
import { ReceiptIcon } from "@phosphor-icons/react/dist/ssr/Receipt";
import { LockKeyIcon } from "@phosphor-icons/react/dist/ssr/LockKey";
import { FlagIcon } from "@phosphor-icons/react/dist/ssr/Flag";
import type { Icon } from "@phosphor-icons/react";

type Advantage = {
  Icon: Icon;
  title: string;
  body: string;
};

const ADVANTAGES: Advantage[] = [
  {
    Icon: ReceiptIcon,
    title: "Fixed-Fee Engineering",
    body: "Our design, simulation, and drafting phases (Phases 1–6) are billed as a fixed, transparent fee based on technical complexity. No hidden design costs. No scope creep.",
  },
  {
    Icon: LockKeyIcon,
    title: "Locked Fabrication Budgets",
    body: "We do not guess. Before a single piece of steel is cut, the CAD design is legally locked, and an exact Bill of Materials (BOM) is generated. Materials are procured strictly against this locked budget, insulating you from arbitrary shop-floor cost overruns.",
  },
  {
    Icon: FlagIcon,
    title: "Milestone-Based Payments",
    body: "Your capital is protected. Payments are directly tied to tangible, verifiable project milestones—from Design Sign-off to Factory Handover.",
  },
];

export function Advantage({ className }: { className?: string }) {
  return (
    <section
      aria-label="Predictable Capital. Flawless Execution."
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Predictable Capital. Flawless Execution.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            CapEx investments must be mathematically predictable. Our
            rigorous 12-Phase Quality Management System (QMS) protects your
            cash flow while ensuring uninterrupted project momentum.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {ADVANTAGES.map((advantage, idx) => (
          <div
            key={advantage.title}
            className={cn(
              "flex flex-col gap-6 p-8 lg:p-10",
              idx < ADVANTAGES.length - 1 && "border-b md:border-b-0 muted-border",
              idx < ADVANTAGES.length - 1 && "md:border-r",
            )}
          >
            <span className="size-10 flex shrink-0 justify-center items-center rounded-full border muted-border">
              <advantage.Icon size={20} weight="thin" />
            </span>
            <h3 className="text-lg font-semibold leading-snug">
              {advantage.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {advantage.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
