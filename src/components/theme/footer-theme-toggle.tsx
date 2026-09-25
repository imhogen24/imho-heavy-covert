"use client";

import { useTheme } from "next-themes";

export function FooterThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex w-[66.666667vw] max-w-none self-start items-stretch border border-muted">
      <button
        type="button"
        aria-pressed={resolvedTheme === "dark"}
        onClick={() => setTheme("dark")}
        className={`flex flex-1 items-center justify-center border-r border-muted px-6 py-2 text-sm transition-colors ${
          resolvedTheme === "dark"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Dark
      </button>
      <button
        type="button"
        aria-pressed={resolvedTheme === "light"}
        onClick={() => setTheme("light")}
        className={`flex flex-1 items-center justify-center px-6 py-2 text-sm transition-colors ${
          resolvedTheme === "light"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Light
      </button>
    </div>
  );
}
