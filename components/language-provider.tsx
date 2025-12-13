"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Locale, translations } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(path: string) => T;
  flags: Record<Locale, string>;
  languageNames: Record<Locale, string>;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const DEFAULT_LOCALE: Locale = "en";
const STORAGE_KEY = "vibewatch-locale";

function getValueByPath<T>(obj: unknown, path: string): T {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined as T;
    }
  }
  return current as T;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Locale | null) : null;
    if (stored && translations[stored]) {
      setLocaleState(stored);
    } else if (typeof navigator !== "undefined") {
      const navLang = navigator.language?.slice(0, 2).toLowerCase();
      if (navLang && ["en", "it", "fr", "es", "pt"].includes(navLang)) {
        setLocaleState(navLang as Locale);
      }
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const t = useCallback(
    <T,>(path: string): T => {
      const fallback = getValueByPath<T>(translations[DEFAULT_LOCALE], path);
      const value = getValueByPath<T>(translations[locale], path);
      return (value ?? fallback ?? path) as T;
    },
    [locale]
  );

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      flags: translations.en.languagesFlag,
      languageNames: translations.en.languageNames,
    }),
    [locale, setLocale, t]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return ctx;
}
