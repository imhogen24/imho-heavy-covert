import Hero from "./_compoennts/modules/hero/hero";
import Partners from "./_compoennts/modules/partners/partners";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Wef } from "./_compoennts/modules/why-engineering-first/wef";
import { Services } from "./_compoennts/modules/services/services";
import { About } from "./_compoennts/modules/about/about";
import { Poe } from "./_compoennts/modules/proof-of-execution/poe";
import { Em } from "./_compoennts/modules/Egagement-models/em";
import { Ep } from "./_compoennts/modules/entry-pathways/ep";

export default function Home() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <ScrollProgress className="top-18" />
      <Hero />
      <Partners />
      <Services />
      <About />
      <Wef />
      <Poe />
      <Em />
      <Ep />
    </div>
  );
}
