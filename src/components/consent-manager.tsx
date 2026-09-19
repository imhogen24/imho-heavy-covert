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
            primary: "hsl(31, 100%, 47%)",
            primaryHover: "hsl(31, 100%, 40%)",
            surface: "hsl(0, 0%, 100%)",
            surfaceHover: "hsl(240, 4.8%, 95.9%)",
            border: "hsl(240, 5.9%, 93%)",
            borderHover: "hsl(240, 5.9%, 90%)",
            text: "hsl(240, 10%, 3.9%)",
            textMuted: "hsl(240, 3.8%, 46.1%)",
            textOnPrimary: "hsl(0, 0%, 98%)",
            overlay: "hsla(0, 0%, 98%, 0.6)",
            switchTrack: "hsl(240, 5.9%, 90%)",
            switchTrackActive: "hsl(31, 100%, 47%)",
            switchThumb: "hsl(0, 0%, 100%)",
          },
          dark: {
            primary: "hsl(31, 100%, 47%)",
            surface: "hsl(240, 10%, 3.9%)",
            surfaceHover: "hsl(240, 3.7%, 15.9%)",
            border: "hsl(240, 6%, 93%)",
            text: "hsl(0, 0%, 98%)",
            textMuted: "hsl(240, 5%, 64.9%)",
            textOnPrimary: "hsl(240, 5.9%, 10%)",
            overlay: "hsla(240, 10%, 4%, 0.6)",
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
