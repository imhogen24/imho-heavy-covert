"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Drag to compare the CAD view of a design with the finished object.
 * The CAD side is the same render pushed through a blueprint treatment;
 * swap `fieldSrc` for a real field photo once one exists.
 */
export function CadFieldSlider({
  cadSrc,
  fieldSrc,
  alt,
  fit = "contain",
  sizes = "(max-width: 1100px) 100vw, 1000px",
  className,
}: {
  cadSrc: string;
  fieldSrc: string;
  alt: string;
  /** "cover" crops to the subject — use when the render has wide margins. */
  fit?: "contain" | "cover";
  sizes?: string;
  className?: string;
}) {
  const fitClass = fit === "cover" ? "object-cover" : "object-contain";

  const [pos, setPos] = useState(50);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border muted-border",
        className,
      )}
    >
      {/* Field — full colour, underneath */}
      <div className="absolute inset-0 bg-white">
        <Image
          src={fieldSrc}
          alt={alt}
          fill
          priority
          sizes={sizes}
          className={fitClass}
        />
      </div>

      {/* CAD — blueprint treatment, clipped to the left of the handle */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[#0f1a24]"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <Image
          src={cadSrc}
          alt=""
          fill
          sizes={sizes}
          className={cn(
            fitClass,
            "opacity-90 mix-blend-screen [filter:grayscale(1)_invert(1)_contrast(1.4)_brightness(1.1)]",
          )}
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur">
        CAD
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur">
        Field
      </span>

      {/* Handle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-px bg-[#EF7D00]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EF7D00] text-white shadow-lg">
          <svg viewBox="0 0 16 16" className="size-4" fill="none">
            <path
              d="M6 4 2 8l4 4M10 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* Native range input drives it — keyboard and touch come for free */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare CAD model and field view"
        className="absolute inset-0 size-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
