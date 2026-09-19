"use client";

import { usePathname, useRouter } from "next/navigation";
import { SERVICE_ROUTES } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Small-screen counterpart to the service tabs. Eight labels wrap into a wall
 * of buttons below `md`, so the same routes are offered as a dropdown instead.
 */
export function ServiceRoutesSelect() {
  const pathname = usePathname();
  const router = useRouter();

  // Fall back to the first service so the trigger always shows a selection
  // rather than an empty placeholder.
  const current =
    SERVICE_ROUTES.find((route) => route.href === pathname) ??
    SERVICE_ROUTES[0];

  return (
    <Select value={current?.href} onValueChange={(href) => router.push(href)}>
      <SelectTrigger
        aria-label="Select a service"
        className={cn(
          // `primary` is the site's inverted button: black in light mode,
          // white in dark. `standard` leaves sizing to the variant.
          buttonVariants({ variant: "primary", size: "standard" }),
          "w-fit rounded-full px-5 transition-transform active:scale-[0.98]",
          // Undo the trigger's own chrome and restore the chevron's size,
          // which the button base would otherwise scale up to 24px.
          "border-0 shadow-none [&_svg]:size-4 [&_svg]:opacity-100",
        )}
      >
        {/*
         * Radix resolves the label from the (portalled) item list, which only
         * exists once the menu has opened — so the trigger would render blank
         * until then. Passing the label as children renders it server-side.
         */}
        <SelectValue placeholder="Select a service">
          {current?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {SERVICE_ROUTES.map((item) => (
          <SelectItem key={item.idx} value={item.href}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
