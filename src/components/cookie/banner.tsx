'use client'
import React from 'react';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCookieConsent } from '../../../context/cookies/consent';

export const CookieBanner: React.FC = () => {
  const {
    showBanner,
    handleAcceptAll,
    handleRejectAll,
    toggleSettings
  } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-accent">
      <Card className="max-w-4xl mx-auto border-primary/20">
        <CardHeader>
          <CardTitle>Cookie Preferences</CardTitle>
          <CardDescription>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            We use necessary cookies that are required for the operation of our website.
            You can choose to accept all cookies or customize your preferences.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 justify-end">
          <Button variant="outline" className='w-full md:w-fit p-3' onClick={handleRejectAll}>
            Necessary Only
          </Button>
          <Button variant="outline" className='w-full md:w-fit p-3' onClick={toggleSettings}>
            Customize
          </Button>
          <Button onClick={handleAcceptAll} className='w-full md:w-fit p-3 text-white'>
            Accept All
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};