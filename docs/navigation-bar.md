# Dub Navigation Bar — Component Reference

Complete extraction of every file that makes up the **marketing / public site navigation bar** — the sticky top nav on `dub.co` and on custom-domain placeholder pages.

Every file is documented by **name**, with its role, its exports, and its **full source**. Nothing is elided except where a file is a large shared module the nav only borrows one function from; those are marked **EXTRACT** and state exactly what was taken and from where.

> Scope note: this documents the _public site_ nav (`@dub/ui` → `Nav` / `NavMobile`). The signed-in dashboard uses a completely separate left-hand sidebar navigation system; see [Appendix B](#appendix-b--the-other-navigation-system-dashboard-sidebar).

---

## Table of contents

1. [Where it's rendered](#1-where-its-rendered)
2. [File index](#2-file-index)
3. [Dependency graph](#3-dependency-graph)
4. [Behavior notes](#4-behavior-notes)
5. [File-by-file source](#5-file-by-file-source)
   - [5.1 Nav components](#51-nav-components)
   - [5.2 Dropdown panels](#52-dropdown-panels)
   - [5.3 Dropdown graphics](#53-dropdown-graphics)
   - [5.4 Shared UI primitives](#54-shared-ui-primitives)
   - [5.5 Link data](#55-link-data)
   - [5.6 Hooks](#56-hooks)
   - [5.7 Icons](#57-icons)
   - [5.8 Utility functions (extracts)](#58-utility-functions-extracts)
   - [5.9 Tailwind animation config (extract)](#59-tailwind-animation-config-extract)
6. [Third-party dependencies](#6-third-party-dependencies)
7. [Appendix A — how to reuse the nav](#appendix-a--how-to-reuse-the-nav)
8. [Appendix B — the other navigation system](#appendix-b--the-other-navigation-system-dashboard-sidebar)

---

## 1. Where it's rendered

The nav lives in the shared `@dub/ui` package and is consumed in two places in `apps/web`:

| Consumer file                                                       | Purpose                                                                                                        |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `layout.tsx` (`apps/web/app/[domain]/`)                             | Layout for custom-domain placeholder pages and `dub.co` marketing pages served through the `[domain]` segment. |
| `page.tsx` (`apps/web/app/app.dub.co/(share)/share/[dashboardId]/`) | Public shared-analytics dashboard page — passes `staticDomain` to pin the domain.                              |

`layout.tsx`:

```tsx
import { Footer, Nav, NavMobile } from "@dub/ui";

export default function ExternalPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50/80">
      <NavMobile />
      <Nav maxWidthWrapperClassName="max-w-screen-lg lg:px-4 xl:px-0" />
      {children}
      <Footer className="max-w-screen-lg border-0 bg-transparent lg:px-4 xl:px-0" />
    </div>
  );
}
```

`NavMobile` and `Nav` are rendered **as siblings**, not nested — `Nav` handles `lg` and up, `NavMobile` handles below `lg`. Both are always mounted; visibility is CSS-driven (`hidden lg:block` / `lg:hidden`).

---

## 2. File index

Every file below is reproduced in full in [§5](#5-file-by-file-source). Jump links go straight to the source.

### Nav components

| File             | Exports                                                | Role                                                                                                                                         |
| ---------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.ts`       | re-exports                                             | Barrel: `export * from "./nav"` + `"./nav-mobile"`                                                                                           |
| `nav.tsx`        | `Nav`, `NavContext`, `navItems`, `NavTheme`, `NavItem` | Desktop sticky nav bar. Also owns the nav item registry and the light/dark theme context. Private helpers: `AnimatedChevron`, `WithTrigger`. |
| `nav-mobile.tsx` | `NavMobile`, `AuthButton`                              | Mobile hamburger nav, full-screen overlay. Private helpers: `MobileNavItem`, `ChildItem`, `specialIcons`.                                    |

### Dropdown panels

| File                    | Exports                                                                                                                                    | Role                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `shared.tsx`            | `ContentLinkCard`, `ContentIcon`, `ToolLinkCard`, `LargeLinkCard`, `NAV_UTM_PARAMS`, `contentHeadingClassName`, `contentLinkCardClassName` | Shared building blocks + styling tokens for all dropdown panels. |
| `product-content.tsx`   | `ProductContent`                                                                                                                           | "Product" mega-menu panel.                                       |
| `solutions-content.tsx` | `SolutionsContent`                                                                                                                         | "Solutions" mega-menu panel.                                     |
| `resources-content.tsx` | `ResourcesContent`                                                                                                                         | "Resources" mega-menu panel.                                     |

### Dropdown graphics

| File                        | Exports                       | Role                                                           |
| --------------------------- | ----------------------------- | -------------------------------------------------------------- |
| `links-graphic.tsx`         | `LinksGraphic`                | Inline SVG illustration for the Dub Links card.                |
| `analytics-graphic.tsx`     | `AnalyticsGraphic`            | SVG chart + DOM cards illustration for the Dub Analytics card. |
| `partners-graphic.tsx`      | `PartnersGraphic`, `PARTNERS` | Fake partner-table illustration for the Dub Partners card.     |
| `dub-wireframe-graphic.tsx` | `DubWireframeGraphic`         | Wireframe SVG. **Unused** — no importers anywhere in the repo. |

### Shared UI primitives

| File                          | Exports                                   | Role                                                                                              |
| ----------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `max-width-wrapper.tsx`       | `MaxWidthWrapper`                         | Centers and constrains the nav bar row.                                                           |
| `nav-wordmark.tsx`            | `NavWordmark`                             | The Dub logo with a right-click context menu (copy SVG, brand guidelines). Consumes `NavContext`. |
| `grid.tsx`                    | `Grid`                                    | Repeating SVG grid pattern behind dropdown cards.                                                 |
| `animated-size-container.tsx` | `AnimatedSizeContainer`                   | Height animation for expanding mobile nav sections.                                               |
| `button.tsx`                  | `buttonVariants`, `ButtonProps`, `Button` | Login / Sign up / Dashboard button styling.                                                       |
| `logo.tsx`                    | `Logo`                                    | Dub symbol mark, rendered by `NavWordmark`.                                                       |
| `wordmark.tsx`                | `Wordmark`                                | Dub wordmark, rendered by `NavWordmark`.                                                          |

### Link data

| File         | Exports                                                                                                                                             | Role                                                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `content.ts` | `FEATURES_LIST`, `SOLUTIONS`, `RESOURCES`, `SDKS`, `NavItemChild`, `NavItemChildren` (+ footer-only `COMPARE_PAGES`, `LEGAL_PAGES`, `SOCIAL_LINKS`) | Link registry feeding both the desktop dropdowns and the mobile accordions. |

### Hooks

| File                        | Exports              | Role                                            |
| --------------------------- | -------------------- | ----------------------------------------------- |
| `use-scroll.ts`             | `useScroll`          | Drives the "scrolled" backdrop-blur background. |
| `use-resize-observer.ts`    | `useResizeObserver`  | Backing hook for `AnimatedSizeContainer`.       |
| `use-copy-to-clipboard.tsx` | `useCopyToClipboard` | Backing hook for `NavWordmark`'s context menu.  |

### Icons

| File                     | Export             | Used by                                    |
| ------------------------ | ------------------ | ------------------------------------------ |
| `dub-links.tsx`          | `DubLinksIcon`     | nav-mobile, product-content, content.ts    |
| `dub-partners.tsx`       | `DubPartnersIcon`  | nav-mobile, product-content, content.ts    |
| `dub-analytics.tsx`      | `DubAnalyticsIcon` | nav-mobile, product-content, content.ts    |
| `dub-api.tsx`            | `DubApiIcon`       | nav-mobile, content.ts                     |
| `expanding-arrow.tsx`    | `ExpandingArrow`   | shared.tsx (`ContentLinkCard` hover arrow) |
| `with-fill-variant.tsx`  | `withFillVariant`  | content.ts                                 |
| `book2.tsx`              | `Book2`            | resources-content, content.ts              |
| `life-ring.tsx`          | `LifeRing`         | resources-content, content.ts              |
| `diamond-turn-right.tsx` | `DiamondTurnRight` | solutions-content, content.ts              |
| `microphone.tsx`         | `Microphone`       | solutions-content, content.ts              |
| `users.tsx`              | `Users`            | solutions-content, content.ts              |
| `toggle2.tsx`            | `Toggle2`          | content.ts                                 |
| `briefcase.tsx`          | `Briefcase`        | content.ts                                 |
| `feather.tsx`            | `Feather`          | content.ts                                 |
| `bullet-list.tsx`        | `BulletList`       | content.ts                                 |
| `envelope.tsx`           | `Envelope`         | content.ts                                 |
| `cursor-rays.tsx`        | `CursorRays`       | analytics-graphic                          |
| `typescript.tsx`         | `Typescript`       | content.ts (`SDKS`)                        |
| `python.tsx`             | `Python`           | content.ts (`SDKS`)                        |
| `go.tsx`                 | `Go`               | content.ts (`SDKS`)                        |
| `ruby.tsx`               | `Ruby`             | content.ts (`SDKS`)                        |
| `php.tsx`                | `Php`              | content.ts (`SDKS`)                        |

The `Icon` type used by `LargeLinkCard` is declared in `packages/ui/src/icons/index.tsx:92`:

```ts
export type Icon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
```

Icons imported from `lucide-react` rather than the repo: `Menu`, `X`, `ChevronDown` (nav-mobile), `Type`, `BoxSelect`, `Home`, `LayoutGrid` (nav-wordmark), `Link2` (analytics-graphic).

## 3. Dependency graph

```
apps/web/app/[domain]/layout.tsx
├── <NavMobile />                       packages/ui/src/nav/nav-mobile.tsx
│   ├── navItems, NavItem, NavTheme     ← nav.tsx (single source of truth)
│   ├── AnimatedSizeContainer           packages/ui/src/animated-size-container.tsx
│   │   └── useResizeObserver           packages/ui/src/hooks
│   ├── buttonVariants / ButtonProps    packages/ui/src/button.tsx
│   ├── NavItemChild / NavItemChildren  packages/ui/src/content.ts
│   ├── Dub*Icon                        packages/ui/src/icons
│   └── createHref, cn, fetcher         @dub/utils
│
└── <Nav />                             packages/ui/src/nav/nav.tsx
    ├── NavigationMenuPrimitive         @radix-ui/react-navigation-menu
    ├── LayoutGroup                     motion/react
    ├── useScroll                       packages/ui/src/hooks/use-scroll.ts
    ├── MaxWidthWrapper                 packages/ui/src/max-width-wrapper.tsx
    ├── NavWordmark                     packages/ui/src/nav-wordmark.tsx
    │   ├── NavContext (consumer)       ← nav.tsx
    │   ├── Logo / Wordmark             packages/ui/src
    │   └── Popover                     @radix-ui/react-popover
    ├── buttonVariants                  packages/ui/src/button.tsx
    ├── FEATURES_LIST / SOLUTIONS /
    │   RESOURCES                       packages/ui/src/content.ts
    └── dropdown panels                 packages/ui/src/nav/content/
        ├── ProductContent
        │   ├── Grid                    packages/ui/src/grid.tsx
        │   ├── LinksGraphic
        │   ├── AnalyticsGraphic
        │   └── PartnersGraphic
        ├── SolutionsContent
        │   ├── Grid
        │   ├── SDKS                    packages/ui/src/content.ts
        │   └── ContentLinkCard         content/shared.tsx
        └── ResourcesContent
            ├── Grid
            ├── RESOURCES               packages/ui/src/content.ts
            └── ContentLinkCard         content/shared.tsx
```

---

## 4. Behavior notes

**Sticky + scroll-reactive background.** The outer wrapper is `sticky inset-x-0 top-0 z-30`. A separate absolutely-positioned sibling `div` renders the background so it can cross-fade independently: transparent at rest, `bg-white/75 backdrop-blur-lg` + bottom border once `useScroll(40)` reports >40px of scroll (`bg-black/75` in dark theme).

**Theming.** `Nav` accepts `theme?: "light" | "dark"`. Dark mode is applied by conditionally adding the `dark` class to the nav root (not the document), so the nav can be dark on a light page. The value is also published through `NavContext` so descendants like `NavWordmark` can theme their portalled popover content (portals escape the DOM subtree, so they need the context rather than CSS inheritance).

**Active state.** Each nav item declares `segments: string[]`. An item is active when `pathname.startsWith(segment)` for any of its segments. The active pill (`data-[active=true]:bg-neutral-900/5`) is suppressed while a _different_ item is hovered, via the CSS trick `group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent`.

**Dropdowns.** Built on Radix `NavigationMenu` with `delayDuration={0}`. Each item with a `content` component becomes a `Trigger`; the panel renders into a single shared `Viewport` positioned under the center of the bar. The viewport animates width/height between panels using the Radix CSS vars `--radix-navigation-menu-viewport-{width,height}`, and directional enter/exit animations come from `data-[motion=from-start|from-end|to-start|to-end]`. `AnimatedChevron` flips via `group-data-[state=open]/item:-scale-y-100`.

**`LayoutGroup`.** `Nav` wraps everything in motion's `LayoutGroup` with a `useId()`-derived id, so multiple nav instances on a page don't share layout-animation namespaces.

**Auth state.** Both `Nav` and `NavMobile` call `useSWR("/api/auth/session", fetcher, { dedupingInterval: 60000 })` — but the key is gated on `domain.endsWith("dub.co")`, so custom-domain pages skip the request entirely. Logged in → single "Dashboard" button; logged out (and not loading) → "Log in" + "Sign up". While loading, nothing renders (avoids a flash of the wrong state).

**UTM tagging.** Every link goes through `createHref(href, domain, utmParams)`. On `dub.co` this is a no-op returning the raw href; on any other (custom) domain it rewrites to an absolute `https://dub.co...` URL with `utm_source=Custom Domain`, `utm_medium=Navbar`, `utm_campaign=<domain>`, `utm_content=<item name>`.

**Mobile specifics.** `NavMobile` is `fixed right-0 top-0 z-40` — it floats above `Nav` (`z-30`). Opening it sets `document.body.style.overflow = "hidden"`. The panel is `fixed inset-0 z-20`, toggled by adding `block` to a `hidden` base. Below a 280px viewport the inline auth buttons are hidden (`max-[280px]:hidden`) and equivalent links are appended to the bottom of the list instead (`min-[281px]:hidden`). Sections with `childItems` expand via `AnimatedSizeContainer height`.

**Data flow duplication to be aware of.** The desktop dropdown panels hardcode their own `mainLinks` arrays (in `product-content.tsx`, `solutions-content.tsx`, `resources-content.tsx`) while the mobile accordion renders from `navItems[].childItems` (`FEATURES_LIST` / `SOLUTIONS` / `RESOURCES` in `content.ts`). Adding a link therefore usually requires editing **both** the panel component and `content.ts`.

---

## 5. File-by-file source

Each entry gives the file name, where it lives, what it exports, what it does, and its complete contents.

---

### Nav components

#### `index.ts`

**Location:** `packages/ui/src/nav/` · **2 lines** · **Exports:** re-exports

Barrel file for the nav module. Everything the app imports as `Nav` / `NavMobile` from `@dub/ui` flows through here.

```ts
export * from "./nav";
export * from "./nav-mobile";
```

#### `nav.tsx`

**Location:** `packages/ui/src/nav/` · **307 lines** · **Exports:** `Nav`, `NavContext`, `navItems`, `NavTheme`, `NavItem`

The desktop nav bar (visible at `lg` and up) and the single source of truth for the nav item registry. Renders a Radix `NavigationMenu` with a shared `Viewport` for the dropdown panels, a scroll-reactive background layer, and the auth buttons. Also defines `NavContext`, which carries the light/dark theme to descendants that render through portals. Private helpers at the bottom: `AnimatedChevron` (flips on open) and `WithTrigger` (conditionally wraps a child in a Radix `Trigger`).

```tsx
"use client";

import { APP_DOMAIN, cn, createHref, fetcher } from "@dub/utils";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { LayoutGroup } from "motion/react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  ComponentType,
  PropsWithChildren,
  ReactNode,
  SVGProps,
  createContext,
  useId,
} from "react";
import useSWR from "swr";
import { buttonVariants } from "../button";
import {
  FEATURES_LIST,
  RESOURCES,
  SOLUTIONS,
  type NavItemChildren,
} from "../content";
import { useScroll } from "../hooks";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { NavWordmark } from "../nav-wordmark";
import { ProductContent } from "./content/product-content";
import { ResourcesContent } from "./content/resources-content";
import { SolutionsContent } from "./content/solutions-content";

export type NavTheme = "light" | "dark";

export const NavContext = createContext<{ theme: NavTheme }>({
  theme: "light",
});

export type NavItem = {
  name: string;
  href?: string;
  segments?: string[];
  content?: ComponentType<{ domain: string }>;
  childItems?: NavItemChildren;
};

export const navItems = [
  {
    name: "Product",
    content: ProductContent,
    childItems: FEATURES_LIST,
    segments: [
      "/links",
      "/analytics",
      "/partners",
      "/integrations",
      "/compare",
      "/features",
    ],
  },
  {
    name: "Solutions",
    content: SolutionsContent,
    childItems: SOLUTIONS,
    segments: ["/solutions", "/sdks"],
  },
  {
    name: "Resources",
    content: ResourcesContent,
    childItems: RESOURCES,
    segments: [
      "/help",
      "/docs",
      "/about",
      "/careers",
      "/brand",
      "/blog",
      "/changelog",
      "/contact",
    ],
  },
  {
    name: "Enterprise",
    href: "/enterprise",
    segments: ["/enterprise"],
  },
  {
    name: "Customers",
    href: "/customers",
    segments: ["/customers"],
  },
  {
    name: "Pricing",
    href: "/pricing",
    segments: ["/pricing"],
  },
];

const navItemClassName = cn(
  "relative group/item flex items-center rounded-md px-4 py-2 text-sm rounded-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors",
  "dark:text-white/90 dark:hover:text-white",
  "hover:bg-neutral-900/5 dark:hover:bg-white/10",
  "data-[active=true]:bg-neutral-900/5 dark:data-[active=true]:bg-white/10",

  // Hide active state when another item is hovered
  "group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent",
);

export function Nav({
  theme = "light",
  staticDomain,
  maxWidthWrapperClassName,
  navItems: items = navItems,
  logo,
}: {
  theme?: NavTheme;
  staticDomain?: string;
  maxWidthWrapperClassName?: string;
  navItems?: NavItem[];
  logo?: ReactNode;
}) {
  let { domain = "dub.co" } = useParams() as { domain: string };
  if (staticDomain) {
    domain = staticDomain;
  }

  const layoutGroupId = useId();

  const scrolled = useScroll(40);
  const pathname = usePathname();
  const { data: session, isLoading } = useSWR(
    domain.endsWith("dub.co") && "/api/auth/session",
    fetcher,
    {
      dedupingInterval: 60000,
    },
  );

  return (
    <NavContext.Provider value={{ theme }}>
      <LayoutGroup id={layoutGroupId}>
        <div
          className={cn(
            `sticky inset-x-0 top-0 z-30 w-full transition-all`,
            theme === "dark" && "dark",
          )}
        >
          {/* Scrolled background */}
          <div
            className={cn(
              "absolute inset-0 block border-b border-transparent transition-all",
              scrolled &&
                "border-neutral-100 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75",
            )}
          />
          <MaxWidthWrapper className={cn("relative", maxWidthWrapperClassName)}>
            <div className="flex h-14 items-center justify-between">
              <div className="grow basis-0">
                {logo ?? (
                  <Link
                    className="block w-fit py-2 pr-2"
                    href={createHref("/home", domain, {
                      utm_source: "Custom Domain",
                      utm_medium: "Navbar",
                      utm_campaign: domain,
                      utm_content: "Logo",
                    })}
                  >
                    <NavWordmark />
                  </Link>
                )}
              </div>
              <NavigationMenuPrimitive.Root
                delayDuration={0}
                className="relative hidden lg:block"
              >
                <NavigationMenuPrimitive.List className="group relative z-0 flex">
                  {items.map(({ name, href, segments, content: Content }) => {
                    const isActive = (segments ?? []).some((segment) =>
                      pathname?.startsWith(segment),
                    );
                    return (
                      <NavigationMenuPrimitive.Item key={name}>
                        <WithTrigger trigger={!!Content}>
                          {href !== undefined ? (
                            <Link
                              id={`nav-${href}`}
                              href={createHref(href, domain, {
                                utm_source: "Custom Domain",
                                utm_medium: "Navbar",
                                utm_campaign: domain,
                                utm_content: name,
                              })}
                              className={navItemClassName}
                              data-active={isActive}
                            >
                              {name}
                            </Link>
                          ) : (
                            <button
                              className={navItemClassName}
                              data-active={isActive}
                            >
                              {name}
                              <AnimatedChevron className="ml-1.5 size-2.5 text-neutral-700" />
                            </button>
                          )}
                        </WithTrigger>

                        {Content && (
                          <NavigationMenuPrimitive.Content className="data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0">
                            <Content domain={domain} />
                          </NavigationMenuPrimitive.Content>
                        )}
                      </NavigationMenuPrimitive.Item>
                    );
                  })}
                </NavigationMenuPrimitive.List>

                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2">
                  <NavigationMenuPrimitive.Viewport
                    className={cn(
                      "relative flex origin-[top_center] justify-start overflow-hidden rounded-[20px] border border-neutral-200 bg-white shadow-md dark:border-white/[0.15] dark:bg-black",
                      "data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content",
                      "h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] transition-[width,height]",
                    )}
                  />
                </div>
              </NavigationMenuPrimitive.Root>

              <div className="hidden grow basis-0 justify-end gap-2 lg:flex">
                {session && Object.keys(session).length > 0 ? (
                  <Link
                    href={APP_DOMAIN}
                    className={cn(
                      buttonVariants({ variant: "primary" }),
                      "flex h-8 items-center rounded-lg border px-4 text-sm",
                      "dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-50 dark:hover:ring-white/10",
                    )}
                  >
                    Dashboard
                  </Link>
                ) : !isLoading ? (
                  <>
                    <Link
                      href="https://app.dub.co/login"
                      className={cn(
                        buttonVariants({ variant: "secondary" }),
                        "flex h-8 items-center rounded-lg border px-4 text-sm",
                        "dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-neutral-900",
                      )}
                    >
                      Log in
                    </Link>
                    <Link
                      href="https://app.dub.co/register"
                      className={cn(
                        buttonVariants({ variant: "primary" }),
                        "flex h-8 items-center rounded-lg border px-4 text-sm",
                        "dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-50 dark:hover:ring-white/10",
                      )}
                    >
                      Sign up
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </LayoutGroup>
    </NavContext.Provider>
  );
}

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
}: PropsWithChildren<{ trigger: boolean }>) {
  return trigger ? (
    <NavigationMenuPrimitive.Trigger asChild>
      {children}
    </NavigationMenuPrimitive.Trigger>
  ) : (
    children
  );
}
```

#### `nav-mobile.tsx`

**Location:** `packages/ui/src/nav/` · **307 lines** · **Exports:** `NavMobile`, `AuthButton`

The mobile nav (below `lg`): a floating hamburger button plus a full-screen overlay panel. Imports `navItems` from `nav.tsx` so both breakpoints share one registry. Private helpers: `MobileNavItem` (expandable row backed by `AnimatedSizeContainer`), `ChildItem` (child link row), and `specialIcons` (per-product colored icon chips). `AuthButton` is exported and reused elsewhere in the app.

```tsx
"use client";

import { APP_DOMAIN, cn, createHref, fetcher } from "@dub/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ComponentProps, ReactNode, useEffect, useState } from "react";
import useSWR from "swr";
import { AnimatedSizeContainer } from "../animated-size-container";
import { ButtonProps, buttonVariants } from "../button";
import { NavItemChild, NavItemChildren } from "../content";
import {
  DubAnalyticsIcon,
  DubApiIcon,
  DubLinksIcon,
  DubPartnersIcon,
} from "../icons";
import { navItems, type NavItem, type NavTheme } from "./nav";

const specialIcons: Record<string, ReactNode> = {
  "Dub Links": (
    <div className="flex size-5 items-center justify-center rounded bg-orange-400">
      <DubLinksIcon className="size-3 text-orange-900" />
    </div>
  ),
  "Dub Partners": (
    <div className="flex size-5 items-center justify-center rounded bg-violet-400">
      <DubPartnersIcon className="size-3 text-violet-900" />
    </div>
  ),
  "Dub Analytics": (
    <div className="flex size-5 items-center justify-center rounded bg-green-400">
      <DubAnalyticsIcon className="size-3 text-green-900" />
    </div>
  ),
  "Dub API": (
    <div className="flex size-5 items-center justify-center rounded bg-neutral-400">
      <DubApiIcon className="size-3 text-neutral-900" />
    </div>
  ),
};

export function NavMobile({
  theme = "light",
  staticDomain,
  navItems: items = navItems,
}: {
  theme?: NavTheme;
  staticDomain?: string;
  navItems?: NavItem[];
}) {
  let { domain = "dub.co" } = useParams() as { domain: string };
  if (staticDomain) {
    domain = staticDomain;
  }

  const [open, setOpen] = useState(false);
  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const { data: session, isLoading } = useSWR(
    domain.endsWith("dub.co") && "/api/auth/session",
    fetcher,
    {
      dedupingInterval: 60000,
    },
  );

  return (
    <div
      className={cn(
        "fixed right-0 top-0 z-40 flex items-center gap-4 p-2.5 lg:hidden",
        theme === "dark" && "dark",
      )}
    >
      {session && Object.keys(session).length > 0 ? (
        <AuthButton href={APP_DOMAIN} className="max-[280px]:hidden">
          Dashboard
        </AuthButton>
      ) : !isLoading ? (
        <div className="flex gap-2 max-[280px]:hidden">
          <AuthButton variant="secondary" href={`${APP_DOMAIN}/login`}>
            Log in
          </AuthButton>

          <AuthButton href={`${APP_DOMAIN}/register`}>Sign Up</AuthButton>
        </div>
      ) : null}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "z-30 rounded-full p-2 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none active:bg-neutral-300 dark:hover:bg-white/20 dark:active:bg-white/30",
          open && "hover:bg-neutral-100 active:bg-neutral-200",
        )}
      >
        {open ? (
          <X className="h-5 w-5 text-neutral-600 dark:text-white/70" />
        ) : (
          <Menu className="h-5 w-5 text-neutral-600 dark:text-white/70" />
        )}
      </button>
      <nav
        className={cn(
          "fixed inset-0 z-20 hidden max-h-screen w-full overflow-y-auto bg-white px-5 py-16 lg:hidden dark:bg-black dark:text-white/70",
          open && "block",
        )}
      >
        <ul className="grid divide-y divide-neutral-200 dark:divide-white/[0.15]">
          {items.map(({ name, href, childItems }, idx) => (
            <MobileNavItem
              key={idx}
              name={name}
              href={href}
              childItems={childItems}
              setOpen={setOpen}
            />
          ))}

          {session && Object.keys(session).length > 0 ? (
            <li className="py-3 min-[281px]:hidden">
              <Link
                href={APP_DOMAIN}
                className="flex w-full font-semibold capitalize"
              >
                Dashboard
              </Link>
            </li>
          ) : (
            <>
              <li className="py-3 min-[281px]:hidden">
                <Link
                  href={`${APP_DOMAIN}/login`}
                  className="flex w-full font-semibold capitalize"
                >
                  Log in
                </Link>
              </li>

              <li className="py-3 min-[281px]:hidden">
                <Link
                  href={`${APP_DOMAIN}/register`}
                  className="flex w-full font-semibold capitalize"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

const MobileNavItem = ({
  name,
  href,
  childItems,
  setOpen,
}: {
  name: string;
  href?: string;
  childItems?: NavItemChildren;
  setOpen: (open: boolean) => void;
}) => {
  const { domain = "dub.co" } = useParams() as { domain: string };
  const [expanded, setExpanded] = useState(false);

  if (childItems) {
    return (
      <li className="py-3">
        <AnimatedSizeContainer height>
          <button
            className="flex w-full justify-between"
            onClick={() => setExpanded(!expanded)}
          >
            <p className="font-semibold">{name}</p>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-neutral-500 transition-all dark:text-white/50",
                expanded && "rotate-180",
              )}
            />
          </button>
          {expanded && (
            <div className="grid grid-cols-1 gap-4 overflow-hidden py-4">
              {childItems.map((item, idx) =>
                "items" in item ? (
                  <div key={idx} className="grid grid-cols-1 gap-3">
                    <span className="text-xs font-medium uppercase text-neutral-500 dark:text-white/50">
                      {item.label}
                    </span>
                    {item.items.map((childItem, childIdx) => (
                      <ChildItem
                        key={childIdx}
                        item={childItem}
                        setOpen={setOpen}
                        size="small"
                      />
                    ))}
                  </div>
                ) : (
                  <ChildItem key={idx} item={item} setOpen={setOpen} />
                ),
              )}
            </div>
          )}
        </AnimatedSizeContainer>
      </li>
    );
  }

  if (!href) {
    return null;
  }

  return (
    <li className="py-3">
      <Link
        href={createHref(href, domain, {
          utm_source: "Custom Domain",
          utm_medium: "Navbar",
          utm_campaign: domain,
          utm_content: name,
        })}
        onClick={() => setOpen(false)}
        className="flex w-full font-semibold capitalize"
      >
        {name}
      </Link>
    </li>
  );
};

const ChildItem = ({
  item: { title, description, href, icon: Icon },
  setOpen,
  size = "normal",
}: {
  item: NavItemChild;
  setOpen: (open: boolean) => void;
  size?: "normal" | "small";
}) => {
  const { domain = "dub.co" } = useParams() as { domain: string };

  const SpecialIcon = specialIcons?.[title];

  return (
    <Link
      href={createHref(href, domain, {
        utm_source: "Custom Domain",
        utm_medium: "Navbar",
        utm_campaign: domain,
        utm_content: title,
      })}
      onClick={() => setOpen(false)}
      className="flex w-full items-center gap-3"
    >
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-lg border border-neutral-200 bg-gradient-to-t from-neutral-100",
          size === "small" && "size-8",
        )}
      >
        {SpecialIcon ?? (
          <Icon
            className={cn(
              "size-5 text-neutral-700 grayscale",
              size === "small" && "size-4",
            )}
          />
        )}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-medium text-neutral-900">{title}</h2>
        </div>
        {description && (
          <p className="text-sm text-neutral-500">{description}</p>
        )}
      </div>
    </Link>
  );
};

export function AuthButton({
  variant,
  className,
  ...rest
}: Pick<ButtonProps, "variant"> & ComponentProps<typeof Link>) {
  return (
    <Link
      {...rest}
      className={cn(
        "flex h-8 w-fit items-center whitespace-nowrap rounded-lg border px-3 text-[0.8125rem]",
        buttonVariants({ variant }),
        className,
      )}
    />
  );
}
```

---

### Dropdown panels

#### `shared.tsx`

**Location:** `packages/ui/src/nav/content/` · **133 lines** · **Exports:** `ContentLinkCard`, `ContentIcon`, `ToolLinkCard`, `LargeLinkCard`, `NAV_UTM_PARAMS`, `contentHeadingClassName`, `contentLinkCardClassName`

Shared card components and styling tokens for the dropdown panels, plus the base UTM params every nav link is tagged with. Note that only `ContentLinkCard`, `NAV_UTM_PARAMS` and the two class-name constants are currently consumed by the three panels; `ContentIcon`, `ToolLinkCard` and `LargeLinkCard` are exported but unused.

```tsx
import { cn } from "@dub/utils";
import { Link as NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ComponentProps, ReactNode, SVGProps, type JSX } from "react";
import { ExpandingArrow, Icon } from "../../icons";

export const contentHeadingClassName =
  "text-xs uppercase text-neutral-500 dark:text-white/60";

export const contentLinkCardClassName =
  "group rounded-[8px] p-2 transition-colors hover:bg-neutral-50 active:bg-neutral-100 dark:hover:bg-white/[0.15] dark:active:bg-white/20";

export const NAV_UTM_PARAMS = {
  utm_source: "Custom Domain",
  utm_medium: "Navbar",
};

export function ContentLinkCard({
  icon,
  title,
  description,
  descriptionLines = 1,
  className,
  showArrow,
  ...rest
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  descriptionLines?: 1 | 2;
  showArrow?: boolean;
} & ComponentProps<typeof Link>) {
  return (
    <NavigationMenuLink asChild>
      <Link className={cn(contentLinkCardClassName, className)} {...rest}>
        <div className="flex items-center justify-between gap-3">
          {icon}
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-700 dark:text-white">
              {title}
            </p>
            {description && (
              <p
                className={cn(
                  "text-xs text-neutral-500 dark:text-white/60",
                  ["line-clamp-1", "line-clamp-2"][descriptionLines - 1],
                )}
              >
                {description}
              </p>
            )}
          </div>
          {showArrow && (
            <ExpandingArrow className="invisible -ml-6 h-4 w-4 text-neutral-700 group-aria-selected:visible sm:group-hover:visible dark:text-white/80" />
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

export function ContentIcon({
  icon: Icon,
}: {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}) {
  return (
    <div className="shrink-0 rounded-[10px] border border-neutral-200 bg-white/50 p-3 dark:border-white/20 dark:bg-white/10">
      <Icon className="h-4 w-4 text-black transition-transform group-hover:scale-110 dark:text-white/80" />
    </div>
  );
}

export function ToolLinkCard({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group relative isolate overflow-hidden rounded-[8px] border border-neutral-100 p-3 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-200 hover:bg-neutral-100 active:bg-neutral-200 dark:border-white/20 dark:text-white/80 dark:hover:bg-white/[0.15] dark:active:bg-white/20"
      >
        <div className="absolute -bottom-5 -right-3 -z-[1] w-14">{icon}</div>
        {name}
      </Link>
    </NavigationMenuLink>
  );
}

export function LargeLinkCard({
  icon: Icon,
  title,
  description,
  iconClassName,
  ...rest
}: {
  icon: Icon;
  title: string;
  description?: string;
  iconClassName?: string;
} & ComponentProps<typeof Link>) {
  return (
    <NavigationMenuLink asChild>
      <Link
        {...rest}
        className="group relative flex flex-col justify-center rounded-xl border border-neutral-100 bg-neutral-50 transition-colors duration-150 hover:bg-neutral-100 active:bg-neutral-200 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/20"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <span className="text-sm font-medium leading-none text-neutral-900 dark:text-white">
              {title}
            </span>
            <p className="mt-1 text-sm text-neutral-500 dark:text-white/60">
              {description}
            </p>
          </div>
          <Icon
            className={cn(
              "size-6 text-neutral-700 dark:text-neutral-200",
              iconClassName,
            )}
          />
        </div>
      </Link>
    </NavigationMenuLink>
  );
}
```

#### `product-content.tsx`

**Location:** `packages/ui/src/nav/content/` · **182 lines** · **Exports:** `ProductContent`

The "Product" mega-menu. Three product cards (Links / Analytics / Partners) in a 3-column grid — each with a `Grid` background, icon chip, copy, an illustration, and a radial brand-color glow that intensifies on hover — above a 2-column row of large links (Integrations, API and MCP) using remote thumbnail images. Fixed at `w-[1020px]`.

```tsx
import { cn, createHref } from "@dub/utils";
import { Link as NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import { Grid } from "../..";
import { DubAnalyticsIcon, DubLinksIcon, DubPartnersIcon } from "../../icons";
import { AnalyticsGraphic } from "./graphics/analytics-graphic";
import { LinksGraphic } from "./graphics/links-graphic";
import { PartnersGraphic } from "./graphics/partners-graphic";
import { NAV_UTM_PARAMS } from "./shared";

const products = [
  {
    icon: (
      <div className="flex size-4 items-center justify-center rounded bg-orange-400">
        <DubLinksIcon className="size-2.5 text-orange-900" />
      </div>
    ),
    title: "Dub Links",
    description: "Short links with superpowers for modern marketing teams.",
    href: "/links",
    color: "#f4950c",
    graphicsContainerClassName: "px-2",
    graphic: <LinksGraphic className="absolute left-0 top-0 h-auto w-full" />,
  },
  {
    icon: (
      <div className="flex size-4 items-center justify-center rounded bg-green-400">
        <DubAnalyticsIcon className="size-2.5 text-green-900" />
      </div>
    ),
    title: "Dub Analytics",
    description: "Powerful analytics delivered instantly.",
    href: "/analytics",
    color: "#36D78F",
    graphicsContainerClassName: "h-[170%] bottom-0 top-[unset]",
    graphic: (
      <AnalyticsGraphic className="absolute bottom-0 left-0 size-full" />
    ),
  },
  {
    icon: (
      <div className="flex size-4 items-center justify-center rounded bg-violet-400">
        <DubPartnersIcon className="size-2.5 text-violet-900" />
      </div>
    ),
    title: "Dub Partners",
    description: "Grow your revenue on auto-pilot with partnerships.",
    href: "/partners",
    color: "#818cf8",
    graphicsContainerClassName: "pl-2",
    graphic: <PartnersGraphic />,
  },
];

const largeLinks = [
  {
    title: "Dub Integrations",
    description: "Connect Dub with your favorite tools",
    href: "/integrations",
    graphic: (
      <div className="absolute -right-6 top-1/2 h-[180px] w-[240px] -translate-y-1/2 [mask-image:linear-gradient(90deg,black_50%,transparent_95%)] dark:opacity-80">
        <Image
          src="https://assets.dub.co/cms/integrations-grid2.png"
          alt=""
          fill
        />
      </div>
    ),
  },
  {
    title: "Dub API & MCP",
    description: "Connect your agent to Dub",
    href: "/docs/api-reference/introduction",
    graphic: (
      <div className="absolute -right-4 top-2.5 h-[180px] w-[240px] [mask-image:linear-gradient(90deg,black_50%,transparent_95%)] dark:opacity-60">
        <Image src="https://assets.dub.co/misc/api-thumbnail.png" alt="" fill />
      </div>
    ),
  },
];

export function ProductContent({ domain }: { domain: string }) {
  return (
    <div className="grid w-[1020px] grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-3 gap-4">
        {products.map(
          ({
            title,
            description,
            icon,
            href,
            color,
            graphicsContainerClassName,
            graphic,
          }) => (
            <NavigationMenuLink asChild key={title}>
              <Link
                href={createHref(href, domain, {
                  ...NAV_UTM_PARAMS,
                  utm_campaign: domain,
                  utm_content: title,
                })}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-white/20 dark:bg-white/10"
              >
                <Grid
                  className="[mask-image:linear-gradient(transparent,black,transparent)] dark:text-white/5"
                  cellSize={60}
                  patternOffset={[-51, -23]}
                />
                <div className="relative p-5 pb-0">
                  {icon}
                  <span className="mt-3 block text-sm font-medium text-neutral-900 dark:text-white">
                    {title}
                  </span>
                  <p className="mt-2 max-w-56 text-sm text-neutral-500 dark:text-white/60">
                    {description}
                  </p>
                </div>
                <div className="relative mt-10 h-40 grow">
                  <div
                    className={cn(
                      "absolute left-0 top-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)]",
                      graphicsContainerClassName,
                    )}
                  >
                    <div className="relative size-full">{graphic}</div>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color),transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-15"
                  style={
                    {
                      "--color": color,
                    } as CSSProperties
                  }
                />
              </Link>
            </NavigationMenuLink>
          ),
        )}
      </div>
      <div className="grid grow grid-cols-2 gap-4">
        {largeLinks.map(({ title, description, href, graphic }) => (
          <NavigationMenuLink asChild key={title}>
            <Link
              href={createHref(href, domain, {
                ...NAV_UTM_PARAMS,
                utm_campaign: domain,
                utm_content: title,
              })}
              className="group relative flex flex-col justify-center rounded-xl border border-neutral-100 bg-neutral-50 transition-colors duration-150 hover:bg-neutral-100 active:bg-neutral-200 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/20"
            >
              <Grid
                className="[mask-image:linear-gradient(90deg,transparent,black)] dark:text-white/5"
                cellSize={60}
                patternOffset={[-32, -49]}
              />
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden
              >
                {graphic}
              </div>
              <div className="relative flex items-center justify-between px-5 py-4">
                <div>
                  <span className="text-sm font-medium leading-none text-neutral-900 dark:text-white">
                    {title}
                  </span>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-white/60">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  );
}
```

#### `solutions-content.tsx`

**Location:** `packages/ui/src/nav/content/` · **116 lines** · **Exports:** `SolutionsContent`

The "Solutions" mega-menu. Two columns split `minmax(0,1fr)` / `0.4fr` with a divider: "Use case" cards on the left (skewed animated `Grid` plus a conic-gradient blur revealed on hover), SDK links from the shared `SDKS` array on the right.

```tsx
import { cn, createHref } from "@dub/utils";
import { Link as NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { SDKS } from "../../content";
import { Grid } from "../../grid";
import { DiamondTurnRight, Microphone, Users } from "../../icons";
import {
  ContentLinkCard,
  NAV_UTM_PARAMS,
  contentHeadingClassName,
} from "./shared";

const mainLinks = [
  {
    icon: DiamondTurnRight,
    title: "Marketing Attribution",
    description: "Easily track and measure marketing impact",
    href: "/analytics",
  },
  {
    icon: Microphone,
    title: "Content Creators",
    description: "Intelligent audience insights and link tracking",
    href: "/solutions/creators",
  },
  {
    icon: Users,
    title: "Affiliate Management",
    description: "Manage affiliates and automate payouts",
    href: "/partners",
  },
];

export function SolutionsContent({ domain }: { domain: string }) {
  return (
    <div className="grid w-[1020px] grid-cols-[minmax(0,1fr),0.4fr] divide-x divide-neutral-200 dark:divide-white/20">
      <div className="flex h-full flex-col p-4">
        <p className={cn(contentHeadingClassName, "mb-4 ml-2")}>Use case</p>
        <div className="grid grow grid-cols-3 gap-4">
          {mainLinks.map(({ icon: Icon, title, description, href }) => (
            <NavigationMenuLink key={title} asChild>
              <Link
                key={title}
                href={createHref(href, domain, {
                  ...NAV_UTM_PARAMS,
                  utm_campaign: domain,
                  utm_content: title,
                })}
                className={cn(
                  "group relative isolate z-0 flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 px-5 py-4 transition-colors duration-75",
                  "dark:border-white/20 dark:bg-neutral-900",
                )}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  <div className="absolute -inset-[25%] -skew-y-12 [mask-image:linear-gradient(225deg,black,transparent_50%)]">
                    <Grid
                      cellSize={46}
                      patternOffset={[0, -14]}
                      className="translate-y-2 text-[#ad1f3288] transition-transform duration-150 ease-out group-hover:translate-y-0"
                    />
                  </div>
                  <div
                    className={cn(
                      "absolute -inset-[10%] opacity-10 blur-[50px] dark:brightness-150",
                      "bg-[conic-gradient(#F35066_0deg,#F35066_117deg,#9071F9_180deg,#5182FC_240deg,#F35066_360deg)]",
                    )}
                  />
                </div>
                <Icon
                  variant="fill"
                  className="relative size-5 text-neutral-700 dark:text-white/60"
                />
                <div className="relative">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    {title}
                  </span>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-white/60">
                    {description}
                  </p>
                </div>
              </Link>
            </NavigationMenuLink>
          ))}
        </div>
      </div>
      <div className="px-6 py-4">
        <p className={cn(contentHeadingClassName, "mb-2")}>SDKs</p>
        <div className="flex flex-col gap-0.5">
          {SDKS.map(({ icon: Icon, iconClassName, title, href }) => (
            <ContentLinkCard
              key={href}
              className="-mx-2"
              href={createHref(href, domain, {
                ...NAV_UTM_PARAMS,
                utm_campaign: domain,
                utm_content: title,
              })}
              icon={
                <div className="shrink-0 rounded-[10px] border border-neutral-200 bg-white/50 p-1 dark:border-white/20 dark:bg-white/10">
                  <Icon
                    className={cn(
                      "size-5 text-neutral-600 transition-colors dark:text-white/60",
                      iconClassName,
                    )}
                  />
                </div>
              }
              title={title}
              showArrow
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```

#### `resources-content.tsx`

**Location:** `packages/ui/src/nav/content/` · **142 lines** · **Exports:** `ResourcesContent`

The "Resources" mega-menu. Three columns (`0.9fr / 0.55fr / 0.55fr`): "Explore" cards (Help Center, Docs) using the same hover treatment as Solutions, then "Company" and "Updates" columns derived by filtering the shared `RESOURCES` array by title.

```tsx
import { cn, createHref } from "@dub/utils";
import { Link as NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { RESOURCES } from "../../content";
import { Grid } from "../../grid";
import { Book2, LifeRing } from "../../icons";
import {
  ContentLinkCard,
  NAV_UTM_PARAMS,
  contentHeadingClassName,
} from "./shared";

const mainLinks = [
  {
    icon: LifeRing,
    title: "Help Center",
    description: "Answers to your questions",
    thumbnail: "https://assets.dub.co/misc/help-thumbnail.jpg",
    href: "/help",
  },
  {
    icon: Book2,
    title: "Docs",
    description: "Platform documentation",
    thumbnail: "https://assets.dub.co/misc/docs-thumbnail.jpg",
    href: "/docs",
  },
];

export function ResourcesContent({ domain }: { domain: string }) {
  return (
    <div className="grid w-[1020px] grid-cols-[0.9fr,0.55fr,0.55fr] divide-x divide-neutral-200 dark:divide-white/20">
      <div className="flex h-full flex-col p-4">
        <p className={cn(contentHeadingClassName, "mb-4 ml-2")}>Explore</p>
        <div className="grid grow grid-cols-2 gap-4">
          {mainLinks.map(({ icon: Icon, title, description, href }) => (
            <NavigationMenuLink key={title} asChild>
              <Link
                key={title}
                href={createHref(href, domain, {
                  ...NAV_UTM_PARAMS,
                  utm_campaign: domain,
                  utm_content: title,
                })}
                className={cn(
                  "group relative isolate z-0 flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 px-5 py-4 transition-colors duration-75",
                  "dark:border-white/20 dark:bg-neutral-900",
                )}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  <div className="absolute -inset-[25%] -skew-y-12 [mask-image:linear-gradient(225deg,black,transparent_50%)]">
                    <Grid
                      cellSize={46}
                      patternOffset={[0, -14]}
                      className="translate-y-2 text-[#ad1f3288] transition-transform duration-150 ease-out group-hover:translate-y-0"
                    />
                  </div>
                  <div
                    className={cn(
                      "absolute -inset-[10%] opacity-10 blur-[50px] dark:brightness-150",
                      "bg-[conic-gradient(#F35066_0deg,#F35066_117deg,#9071F9_180deg,#5182FC_240deg,#F35066_360deg)]",
                    )}
                  />
                </div>
                <Icon
                  variant="fill"
                  className="relative size-5 text-neutral-700 dark:text-white/60"
                />
                <div className="relative">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    {title}
                  </span>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-white/60">
                    {description}
                  </p>
                </div>
              </Link>
            </NavigationMenuLink>
          ))}
        </div>
      </div>

      <div className="px-6 py-4">
        <p className={cn(contentHeadingClassName, "mb-2")}>Company</p>
        <div className="flex flex-col gap-0.5">
          {RESOURCES.filter(({ title }) =>
            ["About", "Careers", "Brand Guidelines", "Contact"].includes(title),
          ).map(({ icon: Icon, title, description, href }) => (
            <ContentLinkCard
              key={href}
              className="-mx-2"
              href={createHref(href, domain, {
                ...NAV_UTM_PARAMS,
                utm_campaign: domain,
                utm_content: title,
              })}
              icon={
                <div className="shrink-0 rounded-md border border-neutral-200 bg-white/50 p-2.5 dark:border-white/20 dark:bg-white/10">
                  <Icon
                    variant="fill"
                    className="size-4 text-neutral-600 transition-colors dark:text-white/60"
                  />
                </div>
              }
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-4">
        <p className={cn(contentHeadingClassName, "mb-2")}>Updates</p>
        <div className="flex flex-col gap-0.5">
          {RESOURCES.filter(({ title }) =>
            ["Blog", "Changelog"].includes(title),
          ).map(({ icon: Icon, title, description, href }) => (
            <ContentLinkCard
              key={href}
              className="-mx-2"
              href={createHref(href, domain, {
                ...NAV_UTM_PARAMS,
                utm_campaign: domain,
                utm_content: title,
              })}
              icon={
                <div className="shrink-0 rounded-md border border-neutral-200 bg-white/50 p-2.5 dark:border-white/20 dark:bg-white/10">
                  <Icon
                    variant="fill"
                    className="size-4 text-neutral-600 transition-colors dark:text-white/60"
                  />
                </div>
              }
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

### Dropdown graphics

#### `links-graphic.tsx`

**Location:** `packages/ui/src/nav/content/graphics/` · **445 lines** · **Exports:** `LinksGraphic`

A 300x180 inline SVG illustration for the Dub Links product card. Themed by declaring CSS custom properties (`--bg`, `--border`, `--fg`, `--muted`) on the root and overriding them under `dark:`, so one SVG serves both themes. `useId()` namespaces the `<defs>` ids so multiple instances do not collide.

```tsx
import { cn } from "@dub/utils";
import { SVGProps, useId } from "react";

export function LinksGraphic(props: SVGProps<SVGSVGElement>) {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="300"
      height="180"
      fill="none"
      viewBox="0 0 300 180"
      {...props}
      className={cn(
        "pointer-events-none text-[var(--fg)] [--bg:white] [--border:#e5e5e5] [--fg:#171717] [--muted:#404040] dark:[--bg:black] dark:[--border:#fff3] dark:[--fg:#fffa] dark:[--muted:#fff7]",
        props.className,
      )}
    >
      <defs>
        <path
          id={`${id}-m`}
          className="fill-[var(--bg)]"
          d="M0 0h10.24v10.24H0z"
        ></path>
        <path
          id={`${id}-n`}
          className="fill-[var(--bg)]"
          d="M0 0h8.05v8.05H0z"
        ></path>
        <path
          id={`${id}-o`}
          className="fill-[var(--bg)]"
          d="M0 0h11.71v11.71H0z"
        ></path>
      </defs>
      <rect
        width="292"
        height="52"
        x="4"
        y="4"
        rx="8.78"
        className="fill-[var(--bg)]"
      ></rect>
      <rect
        width="292"
        height="52"
        x="4"
        y="4"
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        rx="8.78"
      ></rect>
      <rect
        width="24.88"
        height="24.88"
        x="17.17"
        y="17.56"
        fill={`url(#${id}-a)`}
        rx="12.44"
      ></rect>
      <rect
        width="25.61"
        height="25.61"
        x="16.8"
        y="17.2"
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        rx="12.8"
      ></rect>
      <path
        className="fill-[var(--fg)]"
        d="M29.61 23c.6 0 1.19.08 1.75.22v3.75a3.5 3.5 0 1 0 0 6.06v.47h1.75v-9.56a7 7 0 1 1-3.5-.94m2.29.39"
      ></path>
      <text
        xmlSpace="preserve"
        className="fill-[var(--fg)]"
        fontSize="10.24"
        fontWeight="600"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="50.83" y="25.49">
          d.to
        </tspan>
      </text>
      <g
        className="stroke-[var(--fg)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-b)`}
      >
        <path d="M84.47 26.08h3.98c.63 0 1.14-.51 1.14-1.14v-3.98c0-.63-.51-1.14-1.14-1.14h-3.98c-.63 0-1.14.5-1.14 1.14v3.98c0 .63.5 1.14 1.14 1.14"></path>
        <path d="M82.05 24a1.14 1.14 0 0 1-.71-1.05v-3.99c0-.63.5-1.13 1.14-1.13h3.98c.48 0 .89.29 1.05.7"></path>
      </g>
      <path
        className="stroke-[var(--fg)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        d="M106.87 23.66h-1.29a.85.85 0 0 0-.85.85v1.28m-1.71-5.97v1.28a.85.85 0 0 1-.85.85h-1.28m3.84.01h.43m-2.14 3.83v-.42m-3.41-7.26h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m5.55 0h1.28c.23 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m-5.55 5.55h1.28c.24 0 .43.19.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43"
      ></path>
      <g
        stroke="#A1A1A1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-c)`}
      >
        <path d="M59.11 38.38h-4.7a.9.9 0 0 1-.89-.89V35.7"></path>
        <path d="m57.21 36.48 1.9 1.9-1.9 1.9"></path>
      </g>
      <text
        xmlSpace="preserve"
        fill="#737373"
        fontSize="10.24"
        fontWeight="500"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="63.27" y="41.59">
          dub.co
        </tspan>
      </text>
      <path
        className="fill-[var(--bg)]"
        d="M205.12 19.4h69.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-69.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
      ></path>
      <path
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        d="M205.12 19.4h69.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-69.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
      ></path>
      <g
        className="stroke-[var(--muted)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-d)`}
      >
        <path d="m209.95 29.2 4.75 1.64c.15.05.15.25 0 .3l-2.13.8a.16.16 0 0 0-.09.1l-.8 2.13a.16.16 0 0 1-.3 0l-1.64-4.76a.16.16 0 0 1 .2-.2h0Zm2.55 2.77 2.75 2.74m-5.53-9.43v1.3m2.76-.15-.92.92m-4.6 4.6.92-.92m-2.06-1.84h1.3m-.16-2.76.92.92"></path>
      </g>
      <text
        xmlSpace="preserve"
        className="fill-[var(--muted)]"
        fontSize="8.78"
        fontWeight="500"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="220.78" y="33.19">
          151.8K clicks
        </tspan>
      </text>
      <rect
        width="292"
        height="52"
        x="4"
        y="64"
        rx="8.78"
        className="fill-[var(--bg)]"
      ></rect>
      <rect
        width="292"
        height="52"
        x="4"
        y="64"
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        rx="8.78"
      ></rect>
      <rect
        width="24.88"
        height="24.88"
        x="17.17"
        y="77.56"
        fill={`url(#${id}-e)`}
        rx="12.44"
      ></rect>
      <rect
        width="25.61"
        height="25.61"
        x="16.8"
        y="77.19"
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        rx="12.8"
      ></rect>
      <path
        className="fill-[var(--fg)]"
        d="M29.61 83c.6 0 1.19.08 1.75.22v3.75a3.5 3.5 0 1 0 0 6.06v.47h1.75v-9.56a7 7 0 1 1-3.5-.94m2.29.39"
      ></path>
      <text
        xmlSpace="preserve"
        className="fill-[var(--fg)]"
        fontSize="10.24"
        fontWeight="600"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="50.83" y="85.49">
          d.to/register
        </tspan>
      </text>
      <g
        className="stroke-[var(--fg)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-f)`}
      >
        <path d="M126.47 86.08h3.98c.63 0 1.14-.51 1.14-1.14v-3.98c0-.63-.51-1.14-1.14-1.14h-3.98c-.63 0-1.14.5-1.14 1.14v3.98c0 .63.5 1.14 1.14 1.14"></path>
        <path d="M124.05 84a1.14 1.14 0 0 1-.71-1.05v-3.99c0-.63.5-1.13 1.13-1.13h3.99c.48 0 .89.29 1.05.7"></path>
      </g>
      <path
        className="stroke-[var(--fg)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        d="M148.87 83.66h-1.28a.85.85 0 0 0-.86.85v1.28m-1.71-5.97v1.28a.85.85 0 0 1-.85.85h-1.28m3.84.01h.43m-2.14 3.83v-.42m-3.41-7.26h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m5.55 0h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m-5.55 5.55h1.28c.24 0 .43.19.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43"
      ></path>
      <g
        stroke="#A1A1A1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-g)`}
      >
        <path d="M59.11 98.38h-4.7a.9.9 0 0 1-.89-.89V95.7"></path>
        <path d="m57.21 96.48 1.9 1.9-1.9 1.9"></path>
      </g>
      <text
        xmlSpace="preserve"
        fill="#737373"
        fontSize="10.24"
        fontWeight="500"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="63.27" y="101.59">
          app.dub.co/register
        </tspan>
      </text>
      <path
        className="fill-[var(--bg)]"
        d="M211.12 79.4h63.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4.03 4.03 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-63.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
      ></path>
      <path
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        d="M211.12 79.4h63.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4.03 4.03 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-63.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
      ></path>
      <g
        className="stroke-[var(--muted)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-h)`}
      >
        <path d="m215.95 89.2 4.75 1.64c.15.05.15.25 0 .3l-2.13.8a.16.16 0 0 0-.09.1l-.8 2.13a.16.16 0 0 1-.3 0l-1.64-4.76a.16.16 0 0 1 .2-.2h0Zm2.55 2.77 2.75 2.74m-5.53-9.43v1.3m2.76-.15-.92.92m-4.6 4.6.92-.92m-2.06-1.84h1.3m-.16-2.76.92.92"></path>
      </g>
      <text
        xmlSpace="preserve"
        className="fill-[var(--muted)]"
        fontSize="8.78"
        fontWeight="500"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="226.78" y="93.19">
          100K clicks
        </tspan>
      </text>
      <path
        className="fill-[var(--bg)]"
        d="M4 138.05c0-4.92 0-7.38.96-9.26a8.7 8.7 0 0 1 3.83-3.83c1.88-.96 4.34-.96 9.26-.96h263.9c4.92 0 7.38 0 9.26.96a8.7 8.7 0 0 1 3.83 3.83c.96 1.88.96 4.34.96 9.26v23.9c0 4.92 0 7.38-.96 9.26a8.78 8.78 0 0 1-3.83 3.83c-1.88.96-4.34.96-9.26.96H18.05c-4.92 0-7.38 0-9.26-.96a8.78 8.78 0 0 1-3.83-3.83C4 169.33 4 166.87 4 161.95z"
      ></path>
      <path
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        d="M4 138.05c0-4.92 0-7.38.96-9.26a8.7 8.7 0 0 1 3.83-3.83c1.88-.96 4.34-.96 9.26-.96h263.9c4.92 0 7.38 0 9.26.96a8.7 8.7 0 0 1 3.83 3.83c.96 1.88.96 4.34.96 9.26v23.9c0 4.92 0 7.38-.96 9.26a8.78 8.78 0 0 1-3.83 3.83c-1.88.96-4.34.96-9.26.96H18.05c-4.92 0-7.38 0-9.26-.96a8.78 8.78 0 0 1-3.83-3.83C4 169.33 4 166.87 4 161.95z"
      ></path>
      <rect
        width="24.88"
        height="24.88"
        x="17.17"
        y="137.56"
        fill={`url(#${id}-i)`}
        rx="12.44"
      ></rect>
      <rect
        width="25.61"
        height="25.61"
        x="16.8"
        y="137.19"
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        rx="12.8"
      ></rect>
      <path
        className="fill-[var(--fg)]"
        d="M29.61 143c.6 0 1.19.08 1.75.22v3.75a3.5 3.5 0 1 0 0 6.06v.47h1.75v-9.56a7 7 0 1 1-3.5-.94m2.29.39"
      ></path>
      <text
        xmlSpace="preserve"
        className="fill-[var(--fg)]"
        fontSize="10.24"
        fontWeight="600"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="50.83" y="145.49">
          d.to/try
        </tspan>
      </text>
      <g
        className="stroke-[var(--fg)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-j)`}
      >
        <path d="M102.47 146.08h3.98c.63 0 1.14-.51 1.14-1.14v-3.98c0-.63-.51-1.14-1.14-1.14h-3.98c-.63 0-1.14.5-1.14 1.14v3.98c0 .63.5 1.14 1.14 1.14"></path>
        <path d="M100.05 144a1.14 1.14 0 0 1-.71-1.05v-3.99c0-.63.5-1.14 1.13-1.14h3.99c.48 0 .89.3 1.06.72"></path>
      </g>
      <path
        className="stroke-[var(--fg)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        d="M124.87 143.66h-1.29a.85.85 0 0 0-.85.85v1.28m-1.71-5.97v1.28a.85.85 0 0 1-.85.85h-1.28m3.84.01h.43m-2.14 3.83v-.42m-3.41-7.26h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m5.55 0h1.28c.23 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m-5.55 5.55h1.28c.24 0 .43.19.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43"
      ></path>
      <g
        stroke="#A1A1A1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-k)`}
      >
        <path d="M59.11 158.38h-4.7a.9.9 0 0 1-.89-.89v-1.79"></path>
        <path d="m57.21 156.48 1.9 1.9-1.9 1.9"></path>
      </g>
      <text
        xmlSpace="preserve"
        fill="#737373"
        fontSize="10.24"
        fontWeight="500"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="63.27" y="161.59">
          app.dub.co/register
        </tspan>
      </text>
      <path
        className="fill-[var(--bg)]"
        d="M208.12 139.4h66.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.86a4.6 4.6 0 0 1-.3 1.44l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-66.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.86.06-.7.17-1.2.38-1.6.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
      ></path>
      <path
        className="stroke-[var(--border)]"
        strokeWidth="0.73"
        d="M208.12 139.4h66.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.86a4.6 4.6 0 0 1-.3 1.44l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-66.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.86.06-.7.17-1.2.38-1.6.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
      ></path>
      <g
        className="stroke-[var(--muted)]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        clipPath={`url(#${id}-l)`}
      >
        <path d="m212.95 149.2 4.75 1.64c.15.05.15.25 0 .3l-2.13.8a.17.17 0 0 0-.09.1l-.8 2.13a.16.16 0 0 1-.3 0l-1.64-4.76a.16.16 0 0 1 .2-.2h0Zm2.55 2.77 2.75 2.74m-5.53-9.43v1.3m2.76-.15-.92.92m-4.6 4.6.92-.92m-2.06-1.84h1.3m-.16-2.76.92.92"></path>
      </g>
      <text
        xmlSpace="preserve"
        className="fill-[var(--muted)]"
        fontSize="8.78"
        fontWeight="500"
        style={{ whiteSpace: "pre" }}
      >
        <tspan x="223.78" y="153.19">
          65.8K clicks
        </tspan>
      </text>
      <defs>
        <clipPath id={`${id}-b`}>
          <use xlinkHref={`#${id}-m`} transform="translate(80.34 16.83)"></use>
        </clipPath>
        <clipPath id={`${id}-c`}>
          <use xlinkHref={`#${id}-n`} transform="translate(52.3 34.02)"></use>
        </clipPath>
        <clipPath id={`${id}-d`}>
          <use xlinkHref={`#${id}-o`} transform="translate(204.68 24.15)"></use>
        </clipPath>
        <clipPath id={`${id}-f`}>
          <use xlinkHref={`#${id}-m`} transform="translate(122.34 76.83)"></use>
        </clipPath>
        <clipPath id={`${id}-g`}>
          <use xlinkHref={`#${id}-n`} transform="translate(52.3 94.02)"></use>
        </clipPath>
        <clipPath id={`${id}-h`}>
          <use xlinkHref={`#${id}-o`} transform="translate(210.68 84.15)"></use>
        </clipPath>
        <clipPath id={`${id}-j`}>
          <use xlinkHref={`#${id}-m`} transform="translate(98.34 136.83)"></use>
        </clipPath>
        <clipPath id={`${id}-k`}>
          <use xlinkHref={`#${id}-n`} transform="translate(52.3 154.02)"></use>
        </clipPath>
        <clipPath id={`${id}-l`}>
          <use
            xlinkHref={`#${id}-o`}
            transform="translate(207.68 144.15)"
          ></use>
        </clipPath>
        <linearGradient
          id={`${id}-a`}
          x1="29.61"
          x2="29.61"
          y1="17.56"
          y2="42.44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#030712" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#030712" stopOpacity="0.05"></stop>
        </linearGradient>
        <linearGradient
          id={`${id}-e`}
          x1="29.61"
          x2="29.61"
          y1="77.56"
          y2="102.44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#030712" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#030712" stopOpacity="0.05"></stop>
        </linearGradient>
        <linearGradient
          id={`${id}-i`}
          x1="29.61"
          x2="29.61"
          y1="137.56"
          y2="162.44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#030712" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#030712" stopOpacity="0.05"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
```

#### `analytics-graphic.tsx`

**Location:** `packages/ui/src/nav/content/graphics/` · **148 lines** · **Exports:** `AnalyticsGraphic`

Illustration for the Dub Analytics card: a masked teal line-chart SVG with a highlight dot, overlaid with two absolutely-positioned DOM cards (a clicks/leads/sales breakdown and a customer detail card). Demo data is hardcoded at the top. The avatar comes from a single spritesheet image offset via `backgroundPositionX`.

```tsx
import { capitalize, cn } from "@dub/utils";
import { Link2 } from "lucide-react";
import { CursorRays } from "../../../icons";

const data = {
  clicks: {
    color: "#3B82F6",
    value: "12.5K",
  },
  leads: {
    color: "#A855F7",
    value: "8.2K",
  },
  sales: {
    color: "#14B8A6",
    value: "$12K",
  },
};

const CUSTOMER = {
  name: "Danielle Wilson",
  email: "danielle@dub.co",
  avatarIndex: 8,
  origin: "dub.sh",
  country: "US",
  details: {
    "Lifetime value": "$12.5k",
    Account: "Pro",
    Subscription: "2y 10m",
  },
};

export function AnalyticsGraphic({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none relative size-full", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 339 168"
        className="h-auto w-full [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      >
        <path
          stroke="#00BBA7"
          strokeWidth="2"
          d="m345 1-60.533 76.487a8 8 0 0 1-9.732 2.25l-25.53-12.241a8 8 0 0 0-9.214 1.657l-62.736 64.993a8 8 0 0 1-6.695 2.388L67.303 124.331a8 8 0 0 0-5.193 1.17L-3.166 166.5"
        />
        <circle cx="259.333" cy="72" r="3" fill="#00BBA7" />
        <circle
          cx="259.333"
          cy="72"
          r="4"
          stroke="#3EC5B8"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute bottom-0 left-5 flex items-start gap-2">
        {/* Data */}
        <div className="border-border-default bg-bg-default w-[172px] rounded-lg border p-0">
          <div className="p-1.5">
            <div className="bg-bg-subtle border-border-subtle text-content-default hidden items-center gap-2 rounded border p-2 text-xs font-medium leading-none sm:flex">
              <Link2 className="size-3 rotate-90" />
              d.to/try
            </div>
            <div className="text-content-default mt-1 px-1.5 pb-0.5 text-[0.8125rem] font-medium sm:mt-2">
              Apr 2025
            </div>
          </div>
          <div className="border-border-default flex flex-col gap-2 border-t p-3">
            {(["clicks", "leads", "sales"] as const).map((key) => (
              <div
                className="flex items-center justify-between gap-2"
                key={key}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="size-2 rounded-sm border border-black/20 bg-current opacity-70"
                    style={{ color: data[key].color }}
                  />
                  <div className="text-content-subtle text-xs font-medium leading-none">
                    {capitalize(key)}
                  </div>
                </div>
                <span className="text-content-emphasis text-xs leading-none">
                  {key === "sales" ? "$" : ""}
                  {data[key].value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer */}
        <div className="relative">
          <div className="border-border-default bg-bg-default absolute left-0 top-0 rounded-lg border py-0.5">
            <div className="px-3 py-2.5">
              <div className="flex justify-between gap-2">
                <div
                  className="bg-bg-emphasis size-11 rounded-full"
                  style={{
                    backgroundImage:
                      "url(https://assets.dub.co/home/people.png)",
                    backgroundSize: "3600%", // 36 images
                    backgroundPositionX: CUSTOMER.avatarIndex * 100 + "%",
                  }}
                />
                <div className="flex flex-col items-end gap-1">
                  <div className="bg-bg-default border-border-subtle text-content-default flex items-center gap-1.5 rounded-full border px-1.5 py-0.5 text-xs">
                    <CursorRays className="text-content-default size-3.5" />
                    {CUSTOMER.origin}
                  </div>
                  <div className="bg-bg-default border-border-subtle text-content-default flex items-center gap-1.5 rounded-full border px-1.5 py-0.5 text-xs">
                    <img
                      src={`https://flag.vercel.app/m/${CUSTOMER.country}.svg`}
                      className="relative h-2.5 w-3 rounded-sm"
                    />
                    {CUSTOMER.country}
                  </div>
                </div>
              </div>
              <div className="text-content-emphasis mt-4 text-[0.8125rem] font-medium">
                {CUSTOMER.name}
              </div>
              <div className="text-content-subtle mt-px text-xs">
                {CUSTOMER.email}
              </div>
            </div>
            <div className="border-border-default flex flex-col gap-2.5 border-t px-3 pb-2.5 pt-3">
              {Object.entries(CUSTOMER.details as Record<string, string>).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="relative flex items-center justify-between gap-2 text-xs leading-none"
                  >
                    <span className="text-content-muted truncate font-medium">
                      {key}
                    </span>
                    <span className="text-content-default">{value}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

#### `partners-graphic.tsx`

**Location:** `packages/ui/src/nav/content/graphics/` · **105 lines** · **Exports:** `PartnersGraphic`, `PARTNERS`

Illustration for the Dub Partners card: a fake 2x3 partner table with revenue and payout figures. Avatars come from a spritesheet (14 images) offset by index; country flags are fetched from `flag.vercel.app`. The `{partner && ...}` guard is vestigial — every entry in `PARTNERS` is defined.

```tsx
import { capitalize, cn, nFormatter } from "@dub/utils";

export const PARTNERS = [
  {
    name: "Lauren Anderson",
    country: "US",
    revenue: 1_800,
    payouts: 550,
  },
  {
    name: "Mia Taylor",
    country: "US",
    revenue: 22_600,
    payouts: 6_800,
  },
  {
    name: "Sophie Laurent",
    country: "CA",
    revenue: 11_000,
    payouts: 3_300,
  },
  {
    name: "Hiroshi Tanaka",
    country: "JP",
    revenue: 19_200,
    payouts: 5_700,
  },
  {
    name: "Elias Weber",
    country: "DE",
    revenue: 783,
    payouts: 235,
  },
  {
    name: "Liam Carter",
    country: "US",
    revenue: 30_000,
    payouts: 9_200,
  },
];

export function PartnersGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none relative size-full dark:opacity-80",
        className,
      )}
      aria-hidden
    >
      <div className="absolute left-0 top-0 grid grid-cols-[repeat(2,180px)]">
        {PARTNERS.map((partner, idx) => (
          <div key={idx} className="h-[60px] w-[180px] p-[3px]">
            <div className="border-border-subtle bg-bg-default flex size-full select-none overflow-hidden rounded border">
              {partner && (
                <>
                  <div
                    key={idx}
                    className="bg-bg-emphasis aspect-square h-full"
                    style={{
                      backgroundImage:
                        "url(https://assets.dub.co/partners/partner-images.jpg)",
                      backgroundSize: "1400%", // 14 images
                      backgroundPositionX: (14 - (idx % 14)) * 100 + "%",
                    }}
                  />
                  <div className="border-border-subtle flex h-full flex-col justify-between border-l px-2 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <img
                        alt="US Flag"
                        src={`https://flag.vercel.app/m/${partner.country}.svg`}
                        className="h-2.5 w-3 rounded-sm border-[0.5px] border-black/15"
                      />
                      <span className="text-content-default text-[9px] font-medium">
                        {partner.name}
                      </span>
                    </div>
                    <div className="divide-border-subtle flex divide-x">
                      {(["revenue", "payouts"] as const).map((key, idx) => (
                        <div
                          key={key}
                          className={cn(
                            "flex flex-col",
                            idx === 0 ? "pr-4" : "pl-4",
                          )}
                        >
                          <span className="text-content-muted text-[6px] font-medium">
                            {capitalize(key)}
                          </span>
                          <span className="text-content-default text-[9px] font-medium">
                            ${nFormatter(partner[key])}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### `dub-wireframe-graphic.tsx`

**Location:** `packages/ui/src/nav/content/graphics/` · **467 lines** · **Exports:** `DubWireframeGraphic`

A 247x114 wireframe SVG living in the nav graphics folder. **It has no importers anywhere in the repo** — leftover from a previous nav design, safe to treat as dead code. Included here for completeness of the folder.

```tsx
import { cn } from "@dub/utils";
import { SVGProps, useId } from "react";

export function DubWireframeGraphic({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="247"
      height="114"
      viewBox="0 0 247 114"
      fill="none"
      className={cn("", className)}
      {...rest}
    >
      <path
        stroke="#fff"
        strokeWidth="0.089"
        d="M147.901 0v113.578M141.661 0v113.578M132.924 0v113.578M108.854 0v113.578M100.116 0v113.578M93.876 0v113.578M85.139 0v113.578M52.509 0v113.578M156.639 0v113.578M189.267 0v113.578m56.79-85.496H0M246.057 43.06H0m246.057 41.544H0"
        opacity="0.3"
      />
      <g opacity="0.5">
        <mask
          id={`${id}-a`}
          width="187"
          height="89"
          x="27"
          y="12"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <ellipse
            cx="120.71"
            cy="56.432"
            fill="#D9D9D9"
            rx="92.717"
            ry="44.041"
          />
        </mask>
        <g stroke="#fff" strokeWidth="0.089" mask={`url(#${id}-a)`}>
          <path d="M147.901 0v113.578M141.661 0v113.578M132.924 0v113.578M108.853 0v113.578M100.116 0v113.578M93.876 0v113.578M85.139 0v113.578M52.509 0v113.578M156.639 0v113.578M189.267 0v113.578m56.789-85.496H-.001M246.056 43.06H-.001m246.057 41.544H-.001" />
        </g>
      </g>
      <g filter={`url(#${id}-b)`} opacity="0.3">
        <path
          fill="#fff"
          fillOpacity="0.077"
          fillRule="evenodd"
          d="M147.733 29.33c0-.787.639-1.426 1.427-1.426h6.094c.788 0 1.427.639 1.427 1.427V46.57a20.77 20.77 0 0 1 11.93-3.745c11.531 0 20.878 9.353 20.878 20.89s-9.347 20.89-20.878 20.89c-11.53 0-20.878-9.353-20.878-20.89zm20.878 46.32c6.588 0 11.93-5.343 11.93-11.936 0-6.592-5.342-11.936-11.93-11.936-6.589 0-11.931 5.344-11.931 11.936 0 6.593 5.342 11.937 11.931 11.937M85.099 29.33c0-.787.639-1.426 1.427-1.426h6.095c.787 0 1.426.639 1.426 1.427v34.166a20 20 0 0 1 0 .436v19.245c0 .788-.639 1.426-1.426 1.426h-6.095a1.426 1.426 0 0 1-1.427-1.426V80.86a20.77 20.77 0 0 1-11.93 3.743c-11.53 0-20.877-9.352-20.877-20.89 0-11.536 9.347-20.889 20.878-20.889 4.435 0 8.548 1.384 11.93 3.744zM73.17 75.652c6.589 0 11.93-5.344 11.93-11.936 0-6.593-5.341-11.937-11.93-11.937s-11.93 5.344-11.93 11.937S66.58 75.65 73.17 75.65m28.27-32.826c-.788 0-1.427.639-1.427 1.427v19.463a20.9 20.9 0 0 0 6.116 14.77 20.87 20.87 0 0 0 29.526 0 20.9 20.9 0 0 0 6.115-14.77h-.001V44.252c0-.788-.639-1.427-1.427-1.427h-6.095c-.787 0-1.426.639-1.426 1.427v19.463a11.94 11.94 0 0 1-3.494 8.44 11.929 11.929 0 0 1-20.366-8.44V44.252c0-.788-.639-1.427-1.426-1.427z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill={`url(#${id}-c)`}
        fillOpacity="0.4"
        stroke={`url(#${id}-d)`}
        strokeWidth="0.233"
        d="M93.926 63.996v20.577H85.21v-3.85l-.183.127a20.66 20.66 0 0 1-11.865 3.723c-11.468 0-20.765-9.302-20.765-20.776s9.297-20.776 20.765-20.776a20.66 20.66 0 0 1 11.865 3.723l.183.128V28.098h8.716v35.898Zm53.925-.199V28.098h8.717v18.775l.182-.128a20.66 20.66 0 0 1 11.866-3.724c11.468 0 20.765 9.302 20.765 20.776s-9.297 20.776-20.765 20.776-20.765-9.301-20.765-20.776Zm-6.198 0v.116h.001a20.8 20.8 0 0 1-6.082 14.575 20.757 20.757 0 0 1-29.366 0 20.79 20.79 0 0 1-6.082-14.69V43.02h8.717v20.776a12.047 12.047 0 1 0 24.096 0V43.021h8.716zM73.162 75.851c6.654 0 12.048-5.397 12.048-12.054 0-6.658-5.394-12.055-12.048-12.055S61.114 57.14 61.114 63.797 66.508 75.85 73.162 75.85Zm95.454 0c6.654 0 12.048-5.397 12.048-12.054 0-6.658-5.394-12.055-12.048-12.055s-12.048 5.397-12.048 12.055 5.394 12.054 12.048 12.054Z"
      />
      <circle
        cx="85.073"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="147.866"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="147.866"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="156.704"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="156.704"
        cy="46.665"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="51.781"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="75.736"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="168.565"
        cy="84.806"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="180.426"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="189.496"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="99.957"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="99.957"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="132.982"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="120.888"
        cy="75.736"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="112.516"
        cy="72.247"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="101.586"
        cy="71.782"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="139.959"
        cy="71.782"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="129.494"
        cy="72.247"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="120.888"
        cy="84.806"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="108.795"
        cy="80.852"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="132.982"
        cy="80.852"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="132.982"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="93.911"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="156.704"
        cy="28.059"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="108.795"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="108.795"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="141.82"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="141.82"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="93.911"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="42.944"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="75.736"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="51.781"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="73.213"
        cy="84.573"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="46.665"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="61.118"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="52.281"
        cy="63.875"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="80.852"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="85.073"
        cy="84.573"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <circle
        cx="93.911"
        cy="84.573"
        r="0.814"
        fill="#565656"
        stroke="#fffa"
        strokeWidth="0.233"
      />
      <defs>
        <linearGradient
          id={`${id}-c`}
          x1="120.889"
          x2="120.889"
          y1="27.982"
          y2="84.689"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id={`${id}-d`}
          x1="120.889"
          x2="120.889"
          y1="27.982"
          y2="84.689"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B5B5B" />
          <stop offset="1" stopColor="#757575" />
        </linearGradient>
        <filter
          id={`${id}-b`}
          width="154.246"
          height="73.748"
          x="43.768"
          y="19.38"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.262" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_7_2"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_7_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-0.991" dy="0.991" />
          <feGaussianBlur stdDeviation="0.496" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.354 0" />
          <feBlend in2="shape" result="effect2_innerShadow_7_2" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="0.991" dy="-0.991" />
          <feGaussianBlur stdDeviation="0.496" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.84 0 0 0 0 0.84 0 0 0 0 0.84 0 0 0 0.354 0" />
          <feBlend
            in2="effect2_innerShadow_7_2"
            result="effect3_innerShadow_7_2"
          />
          <feGaussianBlur
            result="effect4_foregroundBlur_7_2"
            stdDeviation="0.357"
          />
        </filter>
      </defs>
    </svg>
  );
}
```

---

### Shared UI primitives

#### `max-width-wrapper.tsx`

**Location:** `packages/ui/src/` · **18 lines** · **Exports:** `MaxWidthWrapper`

Centers and width-constrains the nav bar row. `Nav` merges its `maxWidthWrapperClassName` prop onto this.

```tsx
import { cn } from "@dub/utils";
import { ReactNode } from "react";

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-3 lg:px-10", className)}
    >
      {children}
    </div>
  );
}
```

#### `nav-wordmark.tsx`

**Location:** `packages/ui/src/` · **143 lines** · **Exports:** `NavWordmark`

The logo in the left slot of the nav. Right-clicking it suppresses the browser context menu and opens a Radix popover with brand shortcuts (copy logo/wordmark as SVG, brand guidelines, home or dashboard). It reads `theme` from `NavContext` rather than inheriting CSS, because the popover renders through a portal and so escapes the nav's DOM subtree. The two SVG strings near the top are the literal payloads copied to the clipboard.

```tsx
"use client";

import { cn } from "@dub/utils";
import * as Popover from "@radix-ui/react-popover";
import { BoxSelect, Home, LayoutGrid, Type } from "lucide-react";
import { useParams } from "next/navigation";
import { MouseEvent, useCallback, useContext, useState } from "react";
import { toast } from "sonner";
import { Button, ButtonProps } from "./button";
import { useCopyToClipboard } from "./hooks";
import { Logo } from "./logo";
import { NavContext } from "./nav";
import { Wordmark } from "./wordmark";

const logoSvg = `<svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 64C50.1731 64 64.5 49.6731 64.5 32C64.5 20.1555 58.0648 9.81393 48.5 4.28099V31.9999V47.9998H40.5V45.8594C38.1466 47.2207 35.4143 47.9999 32.5 47.9999C23.6634 47.9999 16.5 40.8364 16.5 31.9999C16.5 23.1633 23.6634 15.9999 32.5 15.9999C35.4143 15.9999 38.1466 16.779 40.5 18.1404V1.00812C37.943 0.350018 35.2624 0 32.5 0C14.8269 0 0.500038 14.3269 0.500038 32C0.500038 49.6731 14.8269 64 32.5 64Z" fill="black"/>
</svg>`;

const wordmarkSvg = `<svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2H14V13.9332L14.0003 13.9731L14.0003 14C14.0003 14.0223 14.0002 14.0445 14 14.0668V21H11V19.7455C9.86619 20.5362 8.48733 21 7.00016 21C3.13408 21 0 17.866 0 14C0 10.134 3.13408 7 7.00016 7C8.48733 7 9.86619 7.46375 11 8.25452V2ZM7 17.9998C9.20914 17.9998 11 16.209 11 13.9999C11 11.7908 9.20914 10 7 10C4.79086 10 3 11.7908 3 13.9999C3 16.209 4.79086 17.9998 7 17.9998ZM32 2H35V8.25474C36.1339 7.46383 37.5128 7 39.0002 7C42.8662 7 46.0003 10.134 46.0003 14C46.0003 17.866 42.8662 21 39.0002 21C35.1341 21 32 17.866 32 14V2ZM39 17.9998C41.2091 17.9998 43 16.209 43 13.9999C43 11.7908 41.2091 10 39 10C36.7909 10 35 11.7908 35 13.9999C35 16.209 36.7909 17.9998 39 17.9998ZM19 7H16V14C16 14.9192 16.1811 15.8295 16.5329 16.6788C16.8846 17.5281 17.4003 18.2997 18.0503 18.9497C18.7003 19.5997 19.472 20.1154 20.3213 20.4671C21.1706 20.8189 22.0809 21 23.0002 21C23.9194 21 24.8297 20.8189 25.679 20.4671C26.5283 20.1154 27.3 19.5997 27.95 18.9497C28.6 18.2997 29.1157 17.5281 29.4675 16.6788C29.8192 15.8295 30.0003 14.9192 30.0003 14H30V7H27V14C27 15.0608 26.5785 16.0782 25.8284 16.8283C25.0783 17.5784 24.0609 17.9998 23 17.9998C21.9391 17.9998 20.9217 17.5784 20.1716 16.8283C19.4215 16.0782 19 15.0608 19 14V7Z" fill="black"/>
</svg>`;

/**
 * The Dub logo with a custom context menu for copying/navigation,
 * for use in the top site nav
 */
export function NavWordmark({
  variant = "full",
  isInApp,
  className,
}: {
  variant?: "full" | "symbol";
  isInApp?: boolean;
  className?: string;
}) {
  const { domain = "dub.co" } = useParams() as { domain: string };

  const { theme } = useContext(NavContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleContextMenu = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsPopoverOpen(true);
  }, []);

  const [, copyToClipboard] = useCopyToClipboard();

  function copy(text: string) {
    toast.promise(copyToClipboard(text), {
      success: "Copied to clipboard!",
      error: "Failed to copy to clipboard",
    });
  }

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Anchor asChild>
        <div onContextMenu={handleContextMenu} className="max-w-fit">
          {variant === "full" ? (
            <Wordmark className={className} />
          ) : (
            <Logo
              className={cn(
                "h-8 w-8 transition-all duration-75 active:scale-95",
                className,
              )}
            />
          )}
        </div>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          sideOffset={14}
          align="start"
          className={cn(
            "z-50 -mt-1.5",
            !isInApp && "-translate-x-8",
            theme === "dark" && "dark",
          )}
          onClick={(e) => {
            e.stopPropagation();
            setIsPopoverOpen(false);
          }}
        >
          <div className="grid gap-1 rounded-lg border border-neutral-200 bg-white p-2 drop-shadow-sm sm:min-w-[240px] dark:border-white/[0.15] dark:bg-black">
            <ContextMenuButton
              text="Copy Logo as SVG"
              variant="outline"
              onClick={() => copy(logoSvg)}
              icon={<Logo className="h-4 w-4" />}
            />
            <ContextMenuButton
              text="Copy Wordmark as SVG"
              variant="outline"
              onClick={() => copy(wordmarkSvg)}
              icon={<Type strokeWidth={2} className="h-4 w-4" />}
            />
            <ContextMenuButton
              text="Brand Guidelines"
              variant="outline"
              onClick={() => window.open("https://dub.co/brand", "_blank")}
              icon={<BoxSelect strokeWidth={2} className="h-4 w-4" />}
            />
            {/* If it's in the app or it's a domain placeholder page (not dub.co homepage), show the home button */}
            {isInApp || domain != "dub.co" ? (
              <ContextMenuButton
                text="Home Page"
                variant="outline"
                onClick={() =>
                  window.open(
                    `https://dub.co${isInApp ? "/home" : ""}`,
                    "_blank",
                  )
                }
                icon={<Home strokeWidth={2} className="h-4 w-4" />}
              />
            ) : (
              <ContextMenuButton
                text="Dashboard"
                variant="outline"
                onClick={() => window.open("https://app.dub.co", "_blank")}
                icon={<LayoutGrid strokeWidth={2} className="h-4 w-4" />}
              />
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function ContextMenuButton({ className, ...rest }: ButtonProps) {
  return (
    <Button
      className={cn(
        "h-9 justify-start px-3 font-medium hover:text-neutral-700 dark:text-white/70 dark:hover:bg-white/[0.15] dark:hover:text-white",
        className,
      )}
      {...rest}
    />
  );
}
```

#### `grid.tsx`

**Location:** `packages/ui/src/` · **46 lines** · **Exports:** `Grid`

A repeating SVG grid pattern used as a background inside dropdown cards. `cellSize` and `patternOffset` are tuned per card. `useId()` namespaces the pattern id.

```tsx
import { cn } from "@dub/utils";
import { useId } from "react";

export function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number;
  strokeWidth?: number;
  patternOffset?: [number, number];
  className?: string;
}) {
  const id = useId();

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-black/10",
        className,
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  );
}
```

#### `animated-size-container.tsx`

**Location:** `packages/ui/src/` · **80 lines** · **Exports:** `AnimatedSizeContainer`

Animates its own width and/or height to match its children, via `useResizeObserver` plus a motion spring. The mobile nav uses the `height` variant for expanding sections. It deliberately skips the animation on the first measurement so sections do not animate open on mount.

```tsx
import { cn } from "@dub/utils";
import { motion } from "motion/react";
import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
  forwardRef,
  useRef,
} from "react";
import { useResizeObserver } from "./hooks";

const defaultTransition = { type: "spring" as const, duration: 0.3 };

type AnimatedSizeContainerProps = PropsWithChildren<{
  width?: boolean;
  height?: boolean;
}> &
  Omit<ComponentPropsWithoutRef<typeof motion.div>, "animate" | "children">;

/**
 * A container with animated width and height (each optional) based on children dimensions
 */
const AnimatedSizeContainer: ForwardRefExoticComponent<
  AnimatedSizeContainerProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, AnimatedSizeContainerProps>(
  (
    {
      width = false,
      height = false,
      className,
      transition,
      children,
      ...rest
    }: AnimatedSizeContainerProps,
    forwardedRef,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const resizeObserverEntry = useResizeObserver(containerRef);
    const hasMeasuredRef = useRef(false);

    const measuredWidth = resizeObserverEntry?.contentRect?.width;
    const measuredHeight = resizeObserverEntry?.contentRect?.height;
    const isFirstMeasurement =
      (width ? measuredWidth != null : true) &&
      (height ? measuredHeight != null : true) &&
      !hasMeasuredRef.current;

    if (resizeObserverEntry) {
      hasMeasuredRef.current = true;
    }

    const effectiveTransition =
      transition ?? (isFirstMeasurement ? { duration: 0 } : defaultTransition);

    return (
      <motion.div
        ref={forwardedRef}
        className={cn("overflow-hidden", className)}
        animate={{
          width: width ? (measuredWidth ?? "auto") : "auto",
          height: height ? (measuredHeight ?? "auto") : "auto",
        }}
        transition={effectiveTransition}
        {...rest}
      >
        <div
          ref={containerRef}
          className={cn(height && "h-max", width && "w-max")}
        >
          {children}
        </div>
      </motion.div>
    );
  },
);

AnimatedSizeContainer.displayName = "AnimatedSizeContainer";

export { AnimatedSizeContainer };
```

#### `button.tsx`

**Location:** `packages/ui/src/` · **158 lines** · **Exports:** `Button`, `buttonVariants`, `ButtonProps`

The shared button. The nav does not render `Button` itself — it applies `buttonVariants({ variant })` directly to `<Link>` elements for the Log in / Sign up / Dashboard actions. `NavWordmark` does render `Button` for its context-menu rows.

```tsx
import { cn } from "@dub/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";
import { LoadingSpinner } from "./icons";
import { Tooltip } from "./tooltip";

export const buttonVariants = cva("transition-all", {
  variants: {
    variant: {
      primary:
        "border-black bg-black dark:bg-white dark:border-white text-content-inverted hover:bg-inverted hover:ring-4 hover:ring-border-subtle",
      secondary: cn(
        "border-border-subtle bg-bg-default text-content-emphasis hover:bg-bg-muted focus-visible:border-border-emphasis outline-none",
        "data-[state=open]:border-border-emphasis data-[state=open]:ring-4 data-[state=open]:ring-border-subtle",
      ),
      outline: "border-transparent text-content-default hover:bg-neutral-900/5",
      success:
        "border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:ring-4 hover:ring-blue-100",
      danger:
        "border-red-500 bg-red-500 text-white hover:bg-red-600 hover:ring-4 hover:ring-red-100",
      "danger-outline":
        "border-transparent bg-white text-red-500 hover:bg-red-600 hover:text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: ReactNode | string;
  textWrapperClassName?: string;
  shortcutClassName?: string;
  loading?: boolean;
  icon?: ReactNode;
  shortcut?: string;
  right?: ReactNode;
  disabledTooltip?: string | ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      variant = "primary",
      className,
      textWrapperClassName,
      shortcutClassName,
      loading,
      icon,
      shortcut,
      disabledTooltip,
      right,
      ...props
    }: ButtonProps,
    forwardedRef,
  ) => {
    if (disabledTooltip) {
      return (
        <Tooltip content={disabledTooltip}>
          <div
            className={cn(
              "flex h-10 w-full cursor-not-allowed items-center justify-center gap-x-2 rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm text-neutral-400 transition-all focus:outline-none",
              {
                "border-transparent bg-transparent":
                  variant?.endsWith("outline"),
              },
              className,
            )}
          >
            {icon}
            {text && (
              <div
                className={cn(
                  "min-w-0 truncate",
                  shortcut && "flex-1 text-left",
                  textWrapperClassName,
                )}
              >
                {text}
              </div>
            )}
            {shortcut && (
              <kbd
                className={cn(
                  "hidden rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-xs font-light text-neutral-400 md:inline-block",
                  {
                    "bg-neutral-100": variant?.endsWith("outline"),
                  },
                  shortcutClassName,
                )}
              >
                {shortcut}
              </kbd>
            )}
          </div>
        </Tooltip>
      );
    }
    return (
      <button
        ref={forwardedRef}
        // if onClick is passed, it's a "button" type, otherwise it's being used in a form, hence "submit"
        type={props.onClick ? "button" : "submit"}
        className={cn(
          "group flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border px-3 text-sm",
          props.disabled || loading
            ? "border-border-subtle bg-bg-subtle text-content-subtle cursor-not-allowed outline-none"
            : buttonVariants({ variant }),
          className,
        )}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading ? <LoadingSpinner /> : icon ? icon : null}
        {text && (
          <div
            className={cn(
              "min-w-0 truncate",
              shortcut && "flex-1 text-left",
              textWrapperClassName,
            )}
          >
            {text}
          </div>
        )}
        {shortcut && (
          <kbd
            className={cn(
              "hidden rounded px-2 py-0.5 text-xs font-light transition-all duration-75 md:inline-block",
              {
                "bg-neutral-700 text-neutral-400 group-hover:bg-neutral-600 group-hover:text-neutral-300":
                  variant === "primary",
                "bg-neutral-200 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-500":
                  variant === "secondary",
                "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200":
                  variant === "outline",
                "bg-red-400 text-white": variant === "danger",
                "bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white":
                  variant === "danger-outline",
              },
              shortcutClassName,
            )}
          >
            {shortcut}
          </kbd>
        )}
        {right}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
```

#### `logo.tsx`

**Location:** `packages/ui/src/` · **21 lines** · **Exports:** `Logo`

The Dub symbol mark. Rendered by `NavWordmark` in `variant="symbol"` mode and in its context menu, and used as the icon for the Brand Guidelines entry in `RESOURCES`.

```tsx
import { cn } from "@dub/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10 text-black dark:text-white", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 64C49.6731 64 64 49.6731 64 32C64 20.1555 57.5648 9.81398 48 4.28103V31.9999V47.9999H40V45.8594C37.6466 47.2208 34.9143 47.9999 32 47.9999C23.1634 47.9999 16 40.8365 16 31.9999C16 23.1634 23.1634 15.9999 32 15.9999C34.9143 15.9999 37.6466 16.7791 40 18.1404V1.00814C37.443 0.350024 34.7624 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
        fill="currentColor"
      />
    </svg>
  );
}
```

#### `wordmark.tsx`

**Location:** `packages/ui/src/` · **21 lines** · **Exports:** `Wordmark`

The full Dub wordmark. Rendered by `NavWordmark` in the default `variant="full"` mode — this is what actually appears in the nav bar.

```tsx
import { cn } from "@dub/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      width="46"
      height="24"
      viewBox="0 0 46 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto text-black dark:text-white", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2H14V13.9332L14.0003 13.9731L14.0003 14C14.0003 14.0223 14.0002 14.0445 14 14.0668V21H11V19.7455C9.86619 20.5362 8.48733 21 7.00016 21C3.13408 21 0 17.866 0 14C0 10.134 3.13408 7 7.00016 7C8.48733 7 9.86619 7.46375 11 8.25452V2ZM7 17.9998C9.20914 17.9998 11 16.209 11 13.9999C11 11.7908 9.20914 10 7 10C4.79086 10 3 11.7908 3 13.9999C3 16.209 4.79086 17.9998 7 17.9998ZM32 2H35V8.25474C36.1339 7.46383 37.5128 7 39.0002 7C42.8662 7 46.0003 10.134 46.0003 14C46.0003 17.866 42.8662 21 39.0002 21C35.1341 21 32 17.866 32 14V2ZM39 17.9998C41.2091 17.9998 43 16.209 43 13.9999C43 11.7908 41.2091 10 39 10C36.7909 10 35 11.7908 35 13.9999C35 16.209 36.7909 17.9998 39 17.9998ZM19 7H16V14C16 14.9192 16.1811 15.8295 16.5329 16.6788C16.8846 17.5281 17.4003 18.2997 18.0503 18.9497C18.7003 19.5997 19.472 20.1154 20.3213 20.4671C21.1706 20.8189 22.0809 21 23.0002 21C23.9194 21 24.8297 20.8189 25.679 20.4671C26.5283 20.1154 27.3 19.5997 27.95 18.9497C28.6 18.2997 29.1157 17.5281 29.4675 16.6788C29.8192 15.8295 30.0003 14.9192 30.0003 14H30V7H27V14C27 15.0608 26.5785 16.0782 25.8284 16.8283C25.0783 17.5784 24.0609 17.9998 23 17.9998C21.9391 17.9998 20.9217 17.5784 20.1716 16.8283C19.4215 16.0782 19 15.0608 19 14V7Z"
        fill="currentColor"
      />
    </svg>
  );
}
```

---

### Link data

#### `content.ts`

**Location:** `packages/ui/src/` · **227 lines** · **Exports:** `NavItemChild`, `NavItemChildren`, `FEATURES_LIST`, `SDKS`, `SOLUTIONS`, `RESOURCES`, `COMPARE_PAGES`, `LEGAL_PAGES`, `SOCIAL_LINKS`

The link registry shared by the nav and the site footer. The nav uses `FEATURES_LIST`, `SOLUTIONS`, `RESOURCES` (as the `childItems` powering the mobile accordions) and `SDKS` (rendered directly by the Solutions panel). `COMPARE_PAGES`, `LEGAL_PAGES` and `SOCIAL_LINKS` are footer-only and are included below only because they share the file. Note the duplication described in section 4: the desktop panels hardcode their own link arrays rather than reading these.

```ts
import { ElementType } from "react";
import {
  Book2,
  Briefcase,
  BulletList,
  DiamondTurnRight,
  DubAnalyticsIcon,
  DubLinksIcon,
  DubPartnersIcon,
  Envelope,
  Feather,
  Github,
  Go,
  LifeRing,
  LinkedIn,
  Microphone,
  Php,
  Python,
  Ruby,
  Toggle2,
  Twitter,
  Typescript,
  Users,
  YouTube,
  withFillVariant,
} from "./icons";
import { DubApiIcon } from "./icons/dub-api";
import { Logo } from "./logo";

export type NavItemChild = {
  title: string;
  description?: string;
  href: string;
  icon: ElementType;
  iconClassName?: string;
};

export type NavItemChildren = (
  NavItemChild | { label: string; items: NavItemChild[] }
)[];

export const FEATURES_LIST = [
  {
    id: "links",
    title: "Dub Links",
    description: "Short links with superpowers",
    icon: DubLinksIcon,
    href: "/links",
  },
  {
    id: "partners",
    title: "Dub Partners",
    description: "Grow your revenue with partnerships",
    icon: DubPartnersIcon,
    href: "/partners",
  },
  {
    id: "analytics",
    title: "Dub Analytics",
    description: "Powerful real-time analytics",
    icon: DubAnalyticsIcon,
    href: "/analytics",
  },
  {
    id: "api",
    title: "Dub API",
    description: "Programmatic link creation at scale",
    icon: DubApiIcon,
    href: "/docs/api-reference/introduction",
  },
  {
    title: "Dub Integrations",
    description: "Connect Dub with your favorite tools",
    icon: withFillVariant(Toggle2),
    href: "/integrations",
  },
];

export const SDKS = [
  {
    icon: Typescript,
    iconClassName: "py-0.5 group-hover:text-[#3178C6]",
    title: "Typescript",
    href: "/sdks/typescript",
  },
  {
    icon: Python,
    iconClassName:
      "py-0.5 [&_.snake]:transition-colors group-hover:[&_.snake1]:text-[#3776ab] group-hover:[&_.snake2]:text-[#ffd343]",
    title: "Python",
    href: "/sdks/python",
  },
  {
    icon: Go,
    iconClassName: "group-hover:text-[#00ACD7]",
    title: "Go",
    href: "/sdks/go",
  },
  {
    icon: Ruby,
    iconClassName:
      "py-[3px] grayscale brightness-150 transition-[filter] group-hover:grayscale-0 group-hover:brightness-100",
    title: "Ruby",
    href: "/sdks/ruby",
  },
  {
    icon: Php,
    iconClassName:
      "py-[3px] grayscale brightness-150 transition-[filter] group-hover:grayscale-0 group-hover:brightness-100",
    title: "PHP",
    href: "/sdks/php",
  },
];

export const SOLUTIONS: NavItemChildren = [
  {
    icon: withFillVariant(DiamondTurnRight),
    title: "Marketing Attribution",
    description: "Easily track and measure marketing impact",
    href: "/analytics",
  },
  {
    icon: withFillVariant(Microphone),
    title: "Content Creators",
    description: "Intelligent audience insights and link tracking",
    href: "/solutions/creators",
  },
  {
    icon: withFillVariant(Users),
    title: "Affiliate Management",
    description: "Manage affiliates and automate payouts",
    href: "/partners",
  },
  {
    label: "SDKs",
    items: SDKS,
  },
];

export const RESOURCES = [
  {
    icon: LifeRing,
    title: "Help Center",
    description: "Answers to your questions",
    href: "/help",
  },
  {
    icon: Book2,
    title: "Docs",
    description: "Platform documentation",
    href: "/docs",
  },
  {
    icon: withFillVariant(Users),
    title: "About",
    description: "Company, values, and team",
    href: "/about",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Join our global, remote team",
    href: "/careers",
  },
  {
    icon: Feather,
    title: "Blog",
    description: "Insights and stories",
    href: "/blog",
  },
  {
    icon: BulletList,
    title: "Changelog",
    description: "Releases and updates",
    href: "/changelog",
  },
  {
    icon: Logo,
    title: "Brand Guidelines",
    description: "Logos, wordmark, etc.",
    href: "/brand",
  },
  {
    icon: Envelope,
    title: "Contact",
    description: "Reach out to support or sales",
    href: "/contact",
  },
];

export const COMPARE_PAGES = [
  { name: "Bitly", slug: "bitly" },
  { name: "Rebrandly", slug: "rebrandly" },
  { name: "Short.io", slug: "short" },
  { name: "Bl.ink", slug: "blink" },
];

export const LEGAL_PAGES = [
  { name: "Affiliate Program Terms", slug: "affiliates" },
  { name: "DPA", slug: "dpa" },
  { name: "Partner Terms", slug: "partners" },
  { name: "Privacy Policy", slug: "privacy" },
  { name: "Report Abuse", slug: "abuse" },
  { name: "SLA", slug: "sla" },
  { name: "Subprocessors", slug: "subprocessors" },
  { name: "Terms of Service", slug: "terms" },
];

export const SOCIAL_LINKS = [
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/dubdotco" },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    href: "https://www.linkedin.com/company/dubinc",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/dubinc/dub",
  },
  {
    name: "YouTube",
    icon: YouTube,
    href: "https://www.youtube.com/@dubdotco",
  },
];
```

---

### Hooks

#### `use-scroll.ts`

**Location:** `packages/ui/src/hooks/` · **28 lines** · **Exports:** `useScroll`

Returns whether scroll position has passed a threshold. `Nav` calls `useScroll(40)` to toggle the blurred background. Listens on `window` by default, or on a container ref. Also fires once on mount so a page loaded mid-scroll renders correctly.

```ts
import { RefObject, useCallback, useEffect, useState } from "react";

export function useScroll(
  threshold: number,
  { container }: { container?: RefObject<HTMLElement | null> } = {},
) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(
      (container?.current ? container.current.scrollTop : window.scrollY) >
        threshold,
    );
  }, [threshold]);

  useEffect(() => {
    const element = container?.current ?? window;
    element.addEventListener("scroll", onScroll);
    return () => element.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // also check on first load
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
```

#### `use-resize-observer.ts`

**Location:** `packages/ui/src/hooks/` · **29 lines** · **Exports:** `useResizeObserver`

Wraps a `ResizeObserver` and returns the latest entry. Backs `AnimatedSizeContainer`, which is what animates the mobile nav's expanding sections.

```ts
import { RefObject, useEffect, useState } from "react";

/**
 * Use a ResizeObserver to react to changes in an element's size
 *
 * More about ResizeObserver: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
 */
export function useResizeObserver(
  elementRef: RefObject<Element | null>,
): ResizeObserverEntry | undefined {
  const [entry, setEntry] = useState<ResizeObserverEntry>();

  const updateEntry = ([entry]: ResizeObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;

    const observer = new ResizeObserver(updateEntry);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef]);

  return entry;
}
```

#### `use-copy-to-clipboard.tsx`

**Location:** `packages/ui/src/hooks/` · **58 lines** · **Exports:** `useCopyToClipboard`

Clipboard write with a timed "copied" state. Used by `NavWordmark` to copy the logo and wordmark SVG strings, paired with a `sonner` toast.

```tsx
import { useCallback, useEffect, useRef, useState } from "react";

export const useCopyToClipboard = (
  timeout: number = 3000,
): [
  boolean,
  (
    value: string | ClipboardItem,
    options?: { onSuccess?: () => void; throwOnError?: boolean },
  ) => Promise<void>,
] => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const copyToClipboard = useCallback(
    async (
      value: string | ClipboardItem,
      {
        onSuccess,
        throwOnError,
      }: { onSuccess?: () => void; throwOnError?: boolean } = {},
    ) => {
      clearTimer();
      try {
        if (typeof value === "string") {
          await navigator.clipboard.writeText(value);
        } else if (value instanceof ClipboardItem) {
          await navigator.clipboard.write([value]);
        }
        setCopied(true);
        onSuccess?.();

        // Ensure timeout is a non-negative finite number
        if (Number.isFinite(timeout) && timeout >= 0) {
          timer.current = setTimeout(() => setCopied(false), timeout);
        }
      } catch (error) {
        console.error("Failed to copy: ", error);
        if (throwOnError) throw error;
      }
    },
    [timeout],
  );

  // Cleanup the timer when the component unmounts
  useEffect(() => {
    return () => clearTimer();
  }, []);

  return [copied, copyToClipboard];
};
```

---

### Icons

#### `dub-links.tsx`

**Location:** `packages/ui/src/icons/` · **21 lines** · **Exports:** `DubLinksIcon`

Dub Links product mark. Appears in the nav-mobile icon chip, the Product panel card, and `FEATURES_LIST`.

```tsx
import { SVGProps } from "react";

export function DubLinksIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      fill="none"
      viewBox="0 0 11 10"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.333"
        d="M5.5 5.667v-4M5.5 5.667l-3.333 2M5.5 5.667l3.333 2"
      />
    </svg>
  );
}
```

#### `dub-partners.tsx`

**Location:** `packages/ui/src/icons/` · **19 lines** · **Exports:** `DubPartnersIcon`

Dub Partners product mark.

```tsx
import { SVGProps } from "react";

export function DubPartnersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <circle cx="27" cy="16" r="5" fill="currentColor" />
      <circle cx="5" cy="16" r="5" fill="currentColor" />
      <circle cx="16" cy="27" r="5" fill="currentColor" />
      <circle cx="16" cy="5" r="5" fill="currentColor" />
    </svg>
  );
}
```

#### `dub-analytics.tsx`

**Location:** `packages/ui/src/icons/` · **21 lines** · **Exports:** `DubAnalyticsIcon`

Dub Analytics product mark.

```tsx
import { SVGProps } from "react";

export function DubAnalyticsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.333"
        d="M2.333 6.333v2M7.667 1.667v6.666"
      />
    </svg>
  );
}
```

#### `dub-api.tsx`

**Location:** `packages/ui/src/icons/` · **19 lines** · **Exports:** `DubApiIcon`

Dub API product mark. Imported directly from its file rather than the icons barrel.

```tsx
import { SVGProps } from "react";

export function DubApiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.311 2.624a1.126 1.126 0 0 1 1.506-.077l.086.077 1.519 1.52.18.199a2.626 2.626 0 0 1-.18 3.514L8.903 9.375l-.086.078a1.126 1.126 0 0 1-1.506-1.669l1.52-1.52.048-.058a.38.38 0 0 0 0-.412l-.048-.06-1.52-1.518-.077-.086a1.126 1.126 0 0 1 .077-1.506M3.183 2.547A1.126 1.126 0 0 1 4.766 4.13l-.078.086-1.52 1.519a.375.375 0 0 0 0 .53l1.52 1.52.078.085a1.125 1.125 0 0 1-1.583 1.583l-.086-.078-1.519-1.518a2.626 2.626 0 0 1 0-3.713l1.519-1.52z"
      />
    </svg>
  );
}
```

#### `expanding-arrow.tsx`

**Location:** `packages/ui/src/icons/` · **39 lines** · **Exports:** `ExpandingArrow`

The arrow that slides in on hover inside `ContentLinkCard` (used for the SDK links in the Solutions panel).

```tsx
import { cn } from "@dub/utils";

export function ExpandingArrow({ className }: { className?: string }) {
  return (
    <div className="group relative flex items-center">
      <svg
        className={cn(
          "absolute h-4 w-4 transition-all group-hover:translate-x-1 group-hover:opacity-0",
          className,
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
        ></path>
      </svg>
      <svg
        className={`${
          className ? className : "h-4 w-4"
        } absolute opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
        ></path>
      </svg>
    </div>
  );
}
```

#### `with-fill-variant.tsx`

**Location:** `packages/ui/src/icons/` · **13 lines** · **Exports:** `withFillVariant`

Higher-order wrapper that pins a variant-capable icon to its filled form, so `content.ts` can store it as a plain `ElementType`.

```tsx
import { ComponentProps, ComponentType, SVGProps } from "react";

type VariantIcon = ComponentType<
  SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }
>;

export function withFillVariant(Icon: VariantIcon): VariantIcon {
  const FillIcon = (props: ComponentProps<VariantIcon>) => (
    <Icon variant="fill" {...props} />
  );
  FillIcon.displayName = `FillVariant(${Icon.displayName || Icon.name || "Icon"})`;
  return FillIcon;
}
```

#### `book2.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **79 lines** · **Exports:** `Book2`

Docs icon — Resources panel and `RESOURCES`.

```tsx
import { SVGProps } from "react";

export function Book2({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <path
              d="M15.923,13.069c.006-.013,.015-.023,.02-.036,.034-.083,.049-.169,.052-.258,0-.009,.005-.016,.005-.025V1.75c0-.414-.336-.75-.75-.75H4.75c-1.517,0-2.75,1.233-2.75,2.75V14.5c0,1.378,1.121,2.5,2.5,2.5H15.25c.286,0,.547-.163,.673-.419s.096-.562-.079-.789c-.522-.679-.434-2.013,.004-2.589,.032-.042,.053-.088,.075-.135ZM8.75,4.5h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-3.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Zm0,3h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-3.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75ZM3.5,3.75c0-.689,.561-1.25,1.25-1.25h.25V12h-.5c-.356,0-.693,.077-1,.212V3.75ZM14.092,15.5H4.5c-.552,0-1-.449-1-1s.448-1,1-1H14.105c-.155,.629-.174,1.339-.014,2Z"
              fill="currentColor"
            />
          </>
        ) : (
          <>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="5.75"
              x2="5.75"
              y1="1.75"
              y2="12.75"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="8.75"
              x2="12.25"
              y1="5.25"
              y2="5.25"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="8.75"
              x2="12.25"
              y1="8.25"
              y2="8.25"
            />
            <path
              d="M2.75,14.5V3.75c0-1.105,.895-2,2-2H15.25V12.75"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M5.25,16.25h-.75c-.966,0-1.75-.783-1.75-1.75s.784-1.75,1.75-1.75H15.25c-.641,.844-.734,2.547,0,3.5H5.25Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `life-ring.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **170 lines** · **Exports:** `LifeRing`

Help Center icon — Resources panel and `RESOURCES`.

```tsx
import { SVGProps } from "react";

export function LifeRing({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <path
              d="M6.188,7.951l-1.404-.525c.457-1.223,1.42-2.186,2.643-2.643l.525,1.405c-.815,.305-1.458,.947-1.764,1.763Z"
              fill="currentColor"
            />
            <path
              d="M11.812,7.951c-.306-.815-.948-1.458-1.764-1.763l.525-1.405c1.223,.457,2.186,1.42,2.643,2.643l-1.404,.525Z"
              fill="currentColor"
            />
            <path
              d="M10.574,13.217l-.525-1.405c.815-.305,1.458-.947,1.764-1.763l1.404,.525c-.457,1.223-1.42,2.186-2.643,2.643Z"
              fill="currentColor"
            />
            <path
              d="M7.426,13.217c-1.223-.457-2.186-1.42-2.643-2.643l1.404-.525c.306,.815,.948,1.458,1.764,1.763l-.525,1.405Z"
              fill="currentColor"
            />
            <path
              d="M6.202,16.497c-2.174-.812-3.887-2.524-4.698-4.699l1.404-.524c.66,1.767,2.052,3.159,3.819,3.818l-.525,1.405Z"
              fill="currentColor"
            />
            <path
              d="M11.798,16.497l-.525-1.405c1.768-.66,3.159-2.051,3.819-3.818l1.404,.524c-.812,2.175-2.524,3.888-4.698,4.699Z"
              fill="currentColor"
            />
            <path
              d="M15.091,6.727c-.658-1.767-2.05-3.159-3.818-3.819l.525-1.405c2.175,.812,3.888,2.525,4.699,4.7l-1.406,.524Z"
              fill="currentColor"
            />
            <path
              d="M2.908,6.727l-1.404-.524c.812-2.175,2.524-3.888,4.698-4.699l.525,1.405c-1.768,.66-3.159,2.051-3.819,3.818Z"
              fill="currentColor"
            />
            <path
              d="M10.312,6.237c-.087,0-.176-.015-.263-.047-.675-.251-1.429-.251-2.098,0-.188,.069-.394,.062-.574-.021-.181-.083-.321-.233-.392-.42l-1.399-3.749c-.069-.186-.062-.393,.021-.574,.083-.181,.234-.322,.42-.391,1.902-.71,4.045-.71,5.947,0,.388,.145,.585,.577,.44,.965l-1.399,3.75c-.113,.302-.399,.488-.703,.488Z"
              fill="currentColor"
            />
            <path
              d="M16.263,12.46c-.087,0-.176-.015-.263-.047l-3.749-1.399c-.388-.145-.585-.577-.44-.965,.126-.336,.189-.689,.189-1.049,0-.362-.063-.714-.188-1.047-.07-.187-.062-.393,.02-.575,.083-.181,.233-.322,.42-.392l3.749-1.399c.393-.145,.82,.053,.965,.44,.355,.949,.535,1.95,.535,2.973s-.18,2.024-.535,2.973c-.112,.301-.398,.487-.702,.487Z"
              fill="currentColor"
            />
            <path
              d="M9,17.5c-1.022,0-2.022-.18-2.974-.535-.388-.145-.585-.577-.44-.965l1.399-3.75c.146-.388,.576-.585,.966-.44,.675,.251,1.429,.251,2.098,0,.187-.07,.393-.063,.574,.021,.181,.083,.321,.233,.392,.42l1.399,3.749c.069,.186,.062,.393-.021,.574-.083,.181-.234,.322-.42,.391-.951,.355-1.951,.535-2.974,.535Z"
              fill="currentColor"
            />
            <path
              d="M1.737,12.46c-.304,0-.59-.186-.702-.487-.355-.949-.535-1.95-.535-2.973s.18-2.024,.535-2.973c.145-.387,.574-.584,.965-.44l3.749,1.399c.388,.145,.585,.577,.44,.965-.126,.336-.189,.689-.189,1.049,0,.362,.063,.714,.188,1.047,.07,.187,.062,.393-.02,.575-.083,.181-.233,.322-.42,.392l-3.749,1.399c-.087,.032-.176,.047-.263,.047Z"
              fill="currentColor"
            />
          </>
        ) : (
          <>
            <path
              d="M5.486,7.688c.379-1.016,1.187-1.823,2.203-2.203"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M10.312,5.486c1.016,.379,1.823,1.187,2.203,2.203"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M12.514,10.312c-.379,1.016-1.187,1.823-2.203,2.203"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M7.688,12.514c-1.016-.379-1.823-1.187-2.203-2.203"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M6.464,15.794c-1.964-.733-3.525-2.294-4.259-4.259"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M15.794,11.536c-.733,1.964-2.295,3.525-4.259,4.259"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M11.536,2.206c1.964,.733,3.525,2.295,4.259,4.259"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M2.206,6.464c.733-1.964,2.294-3.525,4.259-4.259"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M10.311,5.487l1.399-3.749h0c-.844-.315-1.757-.487-2.711-.487-.954,0-1.867,.172-2.711,.487l1.399,3.749c.409-.153,.849-.236,1.311-.236s.903,.084,1.311,.237Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M12.513,10.311l3.749,1.399h0c.315-.844,.487-1.757,.487-2.71,0-.954-.172-1.867-.487-2.711l-3.749,1.399c.153,.409,.236,.849,.236,1.311s-.084,.903-.237,1.311Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M7.689,12.513l-1.399,3.749h0c.844,.315,1.757,.487,2.711,.487,.954,0,1.867-.172,2.711-.487l-1.399-3.749c-.409,.153-.849,.236-1.311,.236s-.903-.084-1.311-.237Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M5.487,7.689l-3.749-1.399h0c-.315,.844-.487,1.757-.487,2.71,0,.954,.172,1.867,.487,2.711l3.749-1.399c-.153-.409-.236-.849-.236-1.311s.084-.903,.237-1.311Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `diamond-turn-right.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **60 lines** · **Exports:** `DiamondTurnRight`

Marketing Attribution icon — Solutions panel and `SOLUTIONS`.

```tsx
import { SVGProps } from "react";

export function DiamondTurnRight({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <path
              d="M16.116,7.056L10.944,1.884c-1.038-1.039-2.851-1.039-3.889,0L1.884,7.056c-.52,.519-.806,1.21-.806,1.944s.286,1.425,.806,1.944l5.171,5.171c.519,.52,1.209,.806,1.944,.806s1.425-.286,1.944-.806l5.171-5.171c.52-.519,.806-1.209,.806-1.944s-.286-1.425-.806-1.944Zm-3.335,2.225l-2.25,2.25c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l.97-.97h-1.689c-.689,0-1.25,.561-1.25,1.25v.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-.5c0-1.517,1.233-2.75,2.75-2.75h1.689l-.97-.97c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.25,2.25c.293,.293,.293,.768,0,1.061Z"
              fill="currentColor"
            />
          </>
        ) : (
          <>
            <polyline
              fill="none"
              points="10 6.5 12.25 8.75 10 11"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M12.25,8.75h-3.5c-1.105,0-2,.895-2,2v.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <rect
              height="11.313"
              width="11.313"
              fill="none"
              rx="2"
              ry="2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              transform="translate(21.728 9) rotate(135)"
              x="3.343"
              y="3.343"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `microphone.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **66 lines** · **Exports:** `Microphone`

Content Creators icon — Solutions panel and `SOLUTIONS`.

```tsx
import { SVGProps } from "react";

export function Microphone({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <path
              d="M9,12c2.206,0,4-1.794,4-4v-3c0-2.206-1.794-4-4-4s-4,1.794-4,4v3c0,2.206,1.794,4,4,4Z"
              fill="currentColor"
            />
            <path
              d="M15.25,7.25c-.414,0-.75,.336-.75,.75,0,3.033-2.467,5.5-5.5,5.5s-5.5-2.467-5.5-5.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,3.606,2.742,6.583,6.25,6.958v1.292c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.292c3.508-.376,6.25-3.352,6.25-6.958,0-.414-.336-.75-.75-.75Z"
              fill="currentColor"
            />
          </>
        ) : (
          <>
            <rect
              height="9.5"
              width="6.5"
              fill="none"
              rx="3.25"
              ry="3.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x="5.75"
              y="1.75"
            />
            <path
              d="M15.25,8c0,3.452-2.798,6.25-6.25,6.25h0c-3.452,0-6.25-2.798-6.25-6.25"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="9"
              x2="9"
              y1="14.25"
              y2="16.25"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `users.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **72 lines** · **Exports:** `Users`

Affiliate Management icon (Solutions panel, `SOLUTIONS`) and the About entry in `RESOURCES`.

```tsx
import { SVGProps } from "react";

export function Users({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <circle cx="5.75" cy="6.25" fill="currentColor" r="2.75" />
            <circle cx="12" cy="3.75" fill="currentColor" r="2.75" />
            <path
              d="M17.196,11.098c-.811-2.152-2.899-3.598-5.196-3.598-1.417,0-2.752,.553-3.759,1.48,1.854,.709,3.385,2.169,4.109,4.089,.112,.296,.162,.603,.182,.91,1.211-.05,2.409-.26,3.565-.646,.456-.152,.834-.487,1.041-.919,.2-.42,.221-.888,.059-1.316Z"
              fill="currentColor"
            />
            <path
              d="M10.946,13.598c-.811-2.152-2.899-3.598-5.196-3.598S1.365,11.446,.554,13.598c-.162,.429-.141,.896,.059,1.316,.206,.432,.585,.767,1.041,.919,1.325,.442,2.704,.667,4.096,.667s2.771-.225,4.096-.667c.456-.152,.834-.487,1.041-.919,.2-.42,.221-.888,.059-1.316Z"
              fill="currentColor"
            />
          </>
        ) : (
          <>
            <circle
              cx="5.75"
              cy="6.25"
              fill="none"
              r="2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <circle
              cx="12"
              cy="3.75"
              fill="none"
              r="2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M9.609,15.122c.523-.175,.83-.744,.636-1.259-.685-1.818-2.436-3.112-4.494-3.112s-3.809,1.294-4.494,3.112c-.194,.516,.113,1.085,.636,1.259,.962,.321,2.281,.628,3.859,.628s2.897-.307,3.858-.628Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M12.749,13.227c1.248-.077,2.304-.336,3.109-.605,.523-.175,.83-.744,.636-1.259-.685-1.818-2.436-3.112-4.494-3.112-.977,0-1.885,.292-2.643,.793"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `toggle2.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **47 lines** · **Exports:** `Toggle2`

Dub Integrations icon in `FEATURES_LIST`, wrapped in `withFillVariant`.

```tsx
import { SVGProps } from "react";

export function Toggle2({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <path
            d="m11.5,3h-5C3.1914,3,.5,5.6914.5,9s2.6914,6,6,6h5c3.3086,0,6-2.6914,6-6s-2.6914-6-6-6Zm-5,9c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3,3,1.3457,3,3-1.3457,3-3,3Z"
            fill="currentColor"
            strokeWidth="0"
          />
        ) : (
          <>
            <path
              d="m6.5,3.75h5c2.8995,0,5.25,2.3505,5.25,5.25h0c0,2.8995-2.3505,5.25-5.25,5.25h-5c-2.8995,0-5.25-2.3505-5.25-5.25h0c0-2.8995,2.3505-5.25,5.25-5.25Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <circle
              cx="6.5"
              cy="9"
              fill="currentColor"
              r="1.75"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `briefcase.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **60 lines** · **Exports:** `Briefcase`

Careers icon in `RESOURCES`.

```tsx
import { SVGProps } from "react";

export function Briefcase({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <path
              d="M11.75,5.5c-.414,0-.75-.336-.75-.75V2.25c0-.138-.112-.25-.25-.25h-3.5c-.138,0-.25,.112-.25,.25v2.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V2.25c0-.965,.785-1.75,1.75-1.75h3.5c.965,0,1.75,.785,1.75,1.75v2.5c0,.414-.336,.75-.75,.75Z"
              fill="currentColor"
            />
            <rect
              height="12"
              width="16"
              fill="currentColor"
              rx="2.75"
              ry="2.75"
              x="1"
              y="4"
            />
          </>
        ) : (
          <>
            <path
              d="M11.75,5.5c-.414,0-.75-.336-.75-.75V2.25c0-.138-.112-.25-.25-.25h-3.5c-.138,0-.25,.112-.25,.25v2.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V2.25c0-.965,.785-1.75,1.75-1.75h3.5c.965,0,1.75,.785,1.75,1.75v2.5c0,.414-.336,.75-.75,.75Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <rect
              height="12"
              width="16"
              fill="none"
              rx="2.75"
              ry="2.75"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x="1"
              y="4"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `feather.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **44 lines** · **Exports:** `Feather`

Blog icon in `RESOURCES`.

```tsx
import { SVGProps } from "react";

export function Feather({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <path
            d="M12.259,10.858c-.36,0-.755-.023-1.192-.069-.412-.043-.71-.413-.667-.825,.043-.412,.409-.711,.825-.667,1.405,.149,2.158,.017,2.695-.311,.502-.418,.899-.998,1.116-1.831,.139-.612,.228-1.204,.313-1.776,.135-.901,.262-1.751,.551-2.256,.139-.242,.132-.542-.019-.777-.15-.235-.417-.373-.697-.343C3.521,3.023,2.019,15.044,2.005,15.165c-.047,.411,.248,.782,.659,.83,.029,.003,.058,.005,.087,.005,.375,0,.7-.282,.744-.664,.017-.143,.174-1.323,.711-2.88,.81,.363,1.612,.523,1.659,.531,.854,.156,1.643,.234,2.367,.234,1.507,0,2.73-.338,3.65-1.01,.506-.37,.898-.847,1.198-1.406-.254,.031-.522,.052-.822,.052Z"
            fill="currentColor"
          />
        ) : (
          <>
            <path
              d="m12.974,8.731c-.4527,3.525-3.4373,4.0684-6.5358,3.5928"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="m2.75,15.25S4.062,3.729,15.25,2.75c-.56.976-.573,2.605-.946,4.239-.524,2.011-2.335,2.261-4.554,2.261"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `bullet-list.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **108 lines** · **Exports:** `BulletList`

Changelog icon in `RESOURCES`.

```tsx
import { SVGProps } from "react";

export function BulletList({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <path
              d="M15.75,10.5h-7.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
              fill="currentColor"
            />
            <path
              d="M15.75,14h-7.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
              fill="currentColor"
            />
            <path
              d="M15.75,3.5h-7.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
              fill="currentColor"
            />
            <path
              d="M15.75,7h-7.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
              fill="currentColor"
            />
            <circle cx="3.75" cy="4.25" fill="currentColor" r="2.25" />
            <circle cx="3.75" cy="11.25" fill="currentColor" r="2.25" />
          </>
        ) : (
          <>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="8.25"
              x2="15.75"
              y1="11.25"
              y2="11.25"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="8.25"
              x2="15.75"
              y1="14.75"
              y2="14.75"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="8.25"
              x2="15.75"
              y1="4.25"
              y2="4.25"
            />
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              x1="8.25"
              x2="15.75"
              y1="7.75"
              y2="7.75"
            />
            <circle
              cx="3.75"
              cy="4.25"
              fill="none"
              r="1.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <circle
              cx="3.75"
              cy="11.25"
              fill="none"
              r="1.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `envelope.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **56 lines** · **Exports:** `Envelope`

Contact icon in `RESOURCES`.

```tsx
import { SVGProps } from "react";

export function Envelope({
  variant = "outline",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "outline" | "fill" }) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        {variant === "fill" ? (
          <>
            <path
              d="M8.88,8.827c.074,.042,.166,.042,.24,0l7.777-4.283c-.314-1.173-1.376-2.044-2.647-2.044H3.75c-1.267,0-2.326,.865-2.643,2.033l7.773,4.293Z"
              fill="currentColor"
            />
            <path
              d="M9.845,10.14c-.264,.146-.554,.219-.844,.219s-.582-.073-.846-.22L1,6.188v6.562c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V6.2l-7.155,3.94Z"
              fill="currentColor"
            />
          </>
        ) : (
          <>
            <path
              d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <rect
              height="11.5"
              width="14.5"
              fill="none"
              rx="2"
              ry="2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              transform="translate(18 18) rotate(180)"
              x="1.75"
              y="3.25"
            />
          </>
        )}
      </g>
    </svg>
  );
}
```

#### `cursor-rays.tsx`

**Location:** `packages/ui/src/icons/nucleo/` · **90 lines** · **Exports:** `CursorRays`

Click-origin pill icon inside the analytics dropdown graphic.

```tsx
import { SVGProps } from "react";

export function CursorRays(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          d="M8.095,7.778l7.314,2.51c.222,.076,.226,.388,.007,.47l-3.279,1.233c-.067,.025-.121,.079-.146,.146l-1.233,3.279c-.083,.219-.394,.215-.47-.007l-2.51-7.314c-.068-.197,.121-.385,.318-.318Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="12.031"
          x2="16.243"
          y1="12.031"
          y2="16.243"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="7.75"
          x2="7.75"
          y1="1.75"
          y2="3.75"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="11.993"
          x2="10.578"
          y1="3.507"
          y2="4.922"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="3.507"
          x2="4.922"
          y1="11.993"
          y2="10.578"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="1.75"
          x2="3.75"
          y1="7.75"
          y2="7.75"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="3.507"
          x2="4.922"
          y1="3.507"
          y2="4.922"
        />
      </g>
    </svg>
  );
}
```

#### `typescript.tsx`

**Location:** `packages/ui/src/icons/` · **27 lines** · **Exports:** `Typescript`

SDK icon in `SDKS`.

```tsx
import { SVGProps } from "react";

export function Typescript(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      fill="none"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={128}
        height={128}
        fill="none"
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6 0h116a6 6 0 0 1 6 6v116a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6Zm68.262 113.494V99.468c2.535 2.133 5.288 3.733 8.26 4.799 2.97 1.067 5.971 1.6 9.001 1.6 1.778 0 3.329-.161 4.654-.482 1.326-.321 2.433-.767 3.322-1.337.888-.57 1.551-1.242 1.988-2.016a5.04 5.04 0 0 0 .655-2.52c0-1.228-.349-2.323-1.049-3.287-.699-.965-1.653-1.856-2.862-2.674-1.209-.818-2.644-1.607-4.304-2.367-1.66-.76-3.452-1.534-5.375-2.323-4.895-2.045-8.543-4.544-10.947-7.495C75.202 78.415 74 74.85 74 70.672c0-3.273.656-6.085 1.966-8.438a16.732 16.732 0 0 1 5.354-5.807c2.257-1.52 4.872-2.637 7.844-3.353C92.135 52.358 95.28 52 98.603 52c3.263 0 6.154.197 8.674.592 2.52.394 4.843 1 6.97 1.819v13.105a21.071 21.071 0 0 0-3.43-1.929 27.158 27.158 0 0 0-3.824-1.38 29.09 29.09 0 0 0-3.911-.811 27.607 27.607 0 0 0-3.693-.263c-1.602 0-3.059.153-4.37.46-1.31.307-2.418.738-3.32 1.293-.904.555-1.603 1.22-2.098 1.994-.496.775-.743 1.644-.743 2.608 0 1.052.276 1.995.83 2.827.553.833 1.34 1.622 2.36 2.367 1.02.745 2.257 1.476 3.714 2.192a84.756 84.756 0 0 0 4.938 2.213c2.506 1.052 4.756 2.17 6.752 3.353 1.995 1.183 3.707 2.52 5.134 4.01a15.632 15.632 0 0 1 3.278 5.107c.757 1.914 1.136 4.142 1.136 6.684 0 3.506-.663 6.45-1.988 8.831a16.179 16.179 0 0 1-5.397 5.786c-2.273 1.476-4.916 2.535-7.932 3.178-3.015.643-6.198.964-9.548.964-3.438 0-6.708-.292-9.81-.877-3.103-.584-5.79-1.461-8.063-2.629ZM69 64.554H50.703V116H36.208V64.554H18V53h51v11.554Z"
          clipRule="evenodd"
        />
      </svg>
    </svg>
  );
}
```

#### `python.tsx`

**Location:** `packages/ui/src/icons/` · **23 lines** · **Exports:** `Python`

SDK icon in `SDKS`. Its two snake paths carry `.snake1` / `.snake2` classes so the Solutions panel can colorize them on hover.

```tsx
import { SVGProps } from "react";

export function Python(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 112 113"
      {...props}
    >
      <path
        className="snake snake1"
        fill="currentColor"
        d="M54.919 0c-4.584.022-8.961.413-12.813 1.095C30.76 3.099 28.7 7.295 28.7 15.032v10.219h26.813v3.406H18.637c-7.792 0-14.615 4.684-16.75 13.594-2.461 10.213-2.57 16.586 0 27.25 1.906 7.938 6.458 13.594 14.25 13.594h9.22v-12.25c0-8.85 7.656-16.657 16.75-16.657h26.78c7.456 0 13.407-6.138 13.407-13.625v-25.53c0-7.267-6.13-12.726-13.406-13.938C64.28.328 59.502-.02 54.918 0Zm-14.5 8.22c2.77 0 5.031 2.298 5.031 5.125 0 2.816-2.262 5.093-5.031 5.093-2.78 0-5.031-2.277-5.031-5.093 0-2.827 2.251-5.125 5.03-5.125Z"
      />
      <path
        className="snake snake2"
        fill="currentColor"
        d="M85.638 28.657v11.906c0 9.231-7.826 17-16.75 17H42.106c-7.336 0-13.406 6.279-13.406 13.625V96.72c0 7.266 6.319 11.54 13.406 13.625 8.488 2.495 16.627 2.946 26.782 0 6.75-1.955 13.406-5.888 13.406-13.625V86.5H55.513v-3.405H95.7c7.793 0 10.696-5.436 13.406-13.594 2.8-8.399 2.681-16.476 0-27.25-1.925-7.758-5.604-13.594-13.406-13.594H85.638ZM70.575 93.313c2.78 0 5.031 2.278 5.031 5.094 0 2.827-2.251 5.125-5.03 5.125-2.77 0-5.032-2.298-5.032-5.125 0-2.816 2.261-5.094 5.031-5.094Z"
      />
    </svg>
  );
}
```

#### `go.tsx`

**Location:** `packages/ui/src/icons/` · **21 lines** · **Exports:** `Go`

SDK icon in `SDKS`.

```tsx
import { SVGProps } from "react";

export function Go(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 207 78"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.2 24.1c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h35.7c.4 0 .5.3.3.6l-1.7 2.6c-.2.3-.7.6-1 .6l-36.2-.1ZM1.1 33.3c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h45.6c.4 0 .6.3.5.6l-.8 2.4c-.1.4-.5.6-.9.6l-47.3.1ZM25.3 42.5c-.4 0-.5-.3-.3-.6l1.4-2.5c.2-.3.6-.6 1-.6h20c.4 0 .6.3.6.7l-.2 2.4c0 .4-.4.7-.7.7l-21.8-.1ZM129.1 22.3c-6.3 1.6-10.6 2.8-16.8 4.4-1.5.4-1.6.5-2.9-1-1.5-1.7-2.6-2.8-4.7-3.8-6.3-3.1-12.4-2.2-18.1 1.5-6.8 4.4-10.3 10.9-10.2 19 .1 8 5.6 14.6 13.5 15.7 6.8.9 12.5-1.5 17-6.6.9-1.1 1.7-2.3 2.7-3.7H90.3c-2.1 0-2.6-1.3-1.9-3 1.3-3.1 3.7-8.3 5.1-10.9.3-.6 1-1.6 2.5-1.6h36.4c-.2 2.7-.2 5.4-.6 8.1-1.1 7.2-3.8 13.8-8.2 19.6-7.2 9.5-16.6 15.4-28.5 17-9.8 1.3-18.9-.6-26.9-6.6-7.4-5.6-11.6-13-12.7-22.2-1.3-10.9 1.9-20.7 8.5-29.3C71.1 9.6 80.5 3.7 92 1.6c9.4-1.7 18.4-.6 26.5 4.9 5.3 3.5 9.1 8.3 11.6 14.1.6.9.2 1.4-1 1.7Z"
      />
      <path
        fill="currentColor"
        d="M162.2 77.6c-9.1-.2-17.4-2.8-24.4-8.8-5.9-5.1-9.6-11.6-10.8-19.3-1.8-11.3 1.3-21.3 8.1-30.2 7.3-9.6 16.1-14.6 28-16.7 10.2-1.8 19.8-.8 28.5 5.1 7.9 5.4 12.8 12.7 14.1 22.3 1.7 13.5-2.2 24.5-11.5 33.9-6.6 6.7-14.7 10.9-24 12.8-2.7.5-5.4.6-8 .9ZM186 37.2c-.1-1.3-.1-2.3-.3-3.3-1.8-9.9-10.9-15.5-20.4-13.3-9.3 2.1-15.3 8-17.5 17.4-1.8 7.8 2 15.7 9.2 18.9 5.5 2.4 11 2.1 16.3-.6 7.9-4.1 12.2-10.5 12.7-19.1Z"
      />
    </svg>
  );
}
```

#### `ruby.tsx`

**Location:** `packages/ui/src/icons/` · **272 lines** · **Exports:** `Ruby`

SDK icon in `SDKS`.

```tsx
import { SVGProps } from "react";

export function Ruby(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 199 198"
      fill="none"
      {...props}
    >
      <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path
          fill="#871101"
          fillOpacity={0.8}
          d="M153.5 130.41 40.38 197.58l146.469-9.939L198.13 39.95l-44.63 90.46Z"
        />
        <path
          fill="#871101"
          d="M187.089 187.54 174.5 100.65l-34.291 45.28 46.88 41.61Z"
        />
        <path
          fill="url(#b)"
          d="M187.259 187.54 95.03 180.3l-54.16 17.091 146.389-9.851Z"
        />
        <path
          fill="url(#c)"
          d="m41 197.41 23.04-75.48-50.7 10.841L41 197.41Z"
        />
        <path
          fill="url(#d)"
          d="M140.2 146.18 119 63.14l-60.67 56.87 81.87 26.17Z"
        />
        <path
          fill="url(#e)"
          d="m193.32 64.31-57.35-46.84L120 69.1l73.32-4.79Z"
        />
        <path fill="url(#f)" d="m166.5.77-33.73 18.64L111.49.52l55.01.25Z" />
        <path fill="url(#g)" d="m0 158.09 14.13-25.77-11.43-30.7L0 158.09Z" />
        <path
          fill="#fff"
          d="m1.94 100.65 11.5 32.62 49.97-11.211 57.05-53.02 16.1-51.139L111.209 0l-43.1 16.13c-13.58 12.63-39.93 37.62-40.88 38.09-.94.48-17.4 31.59-25.29 46.43Z"
        />
        <path
          fill="url(#h)"
          d="M42.32 42.05c29.43-29.18 67.37-46.42 81.93-31.73 14.551 14.69-.88 50.39-30.31 79.56s-66.9 47.36-81.45 32.67c-14.56-14.68.4-51.33 29.83-80.5Z"
        />
        <path
          fill="url(#i)"
          d="m41 197.38 22.86-75.72 75.92 24.39c-27.45 25.74-57.98 47.5-98.78 51.33Z"
        />
        <path
          fill="url(#j)"
          d="m120.56 68.89 19.49 77.2c22.93-24.11 43.51-50.03 53.589-82.09l-73.079 4.89Z"
        />
        <path
          fill="url(#k)"
          d="M193.44 64.39c7.8-23.54 9.6-57.31-27.181-63.58l-30.18 16.67 57.361 46.91Z"
        />
        <path
          fill="#9E1209"
          d="M0 157.75c1.08 38.851 29.11 39.43 41.05 39.771L13.47 133.11 0 157.75Z"
        />
        <path
          fill="url(#l)"
          d="M120.669 69.01c17.62 10.83 53.131 32.58 53.851 32.98 1.119.63 15.31-23.93 18.53-37.81l-72.381 4.83Z"
        />
        <path
          fill="url(#m)"
          d="m63.83 121.66 30.56 58.96c18.07-9.8 32.22-21.74 45.18-34.53l-75.74-24.43Z"
        />
        <path
          fill="url(#n)"
          d="m13.35 133.19-4.33 51.56c8.17 11.16 19.41 12.13 31.2 11.26-8.53-21.23-25.57-63.68-26.87-62.82Z"
        />
        <path
          fill="url(#o)"
          d="m135.9 17.61 60.71 8.52C193.37 12.4 183.42 3.54 166.46.77L135.9 17.61Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={151.795}
          x2={97.93}
          y1={217.785}
          y2={181.638}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#871101" />
          <stop offset={0.99} stopColor="#911209" />
          <stop offset={1} stopColor="#911209" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={38.696}
          x2={47.047}
          y1={127.391}
          y2={181.661}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.23} stopColor="#E57252" />
          <stop offset={0.46} stopColor="#DE3B20" />
          <stop offset={0.99} stopColor="#A60003" />
          <stop offset={1} stopColor="#A60003" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={96.133}
          x2={99.21}
          y1={76.715}
          y2={132.102}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.23} stopColor="#E4714E" />
          <stop offset={0.56} stopColor="#BE1A0D" />
          <stop offset={0.99} stopColor="#A80D00" />
          <stop offset={1} stopColor="#A80D00" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={147.103}
          x2={156.314}
          y1={25.521}
          y2={65.216}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.18} stopColor="#E46342" />
          <stop offset={0.4} stopColor="#C82410" />
          <stop offset={0.99} stopColor="#A80D00" />
          <stop offset={1} stopColor="#A80D00" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={118.976}
          x2={158.669}
          y1={11.541}
          y2={-8.305}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.54} stopColor="#C81F11" />
          <stop offset={0.99} stopColor="#BF0905" />
          <stop offset={1} stopColor="#BF0905" />
        </linearGradient>
        <linearGradient
          id="g"
          x1={3.903}
          x2={7.17}
          y1={113.555}
          y2={146.263}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.31} stopColor="#DE4024" />
          <stop offset={0.99} stopColor="#BF190B" />
          <stop offset={1} stopColor="#BF190B" />
        </linearGradient>
        <linearGradient
          id="h"
          x1={-18.556}
          x2={135.015}
          y1={155.104}
          y2={-2.809}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BD0012" />
          <stop offset={0.07} stopColor="#fff" />
          <stop offset={0.17} stopColor="#fff" />
          <stop offset={0.27} stopColor="#C82F1C" />
          <stop offset={0.33} stopColor="#820C01" />
          <stop offset={0.46} stopColor="#A31601" />
          <stop offset={0.72} stopColor="#B31301" />
          <stop offset={0.99} stopColor="#E82609" />
          <stop offset={1} stopColor="#E82609" />
        </linearGradient>
        <linearGradient
          id="i"
          x1={99.075}
          x2={52.818}
          y1={171.033}
          y2={159.617}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C0C01" />
          <stop offset={0.54} stopColor="#990C00" />
          <stop offset={0.99} stopColor="#A80D0E" />
          <stop offset={1} stopColor="#A80D0E" />
        </linearGradient>
        <linearGradient
          id="j"
          x1={178.526}
          x2={137.433}
          y1={115.515}
          y2={78.684}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7E110B" />
          <stop offset={0.99} stopColor="#9E0C00" />
          <stop offset={1} stopColor="#9E0C00" />
        </linearGradient>
        <linearGradient
          id="k"
          x1={193.623}
          x2={173.154}
          y1={47.937}
          y2={26.054}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#79130D" />
          <stop offset={0.99} stopColor="#9E120B" />
          <stop offset={1} stopColor="#9E120B" />
        </linearGradient>
        <linearGradient
          id="n"
          x1={26.67}
          x2={9.989}
          y1={197.336}
          y2={140.742}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8B2114" />
          <stop offset={0.43} stopColor="#9E100A" />
          <stop offset={0.99} stopColor="#B3100C" />
          <stop offset={1} stopColor="#B3100C" />
        </linearGradient>
        <linearGradient
          id="o"
          x1={154.641}
          x2={192.039}
          y1={9.798}
          y2={26.306}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B31000" />
          <stop offset={0.44} stopColor="#910F08" />
          <stop offset={0.99} stopColor="#791C12" />
          <stop offset={1} stopColor="#791C12" />
        </linearGradient>
        <radialGradient
          id="l"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="translate(143.831 79.388) scale(50.3576)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A80D00" />
          <stop offset={0.99} stopColor="#7E0E08" />
          <stop offset={1} stopColor="#7E0E08" />
        </radialGradient>
        <radialGradient
          id="m"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="translate(74.092 145.751) scale(66.9437)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A30C00" />
          <stop offset={0.99} stopColor="#800E08" />
          <stop offset={1} stopColor="#800E08" />
        </radialGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h198.13v197.58H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
```

#### `php.tsx`

**Location:** `packages/ui/src/icons/` · **41 lines** · **Exports:** `Php`

SDK icon in `SDKS`.

```tsx
import { SVGProps } from "react";

export function Php(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="130"
      height="62"
      viewBox="0 0 130 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M26.0001 20.7441C27.4318 20.5641 28.8849 20.6696 30.2755 21.0545C31.6661 21.4394 32.9666 22.096 34.102 22.9865C34.8345 24.1149 35.3016 25.3947 35.468 26.7296C35.6345 28.0646 35.496 29.4199 35.063 30.6936C34.6832 33.8292 33.1667 36.7166 30.8009 38.8092C27.9478 40.647 24.5751 41.5089 21.1901 41.2653H14.6901L18.6829 20.7859L26.0001 20.7441ZM0 62H10.6786L13.209 49.0002H22.3415C25.706 49.0858 29.0636 48.6521 32.2959 47.7141C34.9505 46.8377 37.3769 45.3819 39.3995 43.452C42.8974 40.3066 45.255 36.0912 46.1038 31.4643C46.7738 29.1614 46.8918 26.733 46.4481 24.376C46.0044 22.019 45.0117 19.7997 43.5502 17.898C41.7883 16.152 39.6664 14.8116 37.3329 13.9704C34.9993 13.1292 32.5102 12.8075 30.0394 13.0277H9.5504L0 62Z"
          fill="#484c88"
        />
        <path
          d="M26.0001 20.7441C27.4318 20.5641 28.8849 20.6696 30.2755 21.0545C31.6661 21.4394 32.9666 22.096 34.102 22.9865C34.8345 24.1149 35.3016 25.3947 35.468 26.7296C35.6345 28.0646 35.496 29.4199 35.063 30.6936C34.6832 33.8292 33.1667 36.7166 30.8009 38.8092C27.9478 40.647 24.5751 41.5089 21.1901 41.2653H14.6901L18.6829 20.7859L26.0001 20.7441ZM0 62H10.6786L13.209 49.0002H22.3415C25.706 49.0858 29.0636 48.6521 32.2959 47.7141C34.9505 46.8377 37.3769 45.3819 39.3995 43.452C42.8974 40.3066 45.255 36.0912 46.1038 31.4643C46.7738 29.1614 46.8918 26.733 46.4481 24.376C46.0044 22.019 45.0117 19.7997 43.5502 17.898C41.7883 16.152 39.6664 14.8116 37.3329 13.9704C34.9993 13.1292 32.5102 12.8075 30.0394 13.0277H9.5504L0 62Z"
          fill="#484c88"
        />
        <path
          d="M53.9367 0H64.5364L61.9689 12.9998H71.3986C75.7309 12.5462 80.0834 13.6471 83.679 16.1059C84.8687 17.4583 85.682 19.0997 86.0373 20.8655C86.3926 22.6313 86.2774 24.4595 85.7033 26.1668L81.274 48.9583H70.5489L74.7647 27.2904C75.058 26.4637 75.1627 25.5818 75.0711 24.7094C74.9795 23.837 74.694 22.9961 74.2354 22.2483C72.6985 21.1456 70.7989 20.6707 68.9239 20.9205H60.46L55.0046 48.9816H44.3817L53.9367 0Z"
          fill="url(#paint2_linear_6002_28760)"
        />
        <path
          d="M53.9367 0H64.5364L61.9689 12.9998H71.3986C75.7309 12.5462 80.0834 13.6471 83.679 16.1059C84.8687 17.4583 85.682 19.0997 86.0373 20.8655C86.3926 22.6313 86.2774 24.4595 85.7033 26.1668L81.274 48.9583H70.5489L74.7647 27.2904C75.058 26.4637 75.1627 25.5818 75.0711 24.7094C74.9795 23.837 74.694 22.9961 74.2354 22.2483C72.6985 21.1456 70.7989 20.6707 68.9239 20.9205H60.46L55.0046 48.9816H44.3817L53.9367 0Z"
          fill="#484c88"
        />
        <path
          d="M109.289 20.744C110.72 20.564 112.173 20.6695 113.564 21.0544C114.955 21.4393 116.255 22.096 117.39 22.9865C118.123 24.1148 118.59 25.3946 118.757 26.7296C118.923 28.0645 118.784 29.4198 118.351 30.6935C117.972 33.8291 116.455 36.7166 114.089 38.8092C111.231 40.6509 107.851 41.513 104.46 41.2652H97.9646L101.948 20.7626L109.289 20.744ZM83.2885 62H93.9671L96.4975 49.0001H105.635C109.005 49.0877 112.369 48.6539 115.608 47.7141C118.262 46.8377 120.689 45.3818 122.711 43.452C126.201 40.3032 128.55 36.0881 129.392 31.4642C130.062 29.1613 130.18 26.733 129.737 24.376C129.293 22.019 128.3 19.7997 126.839 17.898C125.076 16.1551 122.954 14.8176 120.622 13.9788C118.289 13.1401 115.802 12.8202 113.333 13.0416H92.811L83.2885 62Z"
          fill="url(#paint4_linear_6002_28760)"
        />
        <path
          d="M109.289 20.744C110.72 20.564 112.173 20.6695 113.564 21.0544C114.955 21.4393 116.255 22.096 117.39 22.9865C118.123 24.1148 118.59 25.3946 118.757 26.7296C118.923 28.0645 118.784 29.4198 118.351 30.6935C117.972 33.8291 116.455 36.7166 114.089 38.8092C111.231 40.6509 107.851 41.513 104.46 41.2652H97.9646L101.948 20.7626L109.289 20.744ZM83.2885 62H93.9671L96.4975 49.0001H105.635C109.005 49.0877 112.369 48.6539 115.608 47.7141C118.262 46.8377 120.689 45.3818 122.711 43.452C126.201 40.3032 128.55 36.0881 129.392 31.4642C130.062 29.1613 130.18 26.733 129.737 24.376C129.293 22.019 128.3 19.7997 126.839 17.898C125.076 16.1551 122.954 14.8176 120.622 13.9788C118.289 13.1401 115.802 12.8202 113.333 13.0416H92.811L83.2885 62Z"
          fill="#484c88"
        />
      </g>
    </svg>
  );
}
```

---

### Utility functions

These live in `@dub/utils`. The first four are small dedicated files, reproduced in full. The last two are **extracts** — the nav borrows one declaration from a larger, mostly unrelated module.

#### `cn.ts`

**Location:** `packages/utils/src/functions/` · **6 lines** · **Exports:** `cn`

Class-name merge used by every nav component: `clsx` for conditionals, `tailwind-merge` to resolve conflicting Tailwind classes so overrides passed in via props actually win.

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

#### `fetcher.ts`

**Location:** `packages/utils/src/functions/` · **27 lines** · **Exports:** `fetcher`, `SWRError`

The SWR fetcher used by `Nav` and `NavMobile` to read `/api/auth/session` and decide between the Dashboard button and the Log in / Sign up pair.

```ts
interface SWRError extends Error {
  info: any;
  status: number;
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit & { headers?: Record<string, string> },
): Promise<JSON> {
  const res = await fetch(input, {
    ...init,
    ...(init?.headers && { headers: init.headers }),
  });

  if (!res.ok) {
    const message =
      (await res.json())?.error?.message ||
      "An error occurred while fetching the data.";
    const error = new Error(message) as SWRError;
    error.info = message;
    error.status = res.status;

    throw error;
  }

  return res.json();
}
```

#### `capitalize.ts`

**Location:** `packages/utils/src/functions/` · **8 lines** · **Exports:** `capitalize`

Used by the analytics and partners dropdown graphics to title-case their hardcoded metric keys.

```ts
// capitalize first character of each word in a string
export function capitalize(str?: string | null) {
  if (!str || typeof str !== "string") return str;
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
```

#### `nformatter.ts`

**Location:** `packages/utils/src/functions/` · **41 lines** · **Exports:** `nFormatter`

Compact number formatting for the revenue and payout figures in the partners dropdown graphic.

```ts
export function nFormatter(
  number?: number | bigint,
  opts: { digits?: number; full?: boolean } = {
    digits: 1,
  },
) {
  const num = number !== undefined ? Number(number) : undefined;

  if (!num) {
    return "0";
  }

  if (opts.full) {
    return Intl.NumberFormat("en-US").format(num);
  }

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  if (num < 1) {
    return num.toFixed(opts.digits).replace(rx, "$1");
  }

  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(opts.digits).replace(rx, "$1") + item.symbol
    : "0";
}
```

#### `urls.ts` — EXTRACT

**Location:** `packages/utils/src/functions/` · **244 lines total, lines 172–186 shown** · **Nav uses:** `createHref`

The rest of this file is unrelated URL helpers. `createHref` is the single reason the nav imports it, and it is what makes every nav link UTM-tagged on custom domains: on `dub.co` it returns the href untouched, anywhere else it rewrites to an absolute `https://dub.co...` URL carrying the campaign params.

```ts
export const createHref = (
  href: string,
  domain: string,
  // any params, doesn't have to be all of them
  utmParams?: Partial<Record<(typeof UTMTags)[number], string>>,
) => {
  if (domain === "dub.co") return href;
  const url = new URL(href.startsWith("/") ? `https://dub.co${href}` : href);
  if (utmParams) {
    Object.entries(utmParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  return url.toString();
};
```

#### `main.ts` — EXTRACT

**Location:** `packages/utils/src/constants/` · **89 lines total, lines 10–15 shown** · **Nav uses:** `APP_DOMAIN`

Resolves the dashboard origin the auth buttons point at, per deployment environment.

```ts
export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://app.dub.co"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? "https://preview.dub.co"
      : "http://localhost:8888";
```

---

### Tailwind animation config

#### `tailwind.config.ts` — EXTRACT

**Location:** `packages/tailwind-config/` · **the `// Navigation menu` blocks only**

These six animations exist solely for the nav dropdowns. `enter-from-*` / `exit-to-*` drive the horizontal slide when moving between panels (selected by Radix via `data-[motion=from-start|from-end|to-start|to-end]` on `NavigationMenu.Content`); `scale-in-content` / `scale-out-content` drive the viewport opening and closing.

```ts
animation: {
        // Navigation menu
        "enter-from-right": "enter-from-right 0.15s ease",
        "enter-from-left": "enter-from-left 0.15s ease",
        "exit-to-right": "exit-to-right 0.15s ease",
        "exit-to-left": "exit-to-left 0.15s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
},
keyframes: {
        // Navigation menu
        "enter-from-right": {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "enter-from-left": {
          "0%": { transform: "translateX(-200px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "exit-to-right": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(200px)", opacity: "0" },
        },
        "exit-to-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-200px)", opacity: "0" },
        },
        "scale-in-content": {
          "0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: "0" },
          "100%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
        },
        "scale-out-content": {
          "0%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
          "100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: "0" },
        },
},
```

---

## 6. Third-party dependencies

From `packages/ui/package.json`:

| Package                           | Version     | Nav usage                                                                                                                      |
| --------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `@radix-ui/react-navigation-menu` | `^1.2.14`   | `Root`, `List`, `Item`, `Trigger`, `Content`, `Viewport`, `Link`                                                               |
| `@radix-ui/react-popover`         | —           | `NavWordmark` context menu                                                                                                     |
| `motion`                          | `^12.23.22` | `LayoutGroup` (nav), `motion.div` (`AnimatedSizeContainer`)                                                                    |
| `swr`                             | `^2.1.5`    | session fetch for the auth buttons                                                                                             |
| `lucide-react`                    | `^0.462.0`  | `Menu`, `X`, `ChevronDown` (nav-mobile); `Type`, `BoxSelect`, `Home`, `LayoutGrid` (nav-wordmark); `Link2` (analytics graphic) |
| `class-variance-authority`        | —           | `buttonVariants`                                                                                                               |
| `sonner`                          | —           | copy toast in `NavWordmark`                                                                                                    |
| `clsx` + `tailwind-merge`         | —           | backing `cn`                                                                                                                   |
| `next`                            | —           | `next/link`, `next/image`, `next/navigation` (`useParams`, `usePathname`)                                                      |

---

## Appendix A — how to reuse the nav

```tsx
import { Nav, NavMobile, type NavItem } from "@dub/ui";

<NavMobile theme="dark" navItems={customItems} staticDomain="acme.com" />
<Nav
  theme="dark"
  navItems={customItems}
  staticDomain="acme.com"
  maxWidthWrapperClassName="max-w-screen-lg"
  logo={<MyLogo />}
/>
```

**`Nav` props**

| Prop                       | Type                | Default                         | Notes                                                                        |
| -------------------------- | ------------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| `theme`                    | `"light" \| "dark"` | `"light"`                       | Adds `dark` to the nav root and publishes via `NavContext`.                  |
| `staticDomain`             | `string`            | —                               | Overrides the `[domain]` route param; needed outside the `[domain]` segment. |
| `maxWidthWrapperClassName` | `string`            | —                               | Merged onto the inner `MaxWidthWrapper`.                                     |
| `navItems`                 | `NavItem[]`         | exported `navItems`             | Full replacement of the item registry.                                       |
| `logo`                     | `ReactNode`         | `<NavWordmark />` in a `<Link>` | Replaces the left slot entirely.                                             |

**`NavMobile` props**: `theme`, `staticDomain`, `navItems` — same semantics. No `logo` or `maxWidthWrapperClassName`.

**`NavItem` shape**

```ts
type NavItem = {
  name: string; // label
  href?: string; // plain link (omit for a dropdown trigger)
  segments?: string[]; // pathname prefixes that mark it active
  content?: ComponentType<{ domain: string }>; // desktop dropdown panel
  childItems?: NavItemChildren; // mobile accordion contents
};
```

**Adding a nav item**: add an entry to `navItems` in `nav.tsx`. If it needs a dropdown, add a panel component under `nav/content/` and a matching `childItems` array in `content.ts` for the mobile accordion.

**Adding a link to an existing dropdown**: edit the relevant panel's local `mainLinks` / `products` array **and** the corresponding array in `content.ts` — see the duplication note in section 4.

---

## Appendix B — the other navigation system (dashboard sidebar)

Distinct from everything above; listed so the two are not confused. The signed-in app (`app.dub.co`, `partners.dub.co`, `admin.dub.co`) uses a left sidebar, not a top bar.

| File                       | Location                                      | Role                                                              |
| -------------------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| `main-nav.tsx`             | `apps/web/ui/layout/`                         | Sidebar shell: fixed/slide-in container, mobile toggle, backdrop. |
| `sidebar-nav.tsx`          | `apps/web/ui/layout/sidebar/`                 | Generic sidebar nav renderer (areas, groups, items).              |
| `app-sidebar-nav.tsx`      | `apps/web/ui/layout/sidebar/`                 | Workspace-side nav areas (links, analytics, program, settings).   |
| `partners-sidebar-nav.tsx` | `apps/web/ui/layout/sidebar/`                 | Partner-portal nav areas.                                         |
| `sidebar-usage.tsx`        | `apps/web/ui/layout/sidebar/`                 | Usage meters in the sidebar footer.                               |
| `nav-button.tsx`           | `apps/web/ui/layout/page-content/`            | Mobile hamburger that opens the sidebar.                          |
| `page-nav-tabs.tsx`        | `apps/web/ui/layout/`                         | Secondary in-page tab navigation.                                 |
| `layout-nav-client.tsx`    | `apps/web/app/(ee)/admin.dub.co/(dashboard)/` | Admin-area nav.                                                   |

They share only low-level primitives (`cn`, `buttonVariants`, `MaxWidthWrapper`, icons) — no components are shared between the marketing nav and the dashboard sidebar.
