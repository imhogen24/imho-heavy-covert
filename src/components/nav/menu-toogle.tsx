"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HamburgerIcon } from "@/lib/icons";
import Image from "next/image";

import { ModeToggle } from "../theme/switch-mode-toggle";
import { NAV_ITEMS } from "@/lib/constants";



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
            <Link href="/" onClick={handleLinkClick} >
                <Image src="/logos/nav-logo.png" alt="Logo" width={100} height={30} />
            </Link>
         <motion.div
          className="mt-12 flex w-full flex-col items-start gap-y-4"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.03,
          }}
        >
          <div className="w-full flex flex-col gap-[30px] mt-[48px]">
          {NAV_ITEMS.map((item) => (
              <motion.div
                key={item.id}
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
                <Link className="w-full block" href={item.href} onClick={handleLinkClick}>
                    <span className="text-muted-foreground text-[16px]">{item.label}</span>
                </Link>

              </motion.div>
            ))}
            {/* THEME SWITCHER */}
            <ModeToggle/>
            {/* CONTACT BUTTON */}
             <Button size={"lg"} asChild className="w-full text-white rounded-xl">
                <Link href={"/#contact"}>Contact</Link>
             </Button>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};
