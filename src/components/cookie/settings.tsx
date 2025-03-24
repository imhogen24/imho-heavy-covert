'use client'
import React, { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ConsentState, COOKIE_CATEGORIES } from '@/lib/cookie-consent';
import { useCookieConsent } from '../../../context/cookies/consent';

export const CookieSettings: React.FC = () => {
  const {
    consentState,
    showSettings,
    toggleSettings,
    handleSavePreferences,
    handleAcceptAll,
    handleRejectAll
  } = useCookieConsent();

  // Local state for form
  const [preferences, setPreferences] = useState<ConsentState>({ ...consentState });

  // Update local preferences when context changes
  useEffect(() => {
    setPreferences({ ...consentState });
  }, [consentState]);

  // Reset form when dialog opens
  const onOpenChange = (open: boolean): void => {
    if (open) {
      setPreferences({ ...consentState });
    } else {
      toggleSettings();
    }
  };

  // Handle toggle changes
  const handleToggle = (category: COOKIE_CATEGORIES): void => {
    if (category === COOKIE_CATEGORIES.NECESSARY) return; // Can't toggle necessary

    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Save preferences
  const savePreferences = (): void => {
    handleSavePreferences(preferences);
  };

  return (
    <Dialog open={showSettings} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie Settings</DialogTitle>
          <DialogDescription>
            Customize which cookies you want to accept. Necessary cookies are required for basic functionality.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="necessary" className="font-medium">
                Necessary
              </Label>
              <p className="text-sm text-muted-foreground">
                Required for the website to function properly.
              </p>
            </div>
            <Switch
              id="necessary"
              checked={true}
              disabled={true}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="functional" className="font-medium">
                Functional
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable enhanced features and personalization.
              </p>
            </div>
            <Switch
              id="functional"
              checked={preferences[COOKIE_CATEGORIES.FUNCTIONAL]}
              onCheckedChange={() => handleToggle(COOKIE_CATEGORIES.FUNCTIONAL)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="analytics" className="font-medium">
                Analytics
              </Label>
              <p className="text-sm text-muted-foreground">
                Help us improve by collecting anonymous usage data.
              </p>
            </div>
            <Switch
              id="analytics"
              checked={preferences[COOKIE_CATEGORIES.ANALYTICS]}
              onCheckedChange={() => handleToggle(COOKIE_CATEGORIES.ANALYTICS)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="marketing" className="font-medium">
                Marketing
              </Label>
              <p className="text-sm text-muted-foreground">
                Allow us to provide personalized ads.
              </p>
            </div>
            <Switch
              id="marketing"
              checked={preferences[COOKIE_CATEGORIES.MARKETING]}
              onCheckedChange={() => handleToggle(COOKIE_CATEGORIES.MARKETING)}
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-between flex-col gap-2 sm:flex-row">
          <div className="flex gap-2">
            <Button
              variant="outline"
              type="button"
              onClick={handleRejectAll}
              size="sm"
              className='w-full md:w-fit p-3'
            >
              Reject All
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={handleAcceptAll}
              size="sm"
              className='w-full md:w-fit p-3'
            >
              Accept All
            </Button>
          </div>
          <Button type="button" className='w-full md:w-fit p-3 text-whtie' onClick={savePreferences}>
            Save Preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};