import { SectionSeparator } from "@/components/ui/section-separator";
import { Hero } from "./_components/modules/hero/hero";
import { Problem } from "./_components/modules/problem/problem";
import { Solution } from "./_components/modules/solution/solution";
import { Differentiation } from "./_components/modules/differentiation/differentiation";
import { Process } from "./_components/modules/process/process";
import { Outcomes } from "./_components/modules/outcomes/outcomes";
import { Proof } from "./_components/modules/proof/proof";
import { Audience } from "./_components/modules/audience/audience";
import { Program } from "./_components/modules/program/program";
import { Cta } from "./_components/modules/cta/cta";

export default function ImhoAcademyPage() {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col overflow-x-hidden">
      <Hero />
      <Problem />
      <SectionSeparator />
      <Solution />
      <Differentiation />
      <SectionSeparator />
      <Process />
      <Outcomes />
      <SectionSeparator />
      <Proof />
      <Audience />
      <SectionSeparator />
      <Program />
      <Cta />
    </div>
  );
}
