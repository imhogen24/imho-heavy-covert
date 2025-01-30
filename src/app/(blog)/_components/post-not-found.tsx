"use client";
import { DoorOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const PostNotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
      <div className="p-20 flex flex-col justify-center gap-5 cols-span-1 h-full border-r muted-border border-dashed ">
        <h1 className="font-medium text-4xl">This Blog does not exist</h1>
        <Button
          className=" w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
          variant={"secondary"}
          onClick={() => router.back()}
        >
          <DoorOpen /> Go Back
        </Button>
      </div>
      <div>
        <div className="p-10 hidden  md:flex justify-center items-center">
          <img
            src="/obelisk.svg"
            alt="Next.js Logo"
            className="w-full h-full opacity-40 object-contain dark:hidden"
          />
          <img
            src="/obelisk.svg"
            alt="Next.js Logo"
            className="w-full opacity-10 h-full object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PostNotFound;
