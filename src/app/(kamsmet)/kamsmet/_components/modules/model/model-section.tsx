import Image from "next/image";

import { cn } from "@/lib/utils";
import { renderSize, type TrailerModel } from "../../data";

/**
 * Which interior rules a wrapped grid cell owns, so a short final row never
 * leaves a rule dangling into empty space.
 */
function cellRules(idx: number, total: number, cols: number) {
  const isLastInRow = (idx + 1) % cols === 0;
  const isLastRow = idx >= total - (total % cols || cols);
  return {
    right: !isLastInRow && idx !== total - 1,
    bottom: !isLastRow,
  };
}

/**
 * One brochure spread per trailer model: title block, hero render, prose, and
 * the feature list, followed by a strip of alternate views. `reversed` flips
 * the title/render columns so consecutive models alternate down the page.
 */
export function ModelSection({
  model,
  reversed = false,
  isLast = false,
  className,
}: {
  model: TrailerModel;
  reversed?: boolean;
  /** The last model closes without a rule — a SectionSeparator follows it. */
  isLast?: boolean;
  className?: string;
}) {
  return (
    <section
      id={model.id}
      aria-label={`${model.eyebrow} ${model.name}`}
      className={cn("relative w-full scroll-mt-24", className)}
    >
      {/* Zone 1 — Title + hero render */}
      <div className="grid grid-cols-1 border-b muted-border lg:grid-cols-2">
        <div
          className={cn(
            "flex flex-col justify-center gap-4 p-8 lg:p-14",
            reversed && "lg:order-2 lg:border-l muted-border",
          )}
        >
          <span className="font-[family-name:var(--font-machina)] text-sm text-[#B4860B] dark:text-[#FBC526]">
            {model.index}
          </span>
          <h2 className="font-[family-name:var(--font-machina)] text-3xl uppercase leading-[0.95] tracking-[0.02em] md:text-4xl lg:text-5xl">
            {model.eyebrow}
            <br />
            {model.name}
          </h2>
          <p className="text-lg font-medium text-[#B4860B] md:text-xl dark:text-[#FBC526]">
            {model.tagline}
          </p>
        </div>

        {/* No panel tint and no side padding: the render is a feathered cutout,
            so it spans the full cell and its studio floor dissolves into the
            page rather than ending on a visible edge. Intrinsic dimensions let
            it fill at its own aspect ratio. */}
        <div
          className={cn(
            "relative flex items-center border-t muted-border pt-8 md:pt-10 lg:border-t-0",
            reversed ? "lg:order-1" : "lg:border-l",
          )}
        >
          <Image
            src={model.hero.src}
            alt={model.hero.alt}
            {...renderSize(model.hero.src)}
            sizes="(max-width: 1024px) 100vw, 544px"
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Zone 2 — Prose + features */}
      <div className="grid grid-cols-1 border-b muted-border lg:grid-cols-2">
        <div className="p-8 lg:p-14">
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {model.description}
          </p>
        </div>

        <ul className="flex flex-col justify-center gap-5 border-t muted-border p-8 lg:border-l lg:border-t-0 lg:p-14">
          {model.features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-[#FBC526]"
              />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.label && (
                  <span className="font-semibold text-foreground">
                    {feature.label}{" "}
                  </span>
                )}
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Zone 3 — Alternate views */}
      <div
        className={cn(
          "grid grid-cols-2",
          model.views.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4",
          // Closes the spread against the next model. The final model leaves it
          // off so the following SectionSeparator's own rule isn't doubled.
          !isLast && "border-b muted-border",
        )}
      >
        {model.views.map((view, idx) => {
          // Two columns while wrapped, one row from `sm` up.
          const mobile = cellRules(idx, model.views.length, 2);
          const isLast = idx === model.views.length - 1;
          return (
            <div
              key={view.src}
              className={cn(
                // 4:3 rather than square: closer to the renders' own proportions,
                // so they sit larger in the cell while the grid stays uniform.
                "relative aspect-[4/3] p-3",
                mobile.right && "border-r muted-border",
                mobile.bottom && "border-b muted-border",
                "sm:border-b-0",
                isLast ? "sm:border-r-0" : "sm:border-r muted-border",
              )}
            >
              <div className="relative h-full w-full">
                <Image
                  src={view.src}
                  alt={view.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 272px"
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
