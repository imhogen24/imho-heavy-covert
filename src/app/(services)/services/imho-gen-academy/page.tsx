import React from "react";
import { SunIcon } from "@/lib/icons";
import { ImhoGenAcademyForm } from "../../_components/modules/imho-gen-academy/form";
import ServiceHero from "../../_components/service-hero";

const ImhoGenAcademyPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <SunIcon className="dark:opacity-25" />
        </div>

        <ServiceHero
          title="Apply to IMHO GEN Academy"
          subtitle="Build real engineering design capability through structured engineering execution, CAD, product development, and practical problem-solving."
        />
      </div>
      <div className="flex flex-row w-full h-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <ImhoGenAcademyForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default ImhoGenAcademyPage;
