"use client";

import type { ComponentPropsWithoutRef } from "react";

import { RATING_SCALE } from "@/lib/schemas/capability-assessment/z";
import { cn } from "@/lib/utils";

const LOW = RATING_SCALE[0];
const HIGH = RATING_SCALE[RATING_SCALE.length - 1];

/** Word for a score, e.g. 4 -> "Strong". Empty until a choice is made. */
export const ratingMeaning = (value?: number) =>
  RATING_SCALE.find((item) => item.score === value)?.meaning ?? "";

/**
 * One-line key for the 1–5 scale.
 *
 * This replaces the boxed five-column guide: that box was the heaviest element
 * in the section despite being pure reference, and its numbers sat too far from
 * the buttons they described to be read together. The meaning of whichever
 * score you pick is echoed next to each question instead, so the key only has
 * to cover the scores you have not chosen yet.
 */
export function RatingLegend({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>
      {RATING_SCALE.map((item, i) => (
        <span key={item.score}>
          {i > 0 && <span aria-hidden className="mx-1.5 opacity-40">·</span>}
          <span className="tabular-nums font-medium text-foreground/70">
            {item.score}
          </span>{" "}
          {item.meaning}
        </span>
      ))}
    </p>
  );
}

type RatingScaleProps = {
  label: string;
  value?: number;
  onChange: (score: number) => void;
} & Omit<ComponentPropsWithoutRef<"div">, "onChange">;

/**
 * Connected 1–5 segmented control.
 *
 * Rendered as one bordered track rather than five detached buttons so it reads
 * as a single low-to-high scale.
 *
 * Corners are set explicitly: the site's `--radius` is 2.5rem, so `rounded-md`
 * resolves to 38px here and would round this back into pills.
 */
export function RatingScale({
  label,
  value,
  onChange,
  className,
  ...props
}: RatingScaleProps) {
  // Arrow keys walk the scale, which a group of plain buttons did not support.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;
    if (!step) return;

    event.preventDefault();
    // The handler is bound to the track itself, so `currentTarget` is it. A ref
    // would be clobbered here: `FormControl` renders a Slot, whose `ref` arrives
    // in `props` and would win over one set on this element.
    const track = event.currentTarget;
    const next = Math.min(
      HIGH.score,
      Math.max(LOW.score, (value ?? LOW.score - step) + step),
    );
    onChange(next);
    track.querySelector<HTMLButtonElement>(`[data-score="${next}"]`)?.focus();
  };

  return (
    <div
      {...props}
      role="radiogroup"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex overflow-hidden rounded-[6px] border muted-border",
        className,
      )}
    >
      {RATING_SCALE.map((item, i) => {
        const selected = value === item.score;
        return (
          <button
            key={item.score}
            type="button"
            role="radio"
            data-score={item.score}
            aria-checked={selected}
            aria-label={`${item.score} — ${item.meaning}`}
            // Roving tabindex: one stop for the whole group, landing on the
            // current choice, or on the first score when nothing is set.
            tabIndex={selected || (!value && item.score === LOW.score) ? 0 : -1}
            onClick={() => onChange(item.score)}
            className={cn(
              "h-10 flex-1 text-sm font-medium tabular-nums transition-colors",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset",
              i > 0 && "border-l muted-border",
              selected
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-muted-foreground hover:bg-accent hover:text-foreground",
            )}
          >
            {item.score}
          </button>
        );
      })}
    </div>
  );
}
