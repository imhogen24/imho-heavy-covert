import { cn } from "@/lib/utils";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";

const FOR = [
  "Engineering students who want real capability",
  "Graduates who feel underprepared",
  "Designers who want structure",
  "Builders who want to improve",
];

const NOT_FOR = [
  "Passive learners",
  "Certificate seekers",
  "People avoiding hard work",
];

export function Audience({ className }: { className?: string }) {
  return (
    <section
      aria-label="This Is For Serious Builders"
      className={cn("relative w-full border-t muted-border", className)}
    >
      {/* Header */}
      <div className="border-b muted-border">
        <div className="flex flex-col items-center gap-4 px-6 py-14 md:py-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            This Is For Serious Builders
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            This system is demanding—but it works.
          </p>
        </div>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* This Is For */}
        <div className="border-b lg:border-b-0 lg:border-r muted-border">
          <div className="h-12 flex items-center px-8 md:px-12 border-b muted-border bg-accent/60">
            <span className="text-sm font-medium">This Is For</span>
          </div>
          {FOR.map((item, idx) => (
            <div
              key={item}
              className={cn(
                "flex items-start gap-4 px-8 md:px-12 py-7",
                idx < FOR.length - 1 && "border-b muted-border",
              )}
            >
              <span className="mt-0.5 size-5 shrink-0 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckIcon size={11} weight="bold" />
              </span>
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* This Is NOT For */}
        <div>
          <div className="h-12 flex items-center px-8 md:px-12 border-b muted-border bg-accent/60">
            <span className="text-sm font-medium">This Is NOT For</span>
          </div>
          {NOT_FOR.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 px-8 md:px-12 py-7 border-b muted-border"
            >
              <span className="mt-0.5 size-5 shrink-0 flex items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <XIcon size={11} weight="bold" />
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
