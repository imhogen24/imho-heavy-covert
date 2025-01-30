import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";
import { HeavenEarthIcon, ObeliskIcon } from "@/lib/icons";
import { ProcessForm } from "../../_components/process-form";

const ProcessPage = () => {
  return (
    <div className="max-w-screen min-h-dvh flex flex-col">
      <div className="grid grid-cols-3 relative h-fit w-full border-b muted-border">
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="h-60 w-full border-r border-dashed muted-border"></div>
        <div className="flex justify-center items-center h-60 w-full bg-neutral-100 dark:bg-neutral-900">
          <HeavenEarthIcon className="dark:opacity-25" />
        </div>
        <div className="absolute p-10 space-y-5">
          {/* <h1 className="md:text-2xl font-bold">
            Ready to bring your vision to life?
          </h1>
          <h1 className="md:text-xl opacity-50">
            Start by filling the form below. Click below to watch a video on how
            to fill the form.
          </h1>
          <Button
            asChild
            className="!cursor-not-allowed w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
            variant={"secondary"}
          >
            <Link
              href="https://zcal.co/kennyanyi9"
              target="_blank"
              className=""
            >
              <Play /> watch video
            </Link>
          </Button>
          {} */}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-between">
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>
        <div className="w-full">
          <ProcessForm />
        </div>
        <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
      </div>
    </div>
  );
};

export default ProcessPage;
