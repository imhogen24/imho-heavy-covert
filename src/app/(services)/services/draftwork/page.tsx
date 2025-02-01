import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";
import { ObeliskIcon } from "@/lib/icons";
import { CadForm } from "../../_components/cad-form";

const DraftworkPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <ObeliskIcon className="dark:opacity-25" />
        </div>
        <div className="absolute p-10 space-y-5">
          <div className="flex flex-col md:flex-row gap-2 mb-3">
            <span className="w-fit  my-auto px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              BETA
            </span>
            <span className="inline-flex gap-1 text-sm text-gray-600 dark:text-gray-400">
              We're currently in beta - please
              <Link
                className="underline"
                target="_blank"
                href={
                  "https://github.com/imhogen24/imho-heavy-covert/issues/new?template=Blank+issue"
                }
              >
                {" "}
                report{" "}
              </Link>
              any issues
            </span>
          </div>

          <h1 className="hidden md:block md:text-2xl font-bold">
            Experience smoother services
          </h1>
          <h1 className="md:text-xl opacity-50">
            Skip the meeting scheduling hassle. Our forms make communication
            effortless and organized.
          </h1>
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <CadForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default DraftworkPage;
