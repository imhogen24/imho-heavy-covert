"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { SERVICE_ROUTES } from "@/lib/constants";
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
  useId,
} from "react";

type AnimatedBackgroundProps = {
  children:
    ReactElement<{ "data-id": string }>[] | ReactElement<{ "data-id": string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: any;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  const uniqueId = useId();
  const listRef = useRef<HTMLDivElement>(null);

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);

    if (onValueChange) {
      onValueChange(id);
    }
  };

  // Falls back to the first service so a tab is always highlighted.
  const currentLabel =
    SERVICE_ROUTES.find((route) => route.href === pathname)?.label ??
    SERVICE_ROUTES[0]?.label;

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(currentLabel);
    }
  }, [defaultValue]);

  // The row scrolls rather than wraps, so bring the active tab into view.
  // Nudging `scrollLeft` directly keeps the page itself from scrolling, which
  // `scrollIntoView` would do.
  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector<HTMLElement>('[data-checked="true"]');

    if (!list || !active) return;

    const listBox = list.getBoundingClientRect();
    const activeBox = active.getBoundingClientRect();
    list.scrollLeft +=
      activeBox.left - listBox.left - (listBox.width - activeBox.width) / 2;
  }, [activeId]);

  return (
    <div
      ref={listRef}
      className="hover-scrollbar flex items-center max-w-4xl gap-1 p-1"
    >
      {Children.map(children, (child: any, index) => {
        const id = child.props["data-id"];

        const interactionProps = enableHover
          ? {
              onMouseEnter: () => handleSetActiveId(id),
              onMouseLeave: () => handleSetActiveId(null),
            }
          : {
              onClick: () => handleSetActiveId(id),
            };

        return cloneElement(
          child,
          {
            key: index,
            className: cn("relative shrink-0", child.props.className),
            "aria-selected": activeId === id,
            "data-checked": activeId === id ? "true" : "false",
            ...interactionProps,
          },
          <>
            <AnimatePresence initial={false}>
              {activeId === id && (
                <motion.div
                  layoutId={`background-${uniqueId}`}
                  className={cn("absolute inset-0", className)}
                  transition={transition}
                  initial={{ opacity: defaultValue ? 1 : 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">{child.props.children}</span>
          </>,
        );
      })}
    </div>
  );
}
