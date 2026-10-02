import React from "react";
import { GoldenEyeIcon } from "@/lib/icons";
import { CapabilityAssessmentForm } from "../../_components/modules/capability-assessment/form";
import ServiceHero from "../../_components/service-hero";

const CapabilityAssessmentPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="hidden lg:flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <GoldenEyeIcon className="dark:opacity-25" />
        </div>

        <ServiceHero
          title="Engineering Design Capability Assessment"
          subtitle="Assess your current engineering design capability level and identify areas for growth in engineering thinking, CAD, product development, and structured problem-solving."
        />
      </div>
      <div className="flex flex-1 flex-row w-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <CapabilityAssessmentForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default CapabilityAssessmentPage;
