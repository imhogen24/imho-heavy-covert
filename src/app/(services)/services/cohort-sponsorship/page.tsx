import React from "react";
import { HandCoinsIcon } from "@phosphor-icons/react/dist/ssr/HandCoins";
import { CohortSponsorshipForm } from "../../_components/modules/cohort-sponsorship/form";
import ServiceHero from "../../_components/service-hero";

const CohortSponsorshipPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="hidden lg:flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <HandCoinsIcon size={96} weight="thin" className="dark:opacity-25" />
        </div>

        <ServiceHero
          title="Sponsor an Engineering Capability Cohort"
          subtitle="Partner with IMHO GEN Academy to support engineering capability development, workforce transformation, and practical technical education for the next generation of engineers, designers, and builders."
        />
      </div>
      <div className="flex flex-1 flex-row w-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <CohortSponsorshipForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default CohortSponsorshipPage;
