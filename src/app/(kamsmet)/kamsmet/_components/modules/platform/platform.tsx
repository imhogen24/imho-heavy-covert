import Image from "next/image";

import { cn } from "@/lib/utils";
import { PLATFORM_GROUPS } from "../../data";

export function Platform({ className }: { className?: string }) {
  return (
    <section
      id="platform"
      aria-label="Platform Engineering"
      className={cn("relative w-full scroll-mt-24", className)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {PLATFORM_GROUPS.map((group, idx) => (
          <div
            key={group.title}
            className={cn(
              "flex flex-col",
              idx === 0 && "border-b muted-border lg:border-b-0 lg:border-r",
            )}
          >
            {/* Untinted and full-bleed: the feathered cutout blends straight
                into the page, so a panel would only re-draw the edge. A shared
                aspect box rather than intrinsic height, so the rule beneath
                each render lands at the same y in both columns. */}
            <div className="relative aspect-[16/9] w-full pt-8 md:pt-10">
              <div className="relative h-full w-full">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 544px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-5 border-t muted-border p-8 lg:p-12">
              <h2 className="text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                {group.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {group.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-[#FBC526]"
                    />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {feature.label}{" "}
                      </span>
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
