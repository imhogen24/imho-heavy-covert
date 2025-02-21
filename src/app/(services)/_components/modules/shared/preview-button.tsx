import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

export const PreviewButton = () => {
  return (
    <Button
      className="w-full md:w-fit mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px]"
      variant="outline">
      Preview Response <EyeIcon className="h-4 w-4" />
    </Button>
  );
}