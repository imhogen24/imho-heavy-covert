"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScrollableTabsProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollableTabs({ children, className }: ScrollableTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;

    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;

    if (!el) return;

    const scrollAmount = el.scrollWidth / 2;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "relative flex items-center max-w-full px-8 mx-auto",
        className,
      )}
    >
      {canScrollLeft && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-20 h-7 w-7 rounded-full shadow-md transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4 text-muted-foreground" />
        </Button>
      )}

      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center gap-3 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
      </div>

      {canScrollRight && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-20 h-7 w-7 rounded-full shadow-md transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Button>
      )}
    </div>
  );
}
