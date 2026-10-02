import type { NavItemChildren } from "@/lib/types";
import { cn } from "@/lib/utils";
import { NavContentCard, contentHeadingClassName } from "./shared";

const widthByColumns = {
  2: "w-[520px]",
  3: "w-[760px]",
} as const;

export function NavDropdownPanel({
  heading,
  items,
  columns = 2,
}: {
  heading: string;
  items: NavItemChildren;
  columns?: 2 | 3;
}) {
  return (
    <div className={cn("p-4", widthByColumns[columns])}>
      <p className={cn(contentHeadingClassName, "mb-3 ml-1")}>{heading}</p>
      <div
        className={cn(
          "grid gap-3",
          columns === 3 ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        {items.map((item) => (
          <NavContentCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
