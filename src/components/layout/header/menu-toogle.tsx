"use client";

import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedSizeContainer } from "@/components/ui/animated-size-container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { HamburgerIcon } from "@/lib/icons";
import type { MegaNavItem, NavItemChild } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme/switch-mode-toggle";
import { navItems } from "./navbar";

// Define the type for the hamburger menu props
interface HamburgerMenuProps {
  isMenuOpen: boolean;
  onToggleMenuOpen: () => void;
}

// hamburger button
export const Hamburger: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  onToggleMenuOpen,
}) => {
  return (
    <div className="flex lg:hidden">
      <Button
        variant="outline"
        className="relative lg:hidden w-[46px] h-[46px] p-0 flex items-center justify-center [&_svg]:!w-6 [&_svg]:!h-6"
        onClick={onToggleMenuOpen}
      >
        {isMenuOpen ? null : <HamburgerIcon />}
      </Button>
    </div>
  );
};

// hamburger menu

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  onToggleMenuOpen,
}) => {
  const isMotionReduced = useReducedMotion();

  const handleLinkClick = () => {
    onToggleMenuOpen();
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={onToggleMenuOpen}>
      <SheetContent className=" w-full border-muted" side={"top"}>
        <Link href="/" onClick={handleLinkClick}>
          <Image src="/logos/nav-logo.png" alt="Logo" width={100} height={24} />
        </Link>
        <motion.div
          className="mt-12 flex w-full flex-col items-start gap-y-4"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.03,
          }}
        >
          <div className="mt-[48px] flex w-full flex-col gap-[30px]">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="w-full"
                variants={{
                  initial: {
                    opacity: 0,
                    x: isMotionReduced ? 0 : 100,
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: "backInOut",
                    },
                  },
                }}
              >
                <MobileNavItem item={item} onLinkClick={handleLinkClick} />
              </motion.div>
            ))}
            {/* THEME SWITCHER */}
            <ModeToggle />
            {/* START A PROJECT BUTTON */}
            <Button size={"lg"} asChild className="w-full text-white rounded-xl">
              <Link
                href="/services/custom-engineering"
                onClick={handleLinkClick}
              >
                Start a Project
              </Link>
            </Button>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

const MobileNavItem = ({
  item,
  onLinkClick,
}: {
  item: MegaNavItem;
  onLinkClick: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  if (item.childItems) {
    return (
      <AnimatedSizeContainer height>
        <button
          type="button"
          className="flex w-full items-center justify-between"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="text-[16px] font-medium text-muted-foreground">
            {item.name}
          </span>
          <CaretDownIcon
            size={16}
            weight="thin"
            className={cn(
              "text-muted-foreground transition-transform",
              expanded && "rotate-180",
            )}
          />
        </button>
        {expanded && (
          <div className="grid grid-cols-1 gap-4 pt-4">
            {item.childItems.map((child) => (
              <ChildItem key={child.title} item={child} onLinkClick={onLinkClick} />
            ))}
          </div>
        )}
      </AnimatedSizeContainer>
    );
  }

  if (!item.href) {
    return null;
  }

  return (
    <Link className="block w-full" href={item.href} onClick={onLinkClick}>
      <span className="text-[16px] font-medium text-muted-foreground">
        {item.name}
      </span>
    </Link>
  );
};

const ChildItem = ({
  item,
  onLinkClick,
}: {
  item: NavItemChild;
  onLinkClick: () => void;
}) => {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onLinkClick}
      className="flex w-full items-start gap-3"
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border muted-border bg-muted/40">
        <Icon size={16} weight="thin" className="text-muted-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{item.title}</p>
        {item.description && (
          <p className="text-xs text-muted-foreground">{item.description}</p>
        )}
      </div>
    </Link>
  );
};
