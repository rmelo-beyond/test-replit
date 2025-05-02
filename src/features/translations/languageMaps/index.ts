export * from './types';
export * from './en';
export * from './pt';
export * from './ja';

import { Language } from './types';
import { enTranslations } from './en';
import { ptTranslations } from './pt';
import { jaTranslations } from './ja';

export const translations = {
  en: enTranslations,
  pt: ptTranslations,
  ja: jaTranslations,
} as const;

export const getTranslation = (language: Language) => translations[language]; 