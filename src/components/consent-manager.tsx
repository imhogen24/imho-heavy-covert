// components/consent-manager.tsx
"use client";

import {
  ConsentManagerProvider,
  ConsentBanner,
  ConsentDialog,
} from "@c15t/nextjs";

export function ConsentManager({ children }: { children: React.ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement"],
        theme: {
          colors: {
            surface: "hsl(var(--popover))",
            surfaceHover: "hsl(var(--popover))",
          },
          slots: {
            consentBannerCard:
              "rounded-2xl ring-1 ring-foreground/10 dark:ring-foreground/20 shadow-lg max-w-md w-full",
            consentBannerFooter: "gap-3 p-4",
            consentBannerTitle: "text-base font-semibold",
            consentBannerDescription: "text-sm",
          },
          consentActions: {
            default: { mode: "filled" },
            reject: { variant: "neutral", mode: "filled" },
            accept: { variant: "neutral", mode: "filled" },
            customize: { variant: "primary", mode: "filled" },
          },
        },
      }}
    >
      <ConsentBanner layout={[["reject", "accept"], "customize"]} />
      <ConsentDialog />
      {children}
    </ConsentManagerProvider>
  );
}
