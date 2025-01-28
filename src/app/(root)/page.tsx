import CommitedTo from "./_compoennts/commited-to";
import Hero from "./_compoennts/hero/hero";
import ImpactSection from "./_compoennts/impact";
import Projects from "./_compoennts/projects/projects";
import WorkWithUs from "./_compoennts/work_with_us/work";
import TheTeam from "./_compoennts/the_team/the-team";

export default function Home() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <Hero />
      <ImpactSection />
      <CommitedTo />
      <Projects />
      <WorkWithUs />
      <TheTeam />
    </div>
  );
}
