import { cn } from "@/lib/utils";
import { CapabilityFlow } from "./about-capability-flow";
import { AboutVideo } from "./about-video";

/** Public playback ID of the Mux asset for this section. */
const MUX_PLAYBACK_ID = "i02R5ZN4XfmhLnWRNmOyXLK9PNdgH01wGR1LrO6EOPuuM";

/** That asset's aspect ratio, so the slot reserves its height before the video loads. */
const MUX_ASPECT_RATIO = "16 / 9";

export function About({ className }: { className?: string }) {
  return (
    <section
      id="about"
      aria-label="About IMHO GEN"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Zone 1 + Media — no dividing border between them */}
      <div className="border-b muted-border">
        {/* Centered header */}
        <div className="flex flex-col items-center gap-6 px-6 pt-14 md:pt-20 pb-10 md:pb-14 text-center max-w-3xl mx-auto">
          <h2 className="font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-snug">
            Building the Invisible Infrastructure of Industrialization
          </h2>
          <p className="text-muted-foreground leading-7 text-base md:text-lg">
            Industrial capability is not built through iteration guesswork. It
            is built through structured engineering systems that{" "}
            <span className="text-foreground">reduce failure cost</span> and{" "}
            <span className="text-foreground">compress time-to-market</span>.
          </p>
          <p className="text-muted-foreground leading-7 text-base md:text-lg">
            Africa does not lack resources, talent, or ambition. It lacks
            structured engineering capability systems.{" "}
            <span className="text-foreground">
              IMHO GEN exists to build that system.
            </span>
          </p>
        </div>

        {/* Media */}
        <div className="px-6 md:px-12 lg:px-20 pb-10 md:pb-14">
          <div className="overflow-hidden rounded-xl border muted-border">
            <AboutVideo
              playbackId={MUX_PLAYBACK_ID}
              aspectRatio={MUX_ASPECT_RATIO}
            />
          </div>
        </div>
      </div>

      {/* Zone 3 — capability flow with closing emphasis nested in the empty corner */}
      <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            We operate as an engineering propulsion system that converts:
          </p>
          <CapabilityFlow>
            <div className="flex flex-col gap-1 border-l-2 border-[#EF7D00] pl-4">
              <p className="text-sm font-medium tracking-tight text-muted-foreground/70">
                This is not a project-based model.
              </p>
              <p className="text-base font-semibold tracking-tight leading-snug">
                It is a continuous capability engine.
              </p>
            </div>
          </CapabilityFlow>
        </div>
      </div>
    </section>
  );
}
