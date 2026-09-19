// src/components/consent-gated-scripts.tsx
"use client";

import { useConsentManager } from "@c15t/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function ConsentGatedScripts() {
  const { has } = useConsentManager();

  if (!has("measurement")) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
