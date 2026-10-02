import { cn } from "@/lib/utils";
import { GearSixIcon } from "@phosphor-icons/react/dist/ssr/GearSix";

export function IndustrialEquipment({ className }: { className?: string }) {
  return (
    <section
      aria-label="Industrial Equipment"
      className={cn("relative w-full", className)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start">
        {/* Description */}
        <div className="p-8 lg:p-14 flex flex-col justify-center gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Industrial Equipment
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Engineered tools and machines improving throughput, reducing
            inefficiencies, enabling manufacturing capability.
          </p>
        </div>

        {/* Image placeholder */}
        <div className="border-t lg:border-l muted-border p-8 lg:p-14 flex items-center justify-center">
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-dashed muted-border bg-accent/40">
            <div
              aria-hidden
              className="absolute h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,_#FEB667_0%,_#EF7D00_45%,_transparent_72%)] opacity-10 blur-[80px] dark:opacity-25"
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <GearSixIcon
                size={40}
                weight="thin"
                className="text-muted-foreground/50"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Image Placeholder
              </span>
              <span className="text-xs text-muted-foreground/70">
                Machine in workshop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
