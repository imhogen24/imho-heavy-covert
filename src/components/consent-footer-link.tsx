// components/consent-footer-link.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useConsentManager } from "@c15t/nextjs";

export function ConsentFooterLink() {
  const { setActiveUI } = useConsentManager();

  return (
    <Button
      variant="link"
      onClick={() => setActiveUI("dialog")}
      className="text-xs text-muted-foreground"
    >
      Cookie Preferences
    </Button>
  );
}
