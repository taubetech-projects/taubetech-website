"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("de");
  const [isHydrated, setIsHydrated] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("taubetech_lang");
      if (savedLang === "de" || savedLang === "en") {
        setLang(savedLang);
      }
    } catch (e) {
      console.warn("localStorage not accessible:", e);
    }
    setIsHydrated(true);
  }, []);

  const changeLanguage = (newLang) => {
    if (newLang === "de" || newLang === "en") {
      setLang(newLang);
      try {
        localStorage.setItem("taubetech_lang", newLang);
      } catch (e) {
        console.warn("Could not save to localStorage:", e);
      }
    }
  };

  // Helper function to resolve dot-nested translation keys (e.g. "hero.headline")
  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let current = translations[lang];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to German if key not found in active language
        let fallback = translations["de"];
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return keyPath; // return key itself if all fails
          }
        }
        return fallback;
      }
    }

    return typeof current === "string" ? current : keyPath;
  };

  const value = {
    lang,
    setLanguage: changeLanguage,
    t,
    translations: translations[lang],
    isHydrated,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
