import { CheckIcon } from "lucide-react";

/**
 * Green check badge for form success screens. The concentric rings keep it
 * reading as a status mark rather than a stray icon.
 */
export function SuccessBadge() {
  return (
    <div
      aria-hidden
      className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20"
    >
      <div className="flex size-11 items-center justify-center rounded-full bg-emerald-500/15">
        <CheckIcon
          strokeWidth={2.5}
          className="size-6 text-emerald-600 dark:text-emerald-400"
        />
      </div>
    </div>
  );
}

/**
 * Numbered steps on the site's cell grid, following the Proof of Execution
 * layout (`modules/proof-of-execution/poe.tsx`) with the step number standing in
 * for that section's icon. Two per row.
 *
 * Edges come from the container's top/left plus each cell's right/bottom, so the
 * grid stays closed at any column count without per-index border logic.
 *
 * `SpecList` renders the same data as stacked rows and is still used for the
 * in-form spec blocks, so this stays separate.
 */
export function StepGrid({ items }: { items: string[] }) {
  return (
    <div className="grid w-full grid-cols-1 border-t border-l muted-border text-left sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex flex-col gap-6 border-r border-b muted-border p-8 md:p-10"
        >
          <span className="size-9 flex items-center justify-center rounded-full border muted-border bg-background text-xs font-medium tabular-nums text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
