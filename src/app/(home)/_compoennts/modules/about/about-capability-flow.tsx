"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const STAGES = [
  "Industrial problems",
  "Design intelligence",
  "Structured capability",
  "Industrial systems",
  "Measurable productivity",
];

// Per-step horizontal offset (staircase). Mobile stacks full-width.
const OFFSET = [
  "sm:ml-0",
  "sm:ml-[18%]",
  "sm:ml-[36%]",
  "sm:ml-[54%]",
  "sm:ml-[72%]",
];

type Pt = { x: number; y: number };

// Build an orthogonal (right-angle) path with rounded corners through waypoints.
function orthPath(points: Pt[], r = 12): string {
  if (points.length < 2) return "";
  const dist = (a: Pt, b: Pt) => Math.hypot(b.x - a.x, b.y - a.y);
  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const len1 = dist(p0, p1) || 1;
    const len2 = dist(p1, p2) || 1;
    const rr = Math.min(r, len1 / 2, len2 / 2);

    const a = {
      x: p1.x - ((p1.x - p0.x) / len1) * rr,
      y: p1.y - ((p1.y - p0.y) / len1) * rr,
    };

    const b = {
      x: p1.x + ((p2.x - p1.x) / len2) * rr,
      y: p1.y + ((p2.y - p1.y) / len2) * rr,
    };

    d += ` L ${a.x} ${a.y} Q ${p1.x} ${p1.y} ${b.x} ${b.y}`;
  }

  const last = points[points.length - 1];
  d += ` L ${last.x} ${last.y}`;

  return d;
}

export function CapabilityFlow({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;

      if (!container) return;
      const c = container.getBoundingClientRect();
      setDims({ width: c.width, height: c.height });

      const next: string[] = [];

      for (let i = 0; i < boxRefs.current.length - 1; i++) {
        const aEl = boxRefs.current[i];
        const bEl = boxRefs.current[i + 1];

        if (!aEl || !bEl) continue;
        const a = aEl.getBoundingClientRect();
        const b = bEl.getBoundingClientRect();

        const aLeft = a.left - c.left;
        const aTop = a.top - c.top;
        const aRight = aLeft + a.width;
        const aMidY = aTop + a.height / 2;
        const aBottomX = aLeft + a.width / 2;
        const aBottom = aTop + a.height;
        const bLeft = b.left - c.left;
        const bTop = b.top - c.top;
        const bTopX = bLeft + b.width / 2;

        const staircase = bLeft - aLeft > a.width * 0.25;

        const pts: Pt[] = staircase
          ? [
              { x: aRight, y: aMidY },
              { x: bTopX, y: aMidY },
              { x: bTopX, y: bTop - 2 },
            ]
          : [
              { x: aBottomX, y: aBottom },
              { x: aBottomX, y: (aBottom + bTop) / 2 },
              { x: bTopX, y: (aBottom + bTop) / 2 },
              { x: bTopX, y: bTop - 2 },
            ];

        next.push(orthPath(pts));
      }

      setPaths(next);
    };

    compute();
    const ro = new ResizeObserver(compute);

    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex w-full flex-col gap-5", className)}
    >
      <svg
        className="pointer-events-none absolute inset-0 text-muted-foreground/50"
        width={dims.width}
        height={dims.height}
        viewBox={`0 0 ${dims.width} ${dims.height}`}
        fill="none"
      >
        <defs>
          <marker
            id="cf-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path
              d="M2,2 L8,5 L2,8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth="0.75"
            markerEnd="url(#cf-arrow)"
          />
        ))}
      </svg>

      {STAGES.map((stage, i) => (
        <div
          key={stage}
          ref={(el) => {
            boxRefs.current[i] = el;
          }}
          className={cn(
            "relative z-10 flex min-h-[60px] w-full items-center rounded-2xl border muted-border bg-background px-5 py-4 sm:w-[28%]",
            OFFSET[i],
          )}
        >
          <span className="flex items-center gap-3">
            <span className="text-xs font-medium tabular-nums text-muted-foreground/50">
              0{i + 1}
            </span>
            <span className="text-sm font-medium leading-snug">{stage}</span>
          </span>
        </div>
      ))}

      {children && (
        <div className="z-10 mt-6 sm:mt-0 sm:absolute sm:bottom-0 sm:left-0 sm:max-w-[40%]">
          {children}
        </div>
      )}
    </div>
  );
}
