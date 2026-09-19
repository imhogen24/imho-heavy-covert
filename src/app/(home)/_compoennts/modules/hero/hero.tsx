"use client";

import HeroText from "./hero-text";
import HeroImage from "./hero-image";
import SmTop from "./top-sm";
import { WordRotate } from "@/components/ui/word-rotate";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const Hero = () => {
  return (
    <section className="flex flex-col  w-full" id="/#">
      <SmTop />
      <div className="relative grid grid-cols-1 border-b muted-border md:grid-cols-2">
        <HeroText />
        <HeroImage />
      </div>

      <div className="relative flex min-h-24 w-full items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl px-6 text-center text-muted-foreground">
          <WordRotate
            words={[
              "Not activity. Engineered systems that produce output.",
              "Projects begin with a funded diagnostic. No speculative builds.",
            ]}
            className="text-xl"
          />
        </div>
        <FlickeringGrid
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 size-full opacity-[0.35] dark:opacity-[0.28]"
          maskGradient="linear-gradient(180deg, rgb(0 0 0 / 1) 0%, rgb(0 0 0 / 0.42) 38%, rgb(0 0 0 / 0) 88%)"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>
    </section>
  );
};

export default Hero;
