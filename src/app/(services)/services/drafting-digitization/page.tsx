import React from "react";
import { BlueprintIcon } from "@phosphor-icons/react/dist/ssr/Blueprint";
import { DraftingDigitizationForm } from "../../_components/modules/drafting-digitization/form";
import ServiceHero from "../../_components/service-hero";

const DraftingDigitizationPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="hidden lg:flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <BlueprintIcon size={96} weight="thin" className="dark:opacity-25" />
        </div>

        <ServiceHero
          title="Engineering Drafting & Digitization"
          subtitle="Fast-track drafting, reverse engineering, and CAD services. Bring us a physical part, legacy drawings, hand sketches, or existing 3D models and we will return production-ready documentation."
        />
      </div>
      <div className="flex flex-1 flex-row w-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <DraftingDigitizationForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default DraftingDigitizationPage;
