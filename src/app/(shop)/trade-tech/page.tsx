import { ScrollProgress } from "@/components/magicui/scroll-progress";
import AboutSection from "./_components/modules/about/about";
import BenefitsSection from "./_components/modules/benefits/benefits";
import BuyersKitSection from "./_components/modules/buyers-kit/buyers-kit";
import EmpathySection from "./_components/modules/empathy/empathy";
import Hero from "./_components/modules/hero/hero";
import ProblemSection from "./_components/modules/problem/problem";
import PositioningSection from "./_components/modules/positioning/positioning";
import ResultsSection from "./_components/modules/results/results";

export default function TradeTechPage() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <ScrollProgress className="top-[72px]" />
      <Hero />
      <ProblemSection />
      <BenefitsSection />
      <EmpathySection />
      <PositioningSection />
      <ResultsSection />
      <BuyersKitSection />
      <AboutSection />
    </div>
  );
}
