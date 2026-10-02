import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FactoryIcon } from "@phosphor-icons/react/dist/ssr/Factory";

export function Hero({ className }: { className?: string }) {
  return (
    <section
      aria-label="Technologies and Industrial Support Hero"
      className={cn("relative w-full", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-6 px-6 py-16 md:py-24 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground border muted-border rounded-full px-3 py-1">
            <FactoryIcon size={14} weight="thin" />
            Technologies &amp; Industrial Support
          </span>
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Engineered Products for Real Industry Problems.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            IMHOGEN designs and deploys purpose-built technologies improving
            productivity, safety, and efficiency across industries. From
            engineering design to usable tools.
          </p>
          <Button asChild variant="primary" size="standard" className="w-fit">
            <Link href="#">Explore Our Technologies</Link>
          </Button>
        </div>
      </div>

      {/* Hero image */}
      <div className="p-6 md:p-10 border-b muted-border">
        <div className="relative flex aspect-[16/7] w-full items-center justify-center overflow-hidden rounded-xl border border-dashed muted-border bg-accent/40">
          <div
            aria-hidden
            className="absolute h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,_#FEB667_0%,_#EF7D00_45%,_transparent_72%)] opacity-10 blur-[80px] dark:opacity-25"
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <FactoryIcon
              size={40}
              weight="thin"
              className="text-muted-foreground/50"
            />
            <span className="text-sm font-medium text-muted-foreground">
              Hero Image
            </span>
            <span className="text-xs text-muted-foreground/70">
              Deployed technology in the field
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
