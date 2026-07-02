import { SectionSeparator } from "@/components/ui/section-separator";
import { Hero } from "./_components/modules/hero/hero";
import { Services } from "./_components/modules/services/services";
import { Advantage } from "./_components/modules/advantage/advantage";
import { Process } from "./_components/modules/process/process";
import { Cta } from "./_components/modules/cta/cta";

export default function RdBusinessImprovementPage() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <Hero />
      <Services />
      <SectionSeparator />
      <Advantage />
      <Process />
      <SectionSeparator />
      <Cta />
    </div>
  );
}
