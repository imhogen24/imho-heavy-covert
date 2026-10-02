import Image from "next/image";

import { Grid } from "@/components/ui/grid";
import { cn } from "@/lib/utils";
import { TruckTrailerIcon } from "@phosphor-icons/react/dist/ssr/TruckTrailer";

export function Hero({ className }: { className?: string }) {
  return (
    <section
      aria-label="KAMSMET Heavy-Duty Trailers"
      className={cn("relative w-full", className)}
    >
      {/* Zone 1 — Title block */}
      <div className="relative isolate overflow-hidden border-b muted-border">
        <Grid cellSize={56} patternOffset={[0, -12]} className="opacity-60" />
        <div className="relative flex flex-col gap-6 px-6 py-14 md:px-10 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border muted-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <TruckTrailerIcon size={14} weight="thin" />
              Partner Manufacturer
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-machina)] text-5xl uppercase leading-[0.9] tracking-[0.08em] sm:text-6xl md:text-7xl lg:text-8xl">
            Kamsmet
          </h1>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            <h2 className="text-balance text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              Standardized{" "}
              <span className="text-[#B4860B] dark:text-[#FBC526]">
                Heavy-Duty
              </span>{" "}
              Transport Solutions
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Built for the toughest roads. Engineered for maximum payload.
              KAMSMET delivers world-class, standardized trailers built with
              local grit and international standards to keep your fleet moving.
            </p>
          </div>
        </div>
      </div>

      {/* Zone 2 — Hero render.
          No panel tint: the render is a feathered cutout, so it spans the full
          cell width and its studio floor dissolves into the page background
          rather than ending on a visible edge. Intrinsic width and height
          render it at its own aspect ratio — no letterboxing, nothing
          stretched. Only the top is padded, to keep the headboard off the
          border it would otherwise touch; the floor already fades out well
          above the bottom rule. */}
      <div className="relative isolate overflow-hidden border-b muted-border pt-8 md:pt-12">
        <Image
          src="/kamsmet/flatbed-hero.webp"
          alt="KAMSMET standard flatbed trailer with raised front headboard"
          width={1600}
          height={828}
          priority
          sizes="(max-width: 1088px) 100vw, 1088px"
          className="relative h-auto w-full"
        />
      </div>
    </section>
  );
}
