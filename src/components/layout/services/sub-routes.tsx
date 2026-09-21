"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES_LINKS } from "@/lib/constants";
import { ScrollableTabs } from "@/components/ui/scrollable-tabs";
import { cn } from "@/lib/utils";

export const ServiceRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-[780px] mx-auto py-1">
      <ScrollableTabs>
        {SERVICES_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors shrink-0",
                isActive
                  ? "bg-accent text-accent-foreground border muted-border"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
              )}
            >
              {link.title}
            </Link>
          );
        })}
      </ScrollableTabs>
    </div>
  );
};
