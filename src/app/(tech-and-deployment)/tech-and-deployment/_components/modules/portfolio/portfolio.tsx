"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { PRODUCTS, STAGES } from "../../data";

export function Portfolio({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];

  return (
    <section
      id="portfolio"
      aria-label="Technology Portfolio"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className="flex flex-col gap-4 px-8 pt-14 md:flex-row md:items-end md:justify-between md:px-14 md:pt-20">
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
          What We&apos;re Building
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Seven technologies for the people who keep markets moving. Each one is
          open for partners.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 px-8 py-10 md:px-14 md:py-14 lg:grid-cols-[14rem_1fr] lg:gap-14">
        {/* Product index — a scrolling chip row on mobile, a list from lg */}
        <div
          role="tablist"
          aria-label="Products"
          className="-mx-8 flex gap-2 overflow-x-auto px-8 pb-1 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0"
        >
          {PRODUCTS.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              id={`tab-${p.slug}`}
              aria-selected={i === active}
              aria-controls="product-panel"
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors lg:rounded-lg lg:border-transparent lg:px-3 lg:py-2.5 lg:text-left",
                i === active
                  ? "border-foreground bg-foreground text-background lg:border-transparent lg:bg-accent lg:text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground dark:border-muted lg:border-transparent lg:hover:bg-accent/50 dark:lg:border-transparent",
              )}
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={cn(
                    "hidden size-1.5 rounded-full lg:block",
                    i === active ? "bg-[#EF7D00]" : "bg-transparent",
                  )}
                />
                {p.name}
              </span>
            </button>
          ))}
        </div>

        {/* Detail */}
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={product.slug}
            id="product-panel"
            role="tabpanel"
            aria-labelledby={`tab-${product.slug}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr]"
          >
            <CadViewport name={product.name} render={product.render} />

            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {product.focus}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {product.goals.map((g) => (
                  <li
                    key={g}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium"
                  >
                    {g}
                  </li>
                ))}
              </ul>

              <StageTrack stage={product.stage} />

              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-muted-foreground">
                  Looking for
                </p>
                <p className="text-sm leading-relaxed">
                  {product.lookingFor.map((l) => l.label).join(" · ")}
                </p>
              </div>

              <Link
                href="/services/academy-partnership"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#EF7D00]"
              >
                Partner on {product.name}
                <ArrowRightIcon
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function StageTrack({ stage }: { stage: number }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium text-muted-foreground">
        Stage —{" "}
        <span className="text-foreground">{STAGES[stage]} development</span>
      </p>
      <ol className="flex items-center">
        {STAGES.map((s, i) => (
          <li key={s} className="flex flex-1 items-center last:flex-none">
            <span
              title={s}
              className={cn(
                "size-2.5 shrink-0 rounded-full",
                i < stage && "bg-foreground",
                i === stage && "bg-[#EF7D00] ring-4 ring-[#EF7D00]/20",
                i > stage && "border muted-border",
              )}
            />
            {i < STAGES.length - 1 && (
              <span
                className={cn(
                  "h-px flex-1",
                  i < stage ? "bg-foreground" : "bg-border dark:bg-muted",
                )}
              />
            )}
          </li>
        ))}
      </ol>
      <ol className="flex justify-between text-[11px] text-muted-foreground">
        {STAGES.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </div>
  );
}

function CadViewport({ name, render }: { name: string; render?: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#0f1a24]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      {/* Viewport corner ticks */}
      {[
        "left-4 top-4 border-l border-t",
        "right-4 top-4 border-r border-t",
        "left-4 bottom-4 border-l border-b",
        "right-4 bottom-4 border-r border-b",
      ].map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={cn("absolute size-4 border-white/30", pos)}
        />
      ))}

      {render ? (
        <Image
          src={render}
          alt={`${name} CAD concept render`}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-contain p-6 opacity-90 mix-blend-screen [filter:grayscale(1)_invert(1)_contrast(1.4)_brightness(1.1)]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/50">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
            {name}
          </span>
          <span className="text-xs">CAD render in progress</span>
        </div>
      )}

      <span className="absolute bottom-6 left-7 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        Concept render
      </span>
    </div>
  );
}
