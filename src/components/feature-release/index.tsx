import { Badge } from "@/components/ui/badge";
import { ArrowRight, PartyPopper } from "lucide-react";
import Link from "next/link";

export const FeatureRealease: React.FC = () => {
  return (
    <Link
      href="/shop/trade-tech"
      className="relative top-20 md:top-32 mx-auto "
    >
      <Badge
        variant="secondary"
        className="muted-border p-1.5  inline-flex gap-1"
      >
        <span className="font-light bg-amber-100 text-amber-900 dark:bg-amber-700 dark:text-amber-100 p-1 inline-flex gap-1 rounded-full border muted-border">
          <PartyPopper className="my-auto size-4" />
          new
        </span>
        <span className="text-muted-foreground text-xs md:text-sm font-light">
          {" "}
          Introducing the all new trade tech gear
        </span>
        <ArrowRight className="my-auto size-4" />
      </Badge>
    </Link>
  );
};
