import { cn } from "@/lib/utils";

const STATEMENTS = [
  {
    label: "Vision",
    text: "To become Africa's leading engineering design and R&D hub.",
  },
  {
    label: "Mission",
    text: "To bridge the gap between engineering education and industry.",
  },
];

const SIMPLE_TERMS = [
  { verb: "design", object: "solutions" },
  { verb: "build", object: "capability" },
  { verb: "strengthen", object: "industry" },
];

export function VisionMission({ className }: { className?: string }) {
  return (
    <section
      id="vision-mission"
      aria-label="Vision and Mission"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {STATEMENTS.map((s) => (
        <div
          key={s.label}
          className="grid grid-cols-1 gap-3 px-8 py-10 md:grid-cols-[10rem_1fr] md:gap-10 md:px-14 md:py-14 border-b muted-border"
        >
          <h2 className="pt-2 text-sm font-semibold text-muted-foreground">
            {s.label}
          </h2>
          <p className="max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl lg:text-4xl">
            {s.text}
          </p>
        </div>
      ))}

      {/* In simple terms */}
      <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] md:gap-10 px-8 md:px-14 pt-10 md:pt-14">
        <h3 className="pt-2 text-sm font-semibold text-muted-foreground">
          In simple terms
        </h3>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 mt-6">
        {SIMPLE_TERMS.map((t, i) => (
          <li
            key={t.verb}
            className={cn(
              "px-8 py-10 md:px-14 md:py-14 border-t muted-border",
              i < SIMPLE_TERMS.length - 1 && "sm:border-r",
            )}
          >
            <p className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
              We <span className="text-[#EF7D00]">{t.verb}</span>
              <br />
              {t.object}.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
