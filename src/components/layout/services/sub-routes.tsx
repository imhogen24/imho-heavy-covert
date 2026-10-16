"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES_LINKS } from "@/lib/constants";
import { ServiceRoutesSelect } from "./sub-routes-select";
import { cn } from "@/lib/utils";

export const ServiceRoutes = () => {
  const pathname = usePathname();

  // The engagement-channel pages (capability assessment, the design forge,
  // partnership, support, cohort sponsorship) sit under /services/* but are not
  // services, so the service track does not represent them.
  const isServiceRoute = SERVICES_LINKS.some((link) => link.href === pathname);

  if (!isServiceRoute) return null;

  return (
    <>
      {/* Below `md` the labels are offered as a dropdown rather than a track
          the reader has to scroll through to find the current service. */}
      <div className="p-1 md:hidden">
        <ServiceRoutesSelect />
      </div>

      {/* Three labels fit on one line, so this is a plain left-aligned row
          rather than a scrollable track. The inline padding matches the content
          card below so the first tab lines up with its left edge. */}
      <div className="hidden md:flex w-full items-center gap-3 px-[11px] py-2">
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
      </div>
    </>
  );
};
