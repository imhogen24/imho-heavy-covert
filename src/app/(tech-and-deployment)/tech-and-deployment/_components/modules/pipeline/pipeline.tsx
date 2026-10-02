import { cn } from "@/lib/utils";
import { PRODUCTS, STAGES } from "../../data";

const NODES = [
  "Real Problem",
  "R&D",
  "Concept",
  "Prototype",
  "Test",
  "Validate",
  "Deploy",
  "Scale",
  "Industrial Impact",
];

// Portfolio items at CAD stage sit at "Concept" on this pipeline.
const PORTFOLIO_NODE = NODES.indexOf("Concept");

const LOOP_FROM = NODES.indexOf("Validate");

const LOOP_TO = NODES.indexOf("R&D");

const centre = (i: number) => `${((i + 0.5) / NODES.length) * 100}%`;

export function Pipeline({ className }: { className?: string }) {
  const atCad = PRODUCTS.filter((p) => STAGES[p.stage] === "CAD").length;

  return (
    <section
      id="pipeline"
      aria-label="Technology Pipeline"
      className={cn(
        "relative w-full border-t muted-border bg-accent/40",
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-6 px-8 pt-14 md:px-14 md:pt-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
          The Technology Pipeline
        </h2>
        <p className="max-w-md self-end text-sm leading-relaxed text-muted-foreground md:text-base">
          Not every concept follows the same path.{" "}
          <span className="text-foreground">
            Evidence and validation determine what happens next.
          </span>
        </p>
      </div>

      {/* Schema — scrolls sideways on small screens rather than shrinking */}
      <div className="overflow-x-auto px-8 pt-20 pb-14 md:px-14 md:pb-20">
        <div className="relative min-w-[820px]">
          {/* "You are here" marker for the current portfolio */}
          <div
            className="absolute -top-14 flex -translate-x-1/2 flex-col items-center gap-1"
            style={{ left: centre(PORTFOLIO_NODE) }}
          >
            <span className="whitespace-nowrap rounded-full bg-[#EF7D00] px-2.5 py-1 text-[11px] font-semibold text-white">
              {atCad} concepts here
            </span>
            <span aria-hidden className="h-4 w-px bg-[#EF7D00]" />
          </div>

          {/* Spine */}
          <span
            aria-hidden
            className="absolute top-[7px] h-px bg-foreground/25"
            style={{ left: centre(0), right: centre(0) }}
          />

          <ol
            className="relative grid"
            style={{ gridTemplateColumns: `repeat(${NODES.length}, 1fr)` }}
          >
            {NODES.map((n, i) => {
              const isEnd = i === NODES.length - 1;
              const isHere = i === PORTFOLIO_NODE;

              return (
                <li
                  key={n}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <span
                    className={cn(
                      "size-[15px] rounded-full border-2 bg-background",
                      isEnd
                        ? "border-[#EF7D00] bg-[#EF7D00]"
                        : isHere
                          ? "border-[#EF7D00]"
                          : "border-foreground/40",
                    )}
                  />
                  <span
                    className={cn(
                      "px-1 text-xs font-medium leading-snug md:text-sm",
                      isEnd && "font-semibold text-[#EF7D00]",
                    )}
                  >
                    {n}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Feedback loop — validation can send a concept back to R&D */}
          <div
            aria-hidden
            className="relative mt-4 h-10 rounded-b-xl border-x border-b border-dashed border-foreground/30"
            style={{
              marginLeft: centre(LOOP_TO),
              width: `calc(${centre(LOOP_FROM)} - ${centre(LOOP_TO)})`,
            }}
          >
            <span className="absolute -left-[5px] -top-1.5 size-0 border-x-[5px] border-b-[7px] border-x-transparent border-b-foreground/50" />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] text-muted-foreground">
              If the evidence says so, back to R&amp;D
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
