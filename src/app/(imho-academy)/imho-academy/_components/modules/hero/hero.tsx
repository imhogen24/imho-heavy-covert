import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";

const CTAS = [
  { label: "Apply Now", href: "#", icon: GraduationCapIcon, primary: true },
  { label: "Partner With IMHOGEN Academy", href: "#" },
  { label: "Take Capability Assessment", href: "#" },
  { label: "Join the Design Forge Community", href: "#" },
];

const CLARIFICATIONS = [
  "Define real engineering problems",
  "Develop functional engineering solutions",
  "Perform analysis and make design decisions",
  "Model and document designs (CAD)",
  "Prepare designs for manufacturing",
  "Validate performance against requirements",
  "Execute structured engineering workflows",
];

const VISUALS = [
  { label: "CAD Model", image: "/poe-1.webp" },
  { label: "Prototype", image: "/poe-2.webp" },
  { label: "Fabrication", image: "/poe-3.webp" },
  { label: "Field Deployment", image: "/poe-4.webp" },
];

// POE-style cell border logic for a full-width 4-col grid (no outer left/right borders).
function cellBorder(idx: number): string {
  return cn(
    idx < 3 && "border-b muted-border",
    idx === 0 && "sm:border-r sm:border-b muted-border",
    idx === 1 && "sm:border-r-0 sm:border-b muted-border",
    idx === 2 && "sm:border-r sm:border-b-0",
    idx === 3 && "sm:border-r-0 sm:border-b-0",
    idx < 3 && "lg:border-b-0 lg:border-r muted-border",
    idx === 3 && "lg:border-r-0",
  );
}

export function Hero({ className }: { className?: string }) {
  return (
    <section
      aria-label="IMHO GEN Academy Hero"
      className={cn("relative w-full border-b muted-border", className)}
    >
      {/* Row 1 — CTAs as a bordered 4-up grid */}
      <div className="grid grid-cols-1 border-b muted-border sm:grid-cols-2 lg:grid-cols-4">
        {CTAS.map((cta, idx) => (
          <Link
            key={cta.label}
            href={cta.href}
            className={cn(
              "flex items-center justify-center gap-2 px-6 py-5 text-center text-sm font-medium transition-colors",
              cta.primary
                ? "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                : "hover:bg-accent",
              cellBorder(idx),
            )}
          >
            {cta.icon ? <cta.icon size={18} weight="light" /> : null}
            {cta.label}
          </Link>
        ))}
      </div>

      {/* Row 2 — text + clarification list */}
      <div className="grid grid-cols-1 border-b muted-border lg:grid-cols-[3fr_2fr]">
        {/* Text column — left-aligned, matches the site's hero convention */}
        <div className="border-b lg:border-b-0 lg:border-r muted-border p-8 lg:p-14 flex flex-col justify-center gap-5">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground border muted-border rounded-full px-3 py-1 w-fit">
            <GraduationCapIcon size={14} weight="thin" />
            IMHO GEN Academy
          </span>
          <h1 className="text-balance font-[family-name:var(--font-machina)] text-2xl leading-tight md:text-3xl lg:text-4xl max-w-xl">
            Stop Learning Engineering. Start Producing Engineering Design
            Capability.
          </h1>
          <p className="max-w-xl text-pretty text-base text-muted-foreground leading-relaxed md:text-lg">
            A structured engineering capability system that transforms
            students, graduates, engineers, and technical teams into
            capable engineering designers and makers—through real
            projects, measurable performance, industry-standard
            processes, and practical execution.
          </p>
        </div>

        {/* Visual column — clarification list as a spec sheet, not a floating card */}
        <div className="p-8 lg:p-14 flex flex-col justify-center gap-5">
          <p className="text-sm">
            <span className="font-semibold">Engineering Design Capability</span>{" "}
            <span className="text-muted-foreground">means your ability to:</span>
          </p>
          <div className="flex flex-col border-y muted-border">
            {CLARIFICATIONS.map((item, i) => (
              <div
                key={item}
                className={cn(
                  "flex items-baseline gap-4 py-3.5",
                  i < CLARIFICATIONS.length - 1 && "border-b muted-border",
                )}
              >
                <span className="text-xs font-medium tabular-nums text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3 — visual placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {VISUALS.map((item, idx) => (
          <div key={item.label} className={cn("flex flex-col", cellBorder(idx))}>
            <div className="relative aspect-[4/3] w-full overflow-hidden p-4">
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
