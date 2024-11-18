import { Hero } from "./_compoennts/hero";
import ImpactSection from "./_compoennts/impact";

import VideoSection from "./_compoennts/video";



export default function Home() {
  return (
    <div className="flex flex-col relative top-[200px]">

      <Hero/>
      <VideoSection/>
      <ImpactSection/>

    </div>
  );
}
