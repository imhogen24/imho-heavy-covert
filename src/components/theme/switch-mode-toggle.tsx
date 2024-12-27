"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div
      className="group w-full border-y border-muted inline-flex justify-between items-center py-4 cursor-pointer"
      onClick={toggleTheme}
    >
      <span className="text-muted-foreground  transition-colors">
        Theme
      </span>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="group-hover:border border-muted transition-all"
      />
    </div>
  )
}
