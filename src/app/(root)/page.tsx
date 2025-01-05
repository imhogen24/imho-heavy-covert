import CommitedTo from "./_compoennts/commited-to";
import Hero from "./_compoennts/hero/hero";
import ImpactSection from "./_compoennts/impact"
import Projects from "./_compoennts/projects/projects";

export default function Home() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
        <Hero />
        <ImpactSection/>
        <CommitedTo/>
        <Projects/>
    </div>
  );
}
