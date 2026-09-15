import { Link as NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Grid } from "@/components/ui/grid";
import type { NavItemChild } from "@/lib/types";
import { cn } from "@/lib/utils";

export const contentHeadingClassName =
  "text-xs font-medium uppercase tracking-wide text-muted-foreground";

export function NavContentCard({
  title,
  description,
  href,
  icon: Icon,
}: NavItemChild) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "group relative isolate flex flex-col justify-between overflow-hidden rounded-xl border muted-border bg-muted/40 px-5 py-4 transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
        )}
      >
        <Grid
          cellSize={46}
          patternOffset={[0, -14]}
          className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        />
        <Icon
          size={20}
          weight="thin"
          className="relative text-muted-foreground transition-colors group-hover:text-foreground"
        />
        <div className="relative mt-3">
          <span className="text-sm font-medium text-foreground">{title}</span>
          {description && (
            <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}
