"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./Locales/en/common.json";
import ar from "./Locales/ar/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }
});

export default i18n;
