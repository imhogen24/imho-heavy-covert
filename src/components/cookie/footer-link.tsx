// components/ConsentFooterLink.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { useCookieConsent } from '../../../context/cookies/consent';


export const ConsentFooterLink: React.FC = () => {
  const { openConsentManager } = useCookieConsent();

  return (
    <Button
      variant="link"
      onClick={openConsentManager}
      className="text-xs text-muted-foreground"
    >
      Cookie Preferences
    </Button>
  );
};