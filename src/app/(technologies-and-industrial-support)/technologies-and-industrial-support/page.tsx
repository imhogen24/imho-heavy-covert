import { SectionSeparator } from "@/components/ui/section-separator";
import { Hero } from "./_components/modules/hero/hero";
import { Framing } from "./_components/modules/framing/framing";
import { PortfolioIntro } from "./_components/modules/portfolio-intro/portfolio-intro";
import { TradeTechnologies } from "./_components/modules/trade-technologies/trade-technologies";
import { IndustrialEquipment } from "./_components/modules/industrial-equipment/industrial-equipment";
import { RdPipeline } from "./_components/modules/rd-pipeline/rd-pipeline";
import { EngineeringDiscipline } from "./_components/modules/engineering-discipline/engineering-discipline";
import { Impact } from "./_components/modules/impact/impact";

export default function TechnologiesAndIndustrialSupportPage() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <Hero />
      <SectionSeparator />
      <Framing />
      <PortfolioIntro />
      <TradeTechnologies />
      <IndustrialEquipment />
      <SectionSeparator />
      <RdPipeline />
      <EngineeringDiscipline />
      <Impact />
    </div>
  );
}
