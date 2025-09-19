"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DoorOpen, SendToBack, SkipBack, StepBack } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <div className="rounded-full flex flex-col gap-5 justify-center items-center size-64 lg:size-80 p-10 md:p-20 border muted-border border-dashed">
        <h1 className={"text-center text-2xl md:text-3xl lg:text-7xl"} role="status" aria-live="polite">404</h1>

        <p className="text-center text-muted-foreground text-md md:text-xl">
          Page not found
        </p>

        <Button
          className="w-fit mx-auto lg:mx-0"
          variant="primary"
          size="standard"
          onClick={() => router.back()}
          aria-label="Go back to previous page"
        >
          <DoorOpen aria-hidden="true" /> Go Back
        </Button>
      </div>
    </div>
  );
}
