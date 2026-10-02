import { cn } from "@/lib/utils";
import { SquaresFourIcon } from "@phosphor-icons/react/dist/ssr/SquaresFour";
import { FactoryIcon } from "@phosphor-icons/react/dist/ssr/Factory";
import type { Icon } from "@phosphor-icons/react";

function Pill({
  icon: PillIcon,
  children,
}: {
  icon: Icon;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border muted-border bg-accent px-3 py-0.5 align-middle">
      <PillIcon size={18} weight="bold" className="shrink-0" />
      {children}
    </span>
  );
}

export function PortfolioIntro({ className }: { className?: string }) {
  return (
    <section
      aria-label="Portfolio Intro"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start">
        {/* Description */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-2 text-pretty text-base md:text-2xl leading-relaxed max-w-lg">
            <span>Structured technology</span>
            <Pill icon={SquaresFourIcon}>Portfolio</Pill>
            <span>, grouped by</span>
            <Pill icon={FactoryIcon}>Industry</Pill>
            <span>application, not random products.</span>
          </p>
        </div>

        {/* Image placeholder */}
        <div className="lg:border-l muted-border p-8 lg:p-14 flex items-center justify-center">
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-dashed muted-border bg-accent/40">
            <div
              aria-hidden
              className="absolute h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,_#FEB667_0%,_#EF7D00_45%,_transparent_72%)] opacity-10 blur-[80px] dark:opacity-25"
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <SquaresFourIcon
                size={40}
                weight="thin"
                className="text-muted-foreground/50"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Image Placeholder
              </span>
              <span className="text-xs text-muted-foreground/70">
                Portfolio overview visual
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
