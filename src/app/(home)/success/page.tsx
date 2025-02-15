"use client";
import { CircleCheckBig, DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center rounded-sm items-center w-11/12 lg:w-1/2 gap-5 border border-dashed muted-border p-10 ">
        <CircleCheckBig color="#ef7d00" size={70} />
        <h1 className=" text-center text-xl md:text-2xl">
          Your request has been successfully submitted, our team will review and
          get back to you soon.
        </h1>
        <Button
          className=" w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
          variant={"secondary"}
          onClick={() => router.back()}
        >
          <DoorOpen /> Go Back
        </Button>
      </div>
    </div>
  );
}
