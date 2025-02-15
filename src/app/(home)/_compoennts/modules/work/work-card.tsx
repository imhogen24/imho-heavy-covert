import { Button } from "@/components/ui/button";
import { WorkWithUsProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Images } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WorkCard = (props: WorkWithUsProps) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 gap-5 muted-border p-10 justify-between",
        props.idx % 2 === 0 && "border-r",
        props.idx < 2 && "border-b",
      )}
    >
      <div className="flex flex-row gap-5">
        <div className="flex items-center justify-center border muted-border w-fit h-fit p-2 rounded-[10px]">
          <div className="relative w-6 h-6">
            <Image
              src={props.image}
              alt="Work with us"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <h4
          className={cn(
            "scroll-m-20 my-auto font-semibold tracking-tight text-2xl",
          )}
        >
          {props.title}
        </h4>
      </div>
      <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed">
        <p className={cn("leading-7 [&:not(:first-child)] justify-between")}>
          {props.description}
        </p>
        <p className="leading-7 [&:not(:first-child)]">{props.footer}</p>
        <Button
          asChild
          className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 p-5"
          variant={"secondary"}
        >
          <Link href={props.route}>{props.cta}</Link>
        </Button>
      </div>
    </div>
  );
};

export default WorkCard;
