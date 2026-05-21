import HeroText from "./hero-text";
import SmTop from "./top-sm";
import { WordRotate } from "@/components/ui/word-rotate";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const Hero = () => {
  return (
    <section className="flex flex-col  w-full" id="/#">
      <SmTop />
      <div className="relative flex flex-row justify-center lg:justify-between border-b muted-border">
        <div className="hidden lg:grid grid-rows-2 w-[200px] muted-border border-r">
          <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
            <div className="w-1/2 h-1/2 ">
              <img
                src="/i-dashed.svg"
                alt="Next.js Logo"
                className="w-full h-24 opacity-50 object-contain dark:hidden"
              />
              <img
                src="/i-dashed.svg"
                alt="Next.js Logo"
                className="w-full h-24 opacity-30 object-contain hidden dark:block"
              />
            </div>
          </div>
          <div className="border-t muted-border">
            <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
              <div className="w-1/2 h-1/2">
                <img
                  src="/m-dashed.svg"
                  alt="Next.js Logo"
                  className="w-full h-full opacity-90 object-contain dark:hidden"
                />
                <img
                  src="/m-dashed.svg"
                  alt="Next.js Logo"
                  className="w-full opacity-50  h-full object-contain hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
        <HeroText />
        <div className="hidden lg:grid grid-rows-2 w-[200px] border-l muted-border">
          <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
            <div className="w-1/2 h-1/2">
              <img
                src="/h-dashed.svg"
                alt="Next.js Logo"
                className="w-full h-full opacity-80 object-contain dark:hidden"
              />
              <img
                src="/h-dashed.svg"
                alt="Next.js Logo"
                className="w-full opacity-50 h-full object-contain hidden dark:block"
              />
            </div>
          </div>
          <div className="border-t muted-border">
            <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
              <div className="w-1/2 h-1/2">
                <img
                  src="/o-dashed.svg"
                  alt="Next.js Logo"
                  className="w-full h-full opacity-90 object-contain dark:hidden"
                />
                <img
                  src="/o-dashed.svg"
                  alt="Next.js Logo"
                  className="w-full h-full opacity-50 object-contain hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
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
