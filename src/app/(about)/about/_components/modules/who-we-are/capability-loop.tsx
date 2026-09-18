"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const STAGES = [
  {
    label: "Industry",
    body: "Real problems from manufacturers, enterprises, and institutions.",
  },
  {
    label: "R&D",
    body: "Engineering design and research turn those problems into working solutions.",
  },
  {
    label: "Capability",
    body: "People and teams are trained on the work, so the know-how stays local.",
  },
  {
    label: "Deployment",
    body: "Solutions and technologies are put to work in the field—feeding industry again.",
  },
];

// Geometry in a 400×400 viewBox; nodes sit on the diagonals so the pills
// clear the centre readout horizontally.
const C = 200;

const R = 150;

const GAP = 24; // degrees left clear around each node pill

const ANGLES = [-135, -45, 45, 135];

function point(deg: number) {
  const rad = (deg * Math.PI) / 180;

  return { x: C + R * Math.cos(rad), y: C + R * Math.sin(rad) };
}

function arc(fromDeg: number) {
  const a = point(fromDeg + GAP);
  const b = point(fromDeg + 90 - GAP);

  return `M ${a.x} ${a.y} A ${R} ${R} 0 0 1 ${b.x} ${b.y}`;
}

const INTERVAL = 3200;

export function CapabilityLoop({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setActive((i) => (i + 1) % STAGES.length),
      INTERVAL,
    );

    return () => window.clearInterval(id);
  }, [paused]);

  const current = STAGES[active];

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[480px]",
        className,
      )}
      onMouseLeave={() => setPaused(false)}
    >
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 size-full text-muted-foreground/40"
        fill="none"
        aria-hidden
      >
        <defs>
          {[
            ["loop-arrow", "currentColor"],
            ["loop-arrow-active", "#EF7D00"],
          ].map(([id, color]) => (
            <marker
              key={id}
              id={id}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path
                d="M2,2 L8,5 L2,8"
                fill="none"
                stroke={color}
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          ))}
        </defs>

        {ANGLES.map((deg, i) => (
          <path
            key={deg}
            d={arc(deg)}
            stroke={i === active ? "#EF7D00" : "currentColor"}
            strokeWidth={i === active ? 2 : 1}
            markerEnd={
              i === active ? "url(#loop-arrow-active)" : "url(#loop-arrow)"
            }
            className="transition-[stroke,stroke-width] duration-500"
          />
        ))}
      </svg>

      {/* Stage nodes */}
      {STAGES.map((stage, i) => {
        const p = point(ANGLES[i]);
        const isActive = i === active;

        return (
          <button
            key={stage.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => {
              setActive(i);
              setPaused(true);
            }}
            onMouseEnter={() => {
              setActive(i);
              setPaused(true);
            }}
            onFocus={() => {
              setActive(i);
              setPaused(true);
            }}
            style={{ left: `${p.x / 4}%`, top: `${p.y / 4}%` }}
            className={cn(
              "absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-colors duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF7D00]/50",
              isActive
                ? "border-[#EF7D00] bg-[#EF7D00] text-white"
                : "muted-border bg-background hover:bg-accent",
            )}
          >
            <span
              className={cn(
                "text-[10px] tabular-nums",
                isActive ? "text-white/70" : "text-muted-foreground/60",
              )}
            >
              0{i + 1}
            </span>
            {stage.label}
          </button>
        );
      })}

      {/* Centre readout */}
      <div
        aria-live={paused ? "polite" : "off"}
        className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground"
        >
          {current.body}
        </motion.p>
      </div>
    </div>
  );
}
