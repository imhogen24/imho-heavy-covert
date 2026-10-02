// components/consent-manager.tsx
"use client";

import {
  ConsentManagerProvider,
  ConsentBanner,
  ConsentDialog,
} from "@c15t/nextjs";

/**
 * Every colour is expressed as `hsl(var(--token))` against the design tokens in
 * `globals.css`, so dark mode is handled by the tokens themselves — they are
 * already redefined under `.dark`, and c15t emits these as custom properties
 * that resolve at use time.
 *
 * `dark` still has to repeat the same references. c15t deep-merges this theme
 * onto its own defaults, whose dark palette is blue (`hsl(228, 100%, 70%)`), so
 * any key left unset here falls back to that blue rather than to `colors`.
 *
 * `border` is the one token that isn't a straight mirror: `.muted-border` maps
 * to `--border` in light and `--muted` in dark, because `--border` under `.dark`
 * holds a near-white value. The `dark` block follows that helper.
 *
 * `globals.css` remaps the `--button-*` colour tokens, whose defaults rest a
 * filled button on `--c15t-text-muted` and make it read as disabled.
 */
export function ConsentManager({ children }: { children: React.ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement"],
        theme: {
          colors: {
            primary: "hsl(var(--primary))",
            primaryHover: "hsl(var(--primary) / 0.9)",
            surface: "hsl(var(--background))",
            surfaceHover: "hsl(var(--accent))",
            border: "hsl(var(--border))",
            borderHover: "hsl(var(--input))",
            text: "hsl(var(--foreground))",
            textMuted: "hsl(var(--muted-foreground))",
            textOnPrimary: "hsl(var(--primary-foreground))",
            overlay: "hsl(var(--background) / 0.6)",
            switchTrack: "hsl(var(--input))",
            switchTrackActive: "hsl(var(--primary))",
            switchThumb: "hsl(var(--background))",
          },
          dark: {
            primary: "hsl(var(--primary))",
            primaryHover: "hsl(var(--primary) / 0.9)",
            surface: "hsl(var(--background))",
            surfaceHover: "hsl(var(--accent))",
            border: "hsl(var(--muted))",
            borderHover: "hsl(var(--muted))",
            text: "hsl(var(--foreground))",
            textMuted: "hsl(var(--muted-foreground))",
            // The orange is the same in both modes, so anything sitting on
            // it keeps a light label. `--primary-foreground` inverts to near-black
            // under `.dark`, which is what turned the branding tag black.
            textOnPrimary: "hsl(var(--foreground))",
            overlay: "hsl(var(--background) / 0.6)",
            switchTrack: "hsl(var(--input))",
            switchTrackActive: "hsl(var(--primary))",
            switchThumb: "hsl(var(--background))",
          },
          slots: {
            consentBannerCard:
              "rounded-2xl border muted-border max-w-md w-full",
            consentBannerFooter: "gap-3 p-4 muted-border",
            consentBannerTitle: "text-base font-semibold",
            consentBannerDescription: "text-sm",
            consentDialogCard: "muted-border",
            consentWidget: "muted-border",
            consentWidgetAccordion: "muted-border",
            consentWidgetFooter: "muted-border",
            buttonPrimary: "rounded-2xl muted-border",
            buttonSecondary: "rounded-2xl muted-border",
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
