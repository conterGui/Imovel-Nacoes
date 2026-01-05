import pt from './pt.json';
import en from './en.json';

export type Language = 'pt' | 'en';

export const translations = {
  pt,
  en,
} as const;

export type Translations = typeof pt;

export const getTranslation = (lang: Language): Translations => {
  return translations[lang];
};
