"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { ModeToggle } from "../../theme/theme-toggle";
import MobileHamburger from "./hamburger";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full h-[72px] py-[16px] px-[32px] lg:py-[20px]",
        "lg:px-[130px] bg-background backdrop-blur-2xl supports-[backdrop-filter]:bg-background",
        "z-50 transition-[border-opacity] duration-200",
        isScrolled && "border-b muted-border",
      )}
    >
      <div className="flex justify-between items-center h-full w-full">
        <div>
          <Link href="/">
            <Image
              src="/logos/nav-logo.png"
              alt="Logo"
              width={100}
              height={30}
            />
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>
                  <span className="text-muted-foreground text-[16px]">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          {/* LARGE SCREENS */}
          <div className="hidden lg:inline-flex gap-2">
            <ModeToggle />
            <Button
              asChild
              variant="default"
              size={"nav"}
              className="text-white"
            >
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>
          {/* MEDIUM AND SMALL SCREENS*/}
          <MobileHamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
