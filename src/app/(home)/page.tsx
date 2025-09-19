import CommitedTo from "./_components/modules/commited/commited-to";

import ImpactSection from "./_components/modules/impact/impact";
import Projects from "./_components/modules/projects/projects";
import WorkWithUs from "./_components/modules/work/work";
import TheTeam from "./_components/modules/team/the-team";
import Hero from "./_components/modules/hero/hero";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Home() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <ScrollProgress className="top-[72px]" />
      <Hero />
      <ImpactSection />
      <CommitedTo />
      <Projects />
      <WorkWithUs />
      <TheTeam />
    </div>
  );
}
