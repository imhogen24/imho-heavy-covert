import React from "react";
import { HammerIcon } from "@phosphor-icons/react/dist/ssr/Hammer";
import { DesignForgeForm } from "../../_components/modules/design-forge/form";
import ServiceHero from "../../_components/service-hero";

const DesignForgePage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <HammerIcon size={96} weight="thin" className="dark:opacity-25" />
        </div>

        <ServiceHero
          title="Join the Design Forge Community"
          subtitle="Join a growing community of engineers, designers, builders, innovators, and technical thinkers focused on engineering design, product development, systems thinking, and practical problem-solving."
        />
      </div>
      <div className="flex flex-row w-full h-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <DesignForgeForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default DesignForgePage;
