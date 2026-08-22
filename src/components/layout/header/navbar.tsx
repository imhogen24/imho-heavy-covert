"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { LayoutGroup } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, SVGProps, useId } from "react";
import { Button } from "../../ui/button";
import MobileHamburger from "./hamburger";
import {
  ACADEMY_LINKS,
  COMPANY_LINKS,
  DIVISIONS_LINKS,
  PORTALS_LINKS,
  SERVICES_LINKS,
} from "@/lib/constants";
import type { MegaNavItem } from "@/lib/types";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { NavDropdownPanel } from "./nav-content/dropdown-panel";

export const navItems: MegaNavItem[] = [
  {
    name: "Services",
    content: () => (
      <NavDropdownPanel
        heading="Our service offerings"
        items={SERVICES_LINKS}
        columns={3}
      />
    ),
    childItems: SERVICES_LINKS,
    segments: ["/services"],
  },
  {
    name: "Divisions",
    content: () => (
      <NavDropdownPanel
        heading="Access to core engineering engines"
        items={DIVISIONS_LINKS}
        columns={3}
      />
    ),
    childItems: DIVISIONS_LINKS,
    segments: [
      "/research-and-development-and-business-improvement",
      "/technologies-and-industrial-support",
      "/trade-tech",
    ],
  },
  {
    name: "IMHO Academy",
    content: () => (
      <NavDropdownPanel
        heading="For capability development"
        items={ACADEMY_LINKS}
        columns={3}
      />
    ),
    childItems: ACADEMY_LINKS,
    segments: ["/imho-academy", "/services/imho-gen-academy"],
  },
  {
    name: "Company",
    content: () => (
      <NavDropdownPanel
        heading="Institutional trust & cooperation"
        items={COMPANY_LINKS}
        columns={2}
      />
    ),
    childItems: COMPANY_LINKS,
  },
  {
    name: "Portals",
    content: () => (
      <NavDropdownPanel
        heading="Operational layer accounts"
        items={PORTALS_LINKS}
        columns={3}
      />
    ),
    childItems: PORTALS_LINKS,
  },
  {
    name: "Blog",
    href: "/blog",
    segments: ["/blog"],
  },
];

const navItemClassName = cn(
  "relative group/item flex items-center gap-1.5 rounded-lg px-4 py-2 text-[16px] font-medium text-muted-foreground transition-colors",
  "hover:bg-accent hover:text-accent-foreground",
  "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
  "group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent",
);

export const Navbar = () => {
  const scrolled = useScroll(0);
  const pathname = usePathname();
  const layoutGroupId = useId();

  return (
    <LayoutGroup id={layoutGroupId}>
      <nav
        className={cn(
          "fixed top-0 left-0 z-50 h-18 w-full py-4 lg:py-5",
          "backdrop-blur-3xl supports-backdrop-filter:bg-background",
          "transition-[padding,border-color] duration-300 ease-out",
          scrolled ? "px-8 lg:px-32.5 border-b muted-border" : "px-6",
        )}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src="/logos/nav-logo.png"
                alt="Logo"
                width={100}
                height={24}
              />
            </Link>
          </div>

          <NavigationMenuPrimitive.Root
            delayDuration={0}
            className="relative hidden lg:block"
          >
            <NavigationMenuPrimitive.List className="group relative z-0 flex">
              {navItems.map(({ name, href, segments, content: Content }) => {
                const isActive = (segments ?? []).some((segment) =>
                  pathname?.startsWith(segment),
                );
                return (
                  <NavigationMenuPrimitive.Item key={name}>
                    <WithTrigger trigger={!!Content}>
                      {href !== undefined ? (
                        <Link
                          href={href}
                          className={navItemClassName}
                          data-active={isActive}
                        >
                          {name}
                        </Link>
                      ) : (
                        <button className={navItemClassName} data-active={isActive}>
                          {name}
                          <AnimatedChevron className="size-2.5 text-muted-foreground" />
                        </button>
                      )}
                    </WithTrigger>

                    {Content && (
                      <NavigationMenuPrimitive.Content className="data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0">
                        <Content />
                      </NavigationMenuPrimitive.Content>
                    )}
                  </NavigationMenuPrimitive.Item>
                );
              })}
            </NavigationMenuPrimitive.List>

            <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2">
              <NavigationMenuPrimitive.Viewport
                className={cn(
                  "relative flex origin-[top_center] justify-start overflow-hidden rounded-2xl border muted-border bg-background shadow-md",
                  "data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content",
                  "h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] transition-[width,height]",
                )}
              />
            </div>
          </NavigationMenuPrimitive.Root>

          <div className="hidden items-center gap-2 lg:inline-flex">
            <Button
              asChild
              variant="default"
              className="h-[42px] w-auto px-5 text-white"
            >
              <Link href="/services/custom-engineering">Start a Project</Link>
            </Button>
          </div>

          {/* MEDIUM AND SMALL SCREENS*/}
          <MobileHamburger />
        </div>
      </nav>
    </LayoutGroup>
  );
};

function AnimatedChevron(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      fill="none"
      viewBox="0 0 9 9"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.278 3.389 4.5 6.167 1.722 3.389"
        className="transition-transform duration-150 [transform-box:view-box] [transform-origin:center] [vector-effect:non-scaling-stroke] group-data-[state=open]/item:-scale-y-100"
      />
    </svg>
  );
}

function WithTrigger({
  trigger,
  children,
}: {
  trigger: boolean;
  children: ReactNode;
}) {
  return trigger ? (
    <NavigationMenuPrimitive.Trigger asChild>
      {children}
    </NavigationMenuPrimitive.Trigger>
  ) : (
    children
  );
}

export default Navbar;
