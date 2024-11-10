import ToggleMode from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { CrossPositinalIcon } from "@/lib/icons";


export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-5">
      <ToggleMode />
      <h1 className="text-7xl font-[family-name:var(--font-machina)]">
        Project heavy Covert
      </h1>
      <p>We Design Highly Functional and Robust Products & Processes</p>
      <span className="inline-flex gap-2">
        <Button variant={"default"}>Project heavy covert</Button>
        <Button variant={"outline"}>Project heavy covert</Button>
      </span>
      <CrossPositinalIcon className="size-16"/>

    </div>
  );
}
