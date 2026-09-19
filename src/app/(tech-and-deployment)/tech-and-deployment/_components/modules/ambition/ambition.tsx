import Link from "next/link";

import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

const ACTIONS = [
  { label: "Partner With Us", href: "/services/academy-partnership" },
  { label: "Explore a Solution", href: "#portfolio" },
  { label: "Discuss a Pilot", href: "/services/custom-engineering" },
];

export function Ambition({ className }: { className?: string }) {
  return (
    <section
      aria-label="The Bigger Ambition"
      className={cn(
        "relative w-full border-t muted-border bg-background",
        className,
      )}
    >
      <div className="relative grid grid-cols-1 gap-12 px-8 py-16 md:px-14 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl lg:text-6xl">
            We Are Committed to Building{" "}
            <span className="text-[#EF7D00]">What Africa Needs Next.</span>
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            African engineering must design, adapt, make, and deploy
            technologies of its own.
          </p>
        </div>

        <nav aria-label="Next steps" className="flex flex-col">
          {ACTIONS.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="group flex items-center justify-between border-t muted-border py-4 text-lg font-semibold transition-colors last:border-b hover:text-[#EF7D00]"
            >
              {a.label}
              <ArrowUpRightIcon
                size={22}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
