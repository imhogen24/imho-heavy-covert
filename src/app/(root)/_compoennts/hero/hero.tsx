import Grid from './grid-hero';
import HeroText from './hero-text';
import TopSection from './top';
import { HeroVideoDialogDemo } from './video';
import Image from 'next/image';

const Hero = () => {


  return (
    <section className="flex flex-col  w-full">
        <TopSection/>
 <div className='relative flex flex-row justify-center lg:justify-between border-b muted-border'>
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

</div>

         <HeroVideoDialogDemo/>
    </section>
  );
};

export default Hero;

<Grid/>
{/* <div className='relative flex flex-row justify-center lg:justify-between border-b muted-border'>
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

</div> */}
