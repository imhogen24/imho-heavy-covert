// hooks/useCookiePreferences.ts
import { useState, useEffect } from 'react';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function useCookiePreferences() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const loadPreferences = () => {
      const storedPreferences = localStorage.getItem('cookiePreferences');

      if (storedPreferences) {
        setPreferences(JSON.parse(storedPreferences));
      } else {
        setPreferences(defaultPreferences);
      }

      setLoading(false);
    };

    loadPreferences();

    // Listen for changes to cookie preferences
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookiePreferences' && e.newValue) {
        setPreferences(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { preferences, loading };
}