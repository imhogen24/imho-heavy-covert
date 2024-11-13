import ToggleMode from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { CrossPositinalIcon } from "@/lib/icons";


export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-5">
      <ToggleMode />

    </div>
  );
}
