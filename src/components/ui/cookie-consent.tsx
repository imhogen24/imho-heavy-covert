'use client'
import React, { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from './checkbox';
import Link from 'next/link';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  // Load preferences from localStorage only once on initial mount
  useEffect(() => {
    // Check if running in browser environment
    if (typeof window !== 'undefined') {
      try {
        const storedPreferences = localStorage.getItem('cookiePreferences');
        if (storedPreferences) {
          setPreferences(JSON.parse(storedPreferences));
          setBannerOpen(false);
        } else {
          setBannerOpen(true);
        }
      } catch (error) {
        console.error('Error loading cookie preferences:', error);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };

    setPreferences(allAccepted);
    setBannerOpen(false);
    setDialogOpen(false);

    // Save to localStorage after state is updated
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    }
  };

  const rejectAll = () => {
    setPreferences(defaultPreferences);
    setBannerOpen(false);
    setDialogOpen(false);

    // Save to localStorage after state is updated
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(defaultPreferences));
    }
  };

  const savePreferences = () => {
    setBannerOpen(false);
    setDialogOpen(false);

    // Save to localStorage after state is updated
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    }
  };

  // Use explicit callback function for toggle
  const handleTogglePreference = (key: keyof CookiePreferences) => (e: React.MouseEvent) => {
    // Don't allow toggling necessary cookies
    if (key === 'necessary') return;

    // Use functional update to ensure we're working with latest state
    setPreferences(prev => {
      const newPreferences = {
        ...prev,
        [key]: !prev[key],
      };
      console.log(`Toggled ${key} to:`, newPreferences[key]);
      return newPreferences;
    });
  };

  const openDialog = () => {
    setDialogOpen(true);
  };


  console.log('Current preferences:', preferences);

  return (
    <>
      {/* Banner notification */}
      {bannerOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-accent border-t muted-border p-4 shadow-lg flex flex-col lg:flex-row gap-5 justify-between z-50">
          <div className='lg:max-w-[70%]'>
            <h1>IMHO Cares About Your Privacy</h1>
            <p className="text-sm mb-4 sm:mb-0 text-muted-foreground">
              IMHO and our third-party services use cookies to store and access information to deliver, maintain and improve our services. You can select 'Accept All' to consent to these uses or click on 'Manage Cookies` to review your options and exercise your right to object to Legitimate Interest where used.
              <Link href={"#"} className='underline'>   Privacy Statement.</Link>
            </p>
          </div>
          <div className="flex lg:flex-col gap-2 rounded-[0.5rem]">
            {/* <Button
              variant="outline"
              size="sm"
              onClick={openDialog}
              className="text-xs rounded-[0.5rem] muted-border"
            >
              Manage Cookies
            </Button> */}
            <Button
              variant="outline"
              size="sm"
              onClick={rejectAll}
              className="text-xs rounded-[0.5rem] muted-border"
            >
              Reject All
            </Button>
            <Button
              size="sm"
              onClick={acceptAll}
              className="text-x rounded-[0.5rem] text-white"
            >
              Accept All
            </Button>
          </div>
        </div>
      )}

      {/* Full dialog for managing preferences */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Cookie Preferences</AlertDialogTitle>
            <AlertDialogDescription>
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-muted-foreground">Required for the website to function properly.</p>
                </div>
                <Checkbox
                  checked={preferences.necessary}
                  disabled
                  className="h-4 w-4"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">Help us improve our website by collecting anonymous information.</p>
                </div>
                <Checkbox
                  id="analytics-checkbox"
                  checked={preferences.analytics}
                  onCheckedChange={() => handleTogglePreference('analytics')}
                  className="h-4 w-4"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-muted-foreground">Used to track visitors across websites to display relevant advertisements.</p>
                </div>
                <Checkbox
                  id="marketing-checkbox"
                  checked={preferences.marketing}
                  onCheckedChange={() => handleTogglePreference('marketing')}
                  className="h-4 w-4"
                />
              </div>
            </div>
          </div>

          <AlertDialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <AlertDialogCancel
                asChild
                onClick={rejectAll}
              >
                <Button variant="outline" className='muted-border w-fit p-2 rounded-[0.5rem]'>
                  Reject All
                </Button>
              </AlertDialogCancel>
            </div>
            <AlertDialogAction asChild onClick={savePreferences}>
              <Button className='w-fit p-2 rounded-[0.5rem] dark:text-white'>Save Preferences</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}