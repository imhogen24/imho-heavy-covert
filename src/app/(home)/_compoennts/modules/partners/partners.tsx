"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

import { cn } from "@/lib/utils";

import { MARQUEE } from "@/lib/constants";
import type { MarqueeProps } from "@/lib/types";
import { Globe } from "@/components/ui/globe";

import { AnchorSimpleIcon } from "@phosphor-icons/react/dist/csr/AnchorSimple";

const LOGOS_PER_PAGE = 6;
/** How long each set stays fully visible before swapping. */
const ROTATE_MS = 5_500;
/** Exit (recede into screen). Ease-in gives it "attack" as it leaves. */
const EXIT_DURATION_S = 0.55;
/** Enter (emerge out of screen). Ease-out-expo for punchy then-smooth settle. */
const ENTER_DURATION_S = 0.75;

const evidenceAnchors = [
  "Industrial systems engineered and deployed",
  "Institutional collaborations (research + applied engineering)",
  "Early-stage industrial transformations validated in practice",
];

function chunkLogos(logos: MarqueeProps[], size: number): MarqueeProps[][] {
  if (logos.length === 0) return [];

  const pages: MarqueeProps[][] = [];
  for (let i = 0; i < logos.length; i += size) {
    const slice = logos.slice(i, i + size);
    const fill = slice[0] ?? logos[0];
    while (slice.length < size) slice.push(fill);
    pages.push(slice);
  }
  return pages;
}

function PartnerLogoCell({ item }: { item: MarqueeProps }) {
  const w = Math.round(item.ImageWidth ?? 120);
  const h = Math.round(item.ImageHeight ?? 48);

  return (
    <Image
      src={item.image}
      alt=""
      width={w}
      height={h}
      role="presentation"
      className="h-auto max-h-10 w-auto max-w-full object-contain dark:invert sm:max-h-12"
    />
  );
}

export default function Partners({
  logos = MARQUEE,
  logosPerPage = LOGOS_PER_PAGE,
  rotateMs = ROTATE_MS,
  className,
}: {
  logos?: MarqueeProps[];
  logosPerPage?: number;
  rotateMs?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const pages = useMemo(
    () => chunkLogos(logos, logosPerPage),
    [logos, logosPerPage],
  );
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (pages.length <= 1) return;
    const timer = window.setInterval(() => {
      setPhase((p) => (p + 1) % pages.length);
    }, rotateMs);
    return () => window.clearInterval(timer);
  }, [pages.length, rotateMs]);

  const setVariants: Variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        // Mirror of exit: the new set starts at the same recessed point the
        // previous one disappeared into, then grows forward to natural size.
        initial: { opacity: 0, scale: 0.82 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: ENTER_DURATION_S,
            // ease-out-expo: punchy attack, smooth settle
            ease: [0.16, 1, 0.3, 1],
          },
        },
        // Outgoing set recedes into the screen — shrinks and fades.
        exit: {
          opacity: 0,
          scale: 0.82,
          transition: {
            duration: EXIT_DURATION_S,
            // ease-in: gentle start, accelerates as it disappears
            ease: [0.55, 0, 1, 0.45],
          },
        },
      };

  const currentPage = pages[phase] ?? [];

  return (
    <section
      aria-label="Organizations we collaborate with"
      className={cn("relative w-full", className)}
    >
      <div className="relative isolate w-full overflow-hidden border-t muted-border h-[18rem] sm:h-[12rem] md:h-[7rem]">
        <div
          className={cn(
            "grid h-full w-full",
            "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
            "-mr-px -mb-px",
          )}
        >
          {currentPage.map((mark, idx) => (
            <div
              key={`cell-${idx}`}
              className="relative flex h-full min-w-0 items-center justify-center overflow-hidden border-r border-b muted-border p-3 sm:p-5"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${mark.id}-${phase}-${idx}`}
                  variants={setVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{
                    transformOrigin: "center center",
                    willChange: "transform, opacity",
                  }}
                  className="flex items-center justify-center"
                >
                  <PartnerLogoCell item={mark} />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col items-center gap-6 border-b muted-border p-[32px] text-center lg:items-start lg:gap-8 lg:border-b-0 lg:border-r lg:p-[64px] lg:text-left">
          <h2 className="scroll-m-20 font-semibold tracking-tight text-2xl">
            Trusted in Real Engineering Environments
          </h2>
          <p className="max-w-prose text-muted-foreground leading-7">
            IMHO GEN collaborates with industrial operators, research
            institutions, and emerging enterprises to solve real production
            problems and deploy working systems.
          </p>
        </div>
        <div className="min-h-96 border-b bg-accent relative overflow-hidden p-[32px] muted-border lg:border-b-0 lg:p-[64px]">
          <h2 className="relative z-10 mx-auto max-w-[16rem] text-center text-base leading-relaxed text-muted-foreground sm:max-w-xs md:max-w-md md:text-lg lg:max-w-xl lg:text-xl">
            All engagements are executed within defined budgets, timelines, and
            engineering controls.
          </h2>
          <Globe className="top-28 lg:top-48" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <div className="relative col-span-1 flex flex-col gap-5 px-[32px] py-[64px] lg:border-l muted-border">
          <div className="flex h-fit w-20 justify-center items-center rounded-full border p-2 ring-4 ring-accent muted-border">
            <AnchorSimpleIcon size={28} weight="light" />
          </div>
          <h2 className="scroll-m-20 font-semibold tracking-tight text-2xl">
            Evidence Anchors
          </h2>
          <ul className="max-w-prose list-disc space-y-2 pl-5 leading-7 text-muted-foreground marker:text-muted-foreground">
            {evidenceAnchors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
