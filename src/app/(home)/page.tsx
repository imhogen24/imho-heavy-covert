import CommitedTo from "./_compoennts/modules/commited/commited-to";

import ImpactSection from "./_compoennts/modules/impact/impact";
import Projects from "./_compoennts/modules/projects/projects";
import WorkWithUs from "./_compoennts/modules/work/work";
import TheTeam from "./_compoennts/modules/team/the-team";
import Hero from "./_compoennts/modules/hero/hero";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { TradeTech } from "./_compoennts/modules/trade-tech/trade-tech";

export default function Home() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <ScrollProgress className="top-[72px]" />
      <Hero />
      <ImpactSection />
      <CommitedTo />
      <Projects />
      <TradeTech />
      <WorkWithUs />
      <TheTeam />
    </div>
  );
}
