import HeroText from './hero/hero-text';
import TopSection from './top';
import { HeroVideoDialogDemo } from './video';

const Hero = () => {


  return (
    <section className="flex flex-col min-h-screen w-full">
        <TopSection />
         <div className='relative flex flex-row justify-center lg:justify-between min-h-[400px] border-b muted-border'>
            <div className='hidden lg:grid grid-rows-2 w-[200px]  border-r muted-border'>
                <div className='aspect-square border-b muted-border'>

                </div>
                <div>

                </div>
            </div>
            <HeroText />
            <div className='hidden lg:grid grid-rows-2 w-[200px] border-l muted-border'>
                 <div className='aspect-square border-b muted-border'>

                 </div>
                 <div>

                 </div>
            </div>

         </div>

         <HeroVideoDialogDemo/>
    </section>
  );
};

export default Hero;
