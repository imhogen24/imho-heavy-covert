import { cn } from "@/lib/utils";
import { GlobeHemisphereEastIcon } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereEast";
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr/UsersThree";

export function Impact({ className }: { className?: string }) {
  return (
    <section
      aria-label="Impact"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Description */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-3xl mx-auto">
          <p className="text-balance text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Designed for scale across Africa. Improves productivity, enables
            local capability, supports economic systems.
          </p>
        </div>
      </div>

      {/* Image placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b md:border-b-0 md:border-r muted-border p-8 lg:p-14 flex items-center justify-center">
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-dashed muted-border bg-accent/40">
            <div className="flex flex-col items-center gap-2">
              <GlobeHemisphereEastIcon
                size={32}
                weight="thin"
                className="text-muted-foreground/50"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Image Placeholder
              </span>
              <span className="text-xs text-muted-foreground/70">
                Wide usage visual
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-14 flex items-center justify-center">
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-dashed muted-border bg-accent/40">
            <div className="flex flex-col items-center gap-2">
              <UsersThreeIcon
                size={32}
                weight="thin"
                className="text-muted-foreground/50"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Image Placeholder
              </span>
              <span className="text-xs text-muted-foreground/70">
                Wide usage visual
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
