import Link from "next/link";

import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CapabilityLoop } from "./capability-loop";

const PRACTICE_AREAS = [
  {
    title: "Engineering Design & R&D",
    body: "Products, processes, and equipment designed, analysed, and validated for real operating conditions.",
    href: "/research-and-development-and-business-improvement",
  },
  {
    title: "IMHO Academy",
    body: "Structured learning that turns students, graduates, and teams into capable engineering designers.",
    href: "/imho-academy",
  },
  {
    title: "Technology & Industrial Deployment",
    body: "Putting engineered solutions and technologies to work inside enterprises and institutions.",
    href: "/technologies-and-industrial-support",
  },
];

export function WhoWeAre({ className }: { className?: string }) {
  return (
    <section
      id="who-we-are"
      aria-label="Who We Are"
      className={cn("relative w-full", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            02 — Who We Are
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance">
            Strengthening People, Enterprises, and Institutions
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
        {/* Core loop */}
        <div className="flex flex-col gap-6 border-b lg:border-b-0 lg:border-r muted-border px-6 py-12 md:p-14">
          <p className="text-sm font-semibold">The core loop</p>
          <CapabilityLoop />
        </div>

        {/* Practice areas */}
        <div className="flex flex-col">
          <p className="px-8 pt-12 pb-6 md:px-14 md:pt-14 text-sm font-semibold">
            Practice areas
          </p>
          <div className="flex flex-1 flex-col border-t muted-border">
            {PRACTICE_AREAS.map((area, i) => (
              <Link
                key={area.title}
                href={area.href}
                className={cn(
                  "group flex flex-1 items-start gap-5 px-8 py-8 md:px-14 transition-colors hover:bg-accent",
                  i < PRACTICE_AREAS.length - 1 && "border-b muted-border",
                )}
              >
                <span className="pt-1 text-xs font-medium tabular-nums text-muted-foreground/50">
                  0{i + 1}
                </span>
                <span className="flex flex-1 flex-col gap-2">
                  <span className="text-base md:text-lg font-semibold leading-snug">
                    {area.title}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {area.body}
                  </span>
                </span>
                <ArrowUpRightIcon
                  size={18}
                  className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#EF7D00]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
