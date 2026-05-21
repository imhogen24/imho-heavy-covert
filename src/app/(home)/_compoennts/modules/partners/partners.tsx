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
import { AnimatedList } from "@/components/ui/animated-list";

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

function chunkLogos(
  logos: MarqueeProps[],
  size: number,
): (MarqueeProps | null)[][] {
  const pages: (MarqueeProps | null)[][] = [];
  for (let i = 0; i < logos.length; i += size) {
    const slice: (MarqueeProps | null)[] = logos.slice(i, i + size);
    while (slice.length < size) slice.push(null);
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
  const pageKey = currentPage
    .map((p, i) => (p ? String(p.id) : `empty-${i}`))
    .join("-");

  return (
    <section
      aria-label="Organizations we collaborate with"
      className={cn("relative w-full", className)}
    >
      <div className="relative isolate w-full overflow-hidden border-t muted-border h-[18rem] sm:h-[12rem] md:h-[7rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pageKey}
            variants={setVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              transformOrigin: "center center",
              willChange: "transform, opacity",
            }}
            className={cn(
              "grid h-full w-full",
              "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
              "-mr-px -mb-px",
            )}
          >
            {currentPage.map((mark, idx) => (
              <div
                key={mark ? `${mark.id}-${phase}` : `empty-${phase}-${idx}`}
                className="relative flex h-full min-w-0 items-center justify-center overflow-hidden border-r border-b muted-border p-3 sm:p-5"
              >
                {mark ? <PartnerLogoCell item={mark} /> : null}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 border-r muted-border  p-[32px] lg:p-[64px] space-y-5">
          <h2 className="scroll-m-20 my-auto font-semibold tracking-tight text-2xl">
            Trusted in Real Engineering Environments
          </h2>
          <p className="text-muted-foreground leading-7 [&:not(:first-child)]">
            IMHO GEN collaborates with industrial operators, research
            institutions, and emerging enterprises to solve real production
            problems and deploy working systems.
          </p>
        </div>
        <div className="min-h-96 bg-accent relative overflow-hidden  p-[32px] lg:p-[64px]">
          <h2 className="text-muted-foreground leading-7 [&:not(:first-child)] text-center">
            All engagements are executed within defined budgets, timelines, and
            engineering controls.
          </h2>
          <Globe className="top-28 lg:top-48" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <div className="relative overflow-hidden h-[400px] col-span-1 border-l space-y-5 muted-border px-[32px] py-[64px]">
          <div className="w-20 h-fit p-2 ring-4 ring-accent rounded-full border muted-border flex justify-center items-center">
            <AnchorSimpleIcon size={28} weight="light" />
          </div>
          <h2 className="scroll-m-20 my-auto font-semibold tracking-tight text-2xl">
            Evidence Anchors
          </h2>
          <div className="h-44 w-full overflow-hidden">
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Industrial systems engineered and deployed",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Institutional collaborations (research + applied engineering)",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Early-stage industrial transformations validated in practice",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden z-10",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-muted-foreground leading-7 [&:not(:first-child)] text-sm text-wrap">
              {name}
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
