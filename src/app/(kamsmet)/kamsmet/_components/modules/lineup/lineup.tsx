import Image from "next/image";
import Link from "next/link";

import { Grid } from "@/components/ui/grid";
import { cn } from "@/lib/utils";
import { ArrowDownRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowDownRight";
import { TRAILER_MODELS } from "../../data";

export function Lineup({ className }: { className?: string }) {
  return (
    <section
      id="lineup"
      aria-label="The KAMSMET Range"
      className={cn("relative w-full", className)}
    >
      <div className="border-b muted-border px-8 py-10 md:px-14 md:py-12">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          The Range
        </span>
        <h2 className="mt-3 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          Three Bodies. One Chassis.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Every model shares the same triple-axle baseline, so parts, servicing,
          and driver training carry straight across the fleet.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {TRAILER_MODELS.map((model, idx) => (
          <Link
            key={model.id}
            href={`#${model.id}`}
            className={cn(
              "group relative isolate flex flex-col overflow-hidden transition-colors hover:bg-accent/60",
              idx < TRAILER_MODELS.length - 1 &&
                "border-b muted-border lg:border-b-0 lg:border-r",
            )}
          >
            <Grid
              cellSize={40}
              patternOffset={[0, -8]}
              className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            />

            <div className="relative flex items-start justify-between gap-4 p-6 md:p-8">
              <div>
                <span className="font-[family-name:var(--font-machina)] text-sm text-[#B4860B] dark:text-[#FBC526]">
                  {model.index}
                </span>
                <p className="mt-2 text-lg font-bold leading-tight">
                  {model.eyebrow}{" "}
                  <span className="text-muted-foreground">{model.name}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {model.summary}
                </p>
              </div>
              <ArrowDownRightIcon
                size={18}
                weight="thin"
                className="mt-1 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </div>

            <div className="relative mt-auto aspect-[16/8] w-full border-t muted-border p-3">
              <div className="relative h-full w-full">
                <Image
                  src={model.hero.src}
                  alt={model.hero.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 341px"
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
