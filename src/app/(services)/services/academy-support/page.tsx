import React from "react";
import { HandHeartIcon } from "@phosphor-icons/react/dist/ssr/HandHeart";
import { AcademySupportForm } from "../../_components/modules/academy-support/form";
import ServiceHero from "../../_components/service-hero";

const AcademySupportPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <HandHeartIcon size={96} weight="thin" className="dark:opacity-25" />
        </div>

        <ServiceHero
          title="Support Engineering Capability Development"
          subtitle="Help support the development of Africa's next generation of engineering designers, builders, and innovators through practical engineering capability development."
        />
      </div>
      <div className="flex flex-row w-full h-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <AcademySupportForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default AcademySupportPage;
