import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";
import { ObeliskIcon, PyramidIcon } from "@/lib/icons";
import { CadForm } from "../../_components/modules/cad/form";
import { SupportForm } from "../../_components/modules/support/form";
import ServiceHero from "../../_components/service-hero";

const EngineeringSupportPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <PyramidIcon className="dark:opacity-25" />
        </div>
        <ServiceHero />
      </div>
      <div className="flex flex-row w-full h-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <SupportForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default EngineeringSupportPage;
