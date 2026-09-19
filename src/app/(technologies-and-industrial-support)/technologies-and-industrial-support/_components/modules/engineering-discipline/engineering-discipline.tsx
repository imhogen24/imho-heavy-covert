import { cn } from "@/lib/utils";
import { PencilRulerIcon } from "@phosphor-icons/react/dist/ssr/PencilRuler";
import { WaveformIcon } from "@phosphor-icons/react/dist/ssr/Waveform";
import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import type { Icon } from "@phosphor-icons/react";

type Discipline = {
  Icon: Icon;
  label: string;
};

const DISCIPLINES: Discipline[] = [
  { Icon: PencilRulerIcon, label: "CAD" },
  { Icon: WaveformIcon, label: "Simulation" },
  { Icon: ShieldCheckIcon, label: "QMS" },
  { Icon: CheckCircleIcon, label: "Validation" },
];

const CELL_BORDER = [
  "border-r border-b muted-border lg:border-b-0",
  "border-b muted-border lg:border-b-0 lg:border-r",
  "border-r muted-border",
  "",
];

export function EngineeringDiscipline({ className }: { className?: string }) {
  return (
    <section
      aria-label="Engineering Discipline"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Engineering Discipline
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            CAD, simulation, QMS, and validation systems ensure reliability and
            repeatability across all products.
          </p>
        </div>
      </div>

      {/* Image placeholders */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {DISCIPLINES.map((item, idx) => (
          <div key={item.label} className={cn("p-6 lg:p-8", CELL_BORDER[idx])}>
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-dashed muted-border bg-accent/40">
              <div className="flex flex-col items-center gap-2">
                <item.Icon
                  size={28}
                  weight="thin"
                  className="text-muted-foreground/50"
                />
                <span className="text-xs font-medium text-muted-foreground">
                  Image Placeholder
                </span>
                <span className="text-[11px] text-muted-foreground/70">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
