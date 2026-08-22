import Link from "next/link";

import { cn } from "@/lib/utils";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";

export function Cta({ className }: { className?: string }) {
  return (
    <section
      aria-label="Ready to Build Real Engineering Design Capability?"
      className={cn(
        "relative w-full border-t muted-border bg-accent/60",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-6 px-6 py-20 md:py-28 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Ready to Build Real Engineering Design Capability?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          If you&apos;re serious about becoming a capable engineering
          designer, a problem solver, and a builder—then this is for you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <Link
            href="/services/imho-gen-academy"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white text-secondary hover:bg-black/95 dark:hover:bg-white/85 transition-colors text-sm font-medium p-[14px] h-[42px] md:h-[48px]"
          >
            <GraduationCapIcon size={20} weight="light" />
            Apply Now
          </Link>
          <Link
            href="/services/capability-assessment"
            className="inline-flex items-center justify-center gap-2 rounded-md border muted-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium p-[14px] h-[42px] md:h-[48px]"
          >
            Take Capability Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
