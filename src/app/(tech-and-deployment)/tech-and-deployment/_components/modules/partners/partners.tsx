"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { PARTNER_PROFILES, PRODUCTS } from "../../data";
import type { PartnerProfileId } from "../../data";

const MODES = [
  {
    name: "Co-Develop",
    body: "Shape a technology with us—from problem definition through validation.",
  },
  {
    name: "Prototype",
    body: "Fabricate and test physical prototypes alongside our engineers.",
  },
];

export function Partners({ className }: { className?: string }) {
  const [profile, setProfile] = useState<PartnerProfileId>("fabrication");

  const matches = PRODUCTS.flatMap((p) => {
    const roles = p.lookingFor.filter((l) => l.profile === profile);

    return roles.length ? [{ product: p, roles }] : [];
  });

  return (
    <section
      id="partner"
      aria-label="Partner Profiles and Collaboration Model"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
        {/* Chooser */}
        <div className="flex flex-col gap-8 px-8 py-14 md:px-14 md:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
              Where Do You Fit?
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              Pick the kind of partner you are. We&apos;ll show you where
              you&apos;re needed.
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Partner profile"
            className="flex flex-wrap gap-2"
          >
            {PARTNER_PROFILES.map((p) => (
              <button
                key={p.id}
                type="button"
                role="radio"
                aria-checked={profile === p.id}
                onClick={() => setProfile(p.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  profile === p.id
                    ? "border-[#EF7D00] bg-[#EF7D00] text-white"
                    : "muted-border hover:bg-accent",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4 pt-4">
            <p className="text-xs font-medium text-muted-foreground">
              Ways to work with us
            </p>
            {MODES.map((m) => (
              <div key={m.name} className="flex flex-col gap-1">
                <p className="text-sm font-semibold">{m.name}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Matches */}
        <div className="bg-accent px-8 py-14 md:px-14 md:py-20">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={profile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <p className="text-sm text-muted-foreground">
                <span className="text-4xl font-semibold tabular-nums tracking-tight text-foreground">
                  {matches.length}
                </span>{" "}
                of {PRODUCTS.length} technologies need you
              </p>

              <ul className="flex flex-col">
                {matches.map(({ product, roles }) => (
                  <li
                    key={product.slug}
                    className="flex items-baseline justify-between gap-6 border-b border-foreground/10 py-4 last:border-b-0"
                  >
                    <span className="text-base font-semibold">
                      {product.name}
                    </span>
                    <span className="text-right text-sm text-muted-foreground">
                      {roles.map((r) => r.label).join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
