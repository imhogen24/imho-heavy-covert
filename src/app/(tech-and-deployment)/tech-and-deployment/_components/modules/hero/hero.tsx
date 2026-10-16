import { cn } from "@/lib/utils";
import { StorefrontIcon } from "@phosphor-icons/react/dist/ssr/Storefront";
import { CadFieldSlider } from "./cad-field-slider";

const JOURNEY = ["Design", "Prototype", "Field testing", "Deployment"];

// Source renders are ~800×487 with the garment ~480px tall, so the frame is
// capped near native size — any larger and the image visibly softens.
const FRAME_WIDTH = 380;

export function Hero({ className }: { className?: string }) {
  return (
    <section
      aria-label="Technology & Industrial Deployment"
      className={cn(
        "relative grid w-full grid-cols-1 items-center gap-12 px-8 py-16 md:px-14 md:py-24 lg:grid-cols-[1fr_auto] lg:gap-20",
        className,
      )}
    >
      <div className="flex flex-col gap-8">
        {/* Division eyebrow, matching the pill the other division pages lead
            with so the three read as one set. */}
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border muted-border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <StorefrontIcon size={14} weight="thin" />
            Technology &amp; Industrial Deployment
          </span>
          <h1 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] md:text-4xl lg:text-5xl">
            Turning Local Problems into Engineered Solutions
          </h1>
        </div>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Across Africa, millions work with tools not designed for their
          realities. We develop practical technologies around real problems
          faced by SMEs, informal-sector operators, and underserved productive
          communities.
        </p>

        <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          {JOURNEY.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span
                className={cn(
                  i === JOURNEY.length - 1
                    ? "font-medium text-[#EF7D00]"
                    : "text-foreground",
                )}
              >
                {step}
              </span>
              {i < JOURNEY.length - 1 && (
                <span aria-hidden className="text-muted-foreground/50">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>

      <figure
        className="mx-auto flex w-full flex-col gap-3 lg:mx-0"
        style={{ maxWidth: FRAME_WIDTH }}
      >
        <CadFieldSlider
          cadSrc="/trade-tech/Mwiaa_Gear2.5.png"
          fieldSrc="/trade-tech/Mwiaa_Gear2.5.png"
          alt="Trading Gear vest render"
          fit="cover"
          sizes={`${FRAME_WIDTH}px`}
          className="aspect-[4/5]"
        />
        <figcaption className="text-xs text-muted-foreground">
          Drag to compare — Trading Gear, CAD to finished form.
        </figcaption>
      </figure>
    </section>
  );
}
