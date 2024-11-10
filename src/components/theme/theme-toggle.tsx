"use client";
import { cn } from "@/lib/utils";
import { MonitorCogIcon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-fit rounded-full border grid grid-cols-3">
      <span className="sr-only">Toggle theme</span>
      <span
        className={cn(
          "w-fit p-1 h-fit cursor-pointer transition-all",
          theme === "system" && "border rounded-full"
        )}
        onClick={() => setTheme("system")}
      >
        <MonitorCogIcon size={16} className="m-auto" />
      </span>
      <span
        className={cn(
          "w-fit p-1 h-fit cursor-pointer transition-all",
          theme === "light" && "border rounded-full"
        )}
        onClick={() => setTheme("light")}
      >
        <Sun size={16} className="m-auto" />
      </span>
      <span
        className={cn(
          "w-fit p-1 h-fit cursor-pointer transition-all",
          theme === "dark" && "border rounded-full"
        )}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon size={16} className="m-auto" />
      </span>
    </div>
  );
};

export default ToggleMode;
