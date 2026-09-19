"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * Toggles light/dark when `T` is pressed. Renders nothing — mount it once
 * inside the theme provider.
 *
 * Most of this site is intake forms, so the handler bails out on anything that
 * looks like text entry; otherwise typing a `t` into a field would flip the
 * theme.
 */
const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;

  if (target.isContentEditable) return true;

  return ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
};

export function ThemeShortcut() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "t") return;

      // Leave browser and OS chords (Ctrl+T, Cmd+T, …) alone.
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      // Mid-composition IME keystrokes report as "t" too.
      if (event.isComposing) return;

      if (isTypingTarget(event.target)) return;

      event.preventDefault();
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [resolvedTheme, setTheme]);

  return null;
}
