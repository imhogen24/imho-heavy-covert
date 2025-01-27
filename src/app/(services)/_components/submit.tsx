"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BUTTON_PROPS {
  label: string;
}

export function Submit({ label }: BUTTON_PROPS) {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
      variant={"secondary"}
      type="submit"
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <LoaderCircle className="animate-spin" /> submitting...
        </>
      ) : (
        <>{label}</>
      )}
    </Button>
  );
}
