'use client'
import { isCategoryAllowed, COOKIE_CATEGORIES } from '@/lib/cookie-consent';
import { useEffect } from 'react';


export const ConsentInitializer: React.FC = () => {
  useEffect(() => {
    // Initialize services based on consent

    // Example: Analytics
    if (isCategoryAllowed(COOKIE_CATEGORIES.ANALYTICS)) {
      // Initialize analytics
      console.log('Loading analytics...');
      // Your code to load Google Analytics, etc.
    }

    // Example: Marketing
    if (isCategoryAllowed(COOKIE_CATEGORIES.MARKETING)) {
      // Initialize marketing cookies/pixels
      console.log('Loading marketing pixels...');
      // Your code to load Facebook Pixel, etc.
    }

    // Example: Functional
    if (isCategoryAllowed(COOKIE_CATEGORIES.FUNCTIONAL)) {
      // Initialize functional features
      console.log('Loading functional features...');
      // Your code to load chat widgets, etc.
    }
  }, []);

  return null; // This component doesn't render anything
};