
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import zhTranslation from './locales/zh.json';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
    zh: {
      translation: zhTranslation,
    },
    fr: {
      translation: frTranslation,
    },

  },
  fallbackLng: 'en',
});

export default i18n;
