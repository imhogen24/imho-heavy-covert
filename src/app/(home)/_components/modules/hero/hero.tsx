import HeroText from "./hero-text";
import SmTop from "./top-sm";
import { HeroVideoDialogDemo } from "./video";

const Hero = () => {
  return (
    <section className="flex flex-col  w-full" id="/#">
      <SmTop />
      <div className="relative flex flex-row justify-center lg:justify-between border-b muted-border">
        <div className="hidden lg:grid grid-rows-2 w-[200px] muted-border">
          <div className="flex justify-center items-center w-full h-full rounded-full border muted-border">
            <div className="w-1/2 h-1/2">
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

      <HeroVideoDialogDemo />
    </section>
  );
};

export default Hero;
