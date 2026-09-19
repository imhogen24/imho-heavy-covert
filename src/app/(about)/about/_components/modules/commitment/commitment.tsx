import Link from "next/link";

import { cn } from "@/lib/utils";

const VIDEO_SRC =
  "https://res.cloudinary.com/dstrel8mi/video/upload/v1737337135/lv_0_20241008153156_p4rdyp.mp4";

const POSTER_SRC =
  "https://res.cloudinary.com/dstrel8mi/image/upload/v1741607975/Hero_Video_Thumbnail--dark_t5a0ib.webp";

export function Commitment({ className }: { className?: string }) {
  return (
    <section
      id="commitment"
      aria-label="The Commitment"
      className={cn(
        "relative isolate w-full overflow-hidden border-t muted-border bg-black text-white",
        className,
      )}
    >
      {/* Video backdrop — decorative, hidden for reduced-motion users */}
      <video
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover opacity-50 motion-reduce:hidden"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/30"
      />

      <div className="flex min-h-[560px] md:min-h-[640px] flex-col justify-end gap-8 px-8 py-16 md:px-14 md:py-20">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
          06 — The Commitment
        </span>
        <h2 className="max-w-4xl text-balance text-3xl font-bold uppercase leading-[1.02] tracking-[-0.03em] md:text-5xl lg:text-6xl">
          We are committed to building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7D00] to-[#FEB667]">
            what Africa needs next.
          </span>
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
          Africa&apos;s industrial future will be built by increasing our
          capacity to understand, design, make, adapt and improve—as a
          generational responsibility.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/services/custom-engineering"
            className="inline-flex items-center justify-center rounded-md bg-white text-black hover:bg-white/85 transition-colors text-sm font-medium p-[14px] h-[42px] md:h-[48px]"
          >
            Start a Project
          </Link>
          <Link
            href="/services/academy-partnership"
            className="inline-flex items-center justify-center rounded-md border border-white/25 hover:bg-white/10 transition-colors text-sm font-medium p-[14px] h-[42px] md:h-[48px]"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
