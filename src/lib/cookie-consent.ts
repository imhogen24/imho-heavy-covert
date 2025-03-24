import Cookies from 'js-cookie';

// Cookie consent categories
export enum COOKIE_CATEGORIES {
  NECESSARY = 'necessary',
  FUNCTIONAL = 'functional',
  ANALYTICS = 'analytics',
  MARKETING = 'marketing'
}

// Consent state interface
export interface ConsentState {
  [COOKIE_CATEGORIES.NECESSARY]: boolean;
  [COOKIE_CATEGORIES.FUNCTIONAL]: boolean;
  [COOKIE_CATEGORIES.ANALYTICS]: boolean;
  [COOKIE_CATEGORIES.MARKETING]: boolean;
}

// Default expiration (6 months)
const CONSENT_EXPIRATION = 180;

// Cookie names
export const CONSENT_COOKIE_NAME = 'cookie-consent';
export const CONSENT_TIMESTAMP_COOKIE = 'consent-timestamp';

// Get cookie consent state
export const getConsentState = (): ConsentState | null => {
  const consentCookie = Cookies.get(CONSENT_COOKIE_NAME);

  if (!consentCookie) {
    return null;
  }

  try {
    return JSON.parse(consentCookie) as ConsentState;
  } catch (error) {
    console.error('Error parsing consent cookie:', error);
    return null;
  }
};

// Check if user has made a consent choice
export const hasConsented = (): boolean => {
  return !!Cookies.get(CONSENT_COOKIE_NAME);
};

// Save user consent preferences
export const saveConsent = (preferences: Partial<ConsentState>): ConsentState => {
  // Always set necessary cookies as true (can't be disabled)
  const consentData: ConsentState = {
    ...preferences,
    [COOKIE_CATEGORIES.NECESSARY]: true
  } as ConsentState;

  // Save consent preferences
  Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentData), {
    expires: CONSENT_EXPIRATION,
    sameSite: 'strict'
  });

  // Save timestamp for audit purposes
  Cookies.set(CONSENT_TIMESTAMP_COOKIE, new Date().toISOString(), {
    expires: CONSENT_EXPIRATION,
    sameSite: 'strict'
  });

  return consentData;
};

// Accept all cookies
export const acceptAllCookies = (): ConsentState => {
  const allConsent: ConsentState = {
    [COOKIE_CATEGORIES.NECESSARY]: true,
    [COOKIE_CATEGORIES.FUNCTIONAL]: true,
    [COOKIE_CATEGORIES.ANALYTICS]: true,
    [COOKIE_CATEGORIES.MARKETING]: true
  };

  return saveConsent(allConsent);
};

// Only accept necessary cookies
export const acceptNecessaryCookies = (): ConsentState => {
  const necessaryOnly: ConsentState = {
    [COOKIE_CATEGORIES.NECESSARY]: true,
    [COOKIE_CATEGORIES.FUNCTIONAL]: false,
    [COOKIE_CATEGORIES.ANALYTICS]: false,
    [COOKIE_CATEGORIES.MARKETING]: false
  };

  return saveConsent(necessaryOnly);
};

// Check if a specific cookie category is allowed
export const isCategoryAllowed = (category: COOKIE_CATEGORIES): boolean => {
  const consent = getConsentState();

  // If no consent yet, only allow necessary cookies
  if (!consent) {
    return category === COOKIE_CATEGORIES.NECESSARY;
  }

  return !!consent[category];
};