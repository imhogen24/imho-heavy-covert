import { cn } from "@/lib/utils";
import { CubeIcon } from "@phosphor-icons/react/dist/ssr/Cube";

export function Framing({ className }: { className?: string }) {
  return (
    <section
      aria-label="Framing"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Not all problems require full factory systems.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            This division translates engineering capability into deployable
            products, tools, and systems built for durability and scale.
          </p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="p-6 md:p-10">
        <div className="relative flex aspect-[16/7] w-full items-center justify-center overflow-hidden rounded-xl border border-dashed muted-border bg-accent/40">
          <div
            aria-hidden
            className="absolute h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,_#FEB667_0%,_#EF7D00_45%,_transparent_72%)] opacity-10 blur-[80px] dark:opacity-25"
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <CubeIcon
              size={40}
              weight="thin"
              className="text-muted-foreground/50"
            />
            <span className="text-sm font-medium text-muted-foreground">
              Image Placeholder
            </span>
            <span className="text-xs text-muted-foreground/70">
              Product ecosystem visual
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
