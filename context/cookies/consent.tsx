'use client'
import { ConsentState, COOKIE_CATEGORIES, hasConsented, getConsentState, acceptAllCookies, acceptNecessaryCookies, saveConsent } from '@/lib/cookie-consent';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';


interface CookieConsentContextType {
  consentState: ConsentState;
  showBanner: boolean;
  showSettings: boolean;
  handleAcceptAll: () => void;
  handleRejectAll: () => void;
  handleSavePreferences: (preferences: Partial<ConsentState>) => void;
  toggleSettings: () => void;
  openConsentManager: () => void;
}

const defaultConsentState: ConsentState = {
  [COOKIE_CATEGORIES.NECESSARY]: true,
  [COOKIE_CATEGORIES.FUNCTIONAL]: false,
  [COOKIE_CATEGORIES.ANALYTICS]: false,
  [COOKIE_CATEGORIES.MARKETING]: false
};

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  // Track if banner should be shown
  const [showBanner, setShowBanner] = useState<boolean>(false);

  // Track consent preferences
  const [consentState, setConsentState] = useState<ConsentState>(defaultConsentState);

  // Track if detailed settings are open
  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Initialize on first render (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasGivenConsent = hasConsented();

      if (hasGivenConsent) {
        // User already made a choice, load their preferences
        const savedState = getConsentState();
        if (savedState) {
          setConsentState(savedState);
        }
      } else {
        // First visit, show banner
        setShowBanner(true);
      }
    }
  }, []);

  // Handle accepting all cookies
  const handleAcceptAll = (): void => {
    const newState = acceptAllCookies();
    setConsentState(newState);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Handle accepting only necessary cookies
  const handleRejectAll = (): void => {
    const newState = acceptNecessaryCookies();
    setConsentState(newState);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Handle saving custom preferences
  const handleSavePreferences = (preferences: Partial<ConsentState>): void => {
    const newState = saveConsent(preferences);
    setConsentState(newState);
    setShowBanner(false);
    setShowSettings(false);
  };

  // Toggle settings modal
  const toggleSettings = (): void => {
    setShowSettings(prev => !prev);
  };

  // Open consent manager from elsewhere in the app
  const openConsentManager = (): void => {
    setShowSettings(true);
  };

  const value: CookieConsentContextType = {
    consentState,
    showBanner,
    showSettings,
    handleAcceptAll,
    handleRejectAll,
    handleSavePreferences,
    toggleSettings,
    openConsentManager
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};