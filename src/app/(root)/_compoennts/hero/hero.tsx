import Grid from "./grid-hero";
import HeroText from "./hero-text";
import Top from "./top";
import { HeroVideoDialogDemo } from "./video";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col  w-full">
      <Top />
      <div className="relative flex flex-row justify-center lg:justify-between border-b muted-border">
        <div className="hidden lg:grid grid-rows-2 w-[200px] border-r muted-border">
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

<Grid />;
{
  /* <div className='relative flex flex-row justify-center lg:justify-between border-b muted-border'>
   <div className='hidden lg:grid grid-rows-2 w-[200px]  border-r muted-border'>
       <div className='aspect-square border-b muted-border'>
               <div className='flex justify-center items-center w-full aspect-square border muted-border rounded-full'>
                 <Image src='/logos/i-dashed.svg' alt="logo" width={30} height={30} />
               </div>
       </div>
       <div>
       <div className='flex justify-center items-center w-full aspect-square border muted-border rounded-full'>
               <Image src='/logos/m-dashed.svg' alt="logo" width={100} height={100} />
           </div>
       </div>
   </div>
   <HeroText />
   <div className='hidden lg:grid grid-rows-2 w-[200px] border-l muted-border'>
        <div className='aspect-square border-b muted-border'>
        <div className='flex justify-center items-center w-full aspect-square border muted-border rounded-full'>
               <Image src='/logos/h-dashed.svg' alt="logo" width={100} height={100} />
               </div>
        </div>
        <div>
        <div className='flex justify-center items-center w-full aspect-square border muted-border rounded-full'>
                 <Image src='/logos/o-dashed.svg' alt="logo" width={100} height={100} />
           </div>
        </div>
   </div>

</div> */
}
