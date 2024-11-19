import CommitedTo from "./_compoennts/commited-to";
import { Hero } from "./_compoennts/hero";
import ImpactSection from "./_compoennts/impact";
import Projects from "./_compoennts/projects/projects";
import TheTeam from "./_compoennts/The_team/the-team";

import VideoSection from "./_compoennts/video";
import WorkWithUs from "./_compoennts/work_with_us/work";



export default function Home() {
  return (
    <div className="flex flex-col relative top-[200px] bg-backgorund">

      <Hero/>
      <VideoSection/>
      <ImpactSection/>
      <CommitedTo/>
      <Projects/>
      <WorkWithUs/>
      <TheTeam/>

    </div>
  );
}
