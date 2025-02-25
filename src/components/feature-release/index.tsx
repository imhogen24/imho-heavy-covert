import { Badge } from "@/components/ui/badge"
import { ArrowRight, PartyPopper } from "lucide-react";
import Link from "next/link";


export const FeatureRealease: React.FC = () => {
  return (
    <Link href="/services/product" className="relative top-20 md:top-32 mx-auto ">
      <Badge variant="secondary" className="muted-border p-1.5  inline-flex gap-1">
        <span className="font-light bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-blue-100 p-1 inline-flex gap-1 rounded-full border muted-border">
          <PartyPopper className="my-auto size-4" />
          beta
        </span>
        <span className="text-muted-foreground text-xs md:text-sm font-light"> Introducing seamless engineering service requests</span>
        <ArrowRight className="my-auto size-4" />
      </Badge>
    </Link>

  );
}