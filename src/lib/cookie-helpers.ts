
import Cookies from 'js-cookie';
import { isCategoryAllowed, COOKIE_CATEGORIES } from './cookie-consent';

interface CookieOptions {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

export const setAnalyticsCookie = (name: string, value: string, options: CookieOptions = {}): boolean => {
  if (isCategoryAllowed(COOKIE_CATEGORIES.ANALYTICS)) {
    Cookies.set(name, value, options);
    return true;
  }
  return false;
};

export const setMarketingCookie = (name: string, value: string, options: CookieOptions = {}): boolean => {
  if (isCategoryAllowed(COOKIE_CATEGORIES.MARKETING)) {
    Cookies.set(name, value, options);
    return true;
  }
  return false;
};

export const setFunctionalCookie = (name: string, value: string, options: CookieOptions = {}): boolean => {
  if (isCategoryAllowed(COOKIE_CATEGORIES.FUNCTIONAL)) {
    Cookies.set(name, value, options);
    return true;
  }
  return false;
};

// Always allowed
export const setNecessaryCookie = (name: string, value: string, options: CookieOptions = {}): boolean => {
  Cookies.set(name, value, options);
  return true;
};