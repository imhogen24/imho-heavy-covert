"use client";

import { useEffect, useState } from "react";
import { SunIcon } from "@phosphor-icons/react/dist/csr/Sun";
import { MoonIcon } from "@phosphor-icons/react/dist/csr/Moon";
import { MonitorIcon } from "@phosphor-icons/react/dist/csr/Monitor";
import { useTheme } from "next-themes";

const THEMES = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
] as const;

/**
 * Segmented light/dark/system control.
 *
 * Reads `theme` rather than `resolvedTheme`: `resolvedTheme` collapses to
 * "light" or "dark" and can't tell "the user picked dark" apart from "the user
 * picked system and the OS is dark", so System could never show as selected.
 *
 * `theme` is undefined until next-themes reads localStorage on the client, so
 * the selection is held back until mount — otherwise the server would render a
 * different segment as active and hydration would mismatch.
 */
export function FooterThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      role="group"
      aria-label="Theme"
      className="flex w-full items-stretch border-t muted-border"
    >
      {THEMES.map(({ value, label, Icon }, index) => {
        const isActive = mounted && theme === value;

        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setTheme(value)}
            className={`flex flex-1 items-center justify-center gap-2 px-4 py-2 text-sm transition-colors ${
              index < THEMES.length - 1 ? "border-r muted-border" : ""
            } ${
              isActive
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon size={16} weight="regular" aria-hidden />
            {label}
          </button>
        );
      })}
    </div>
  );
}
