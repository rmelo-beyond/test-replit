import { getTranslation } from "./languageMaps";
import { useCallback } from "react";
import { useLanguageContext } from "./LanguageContext";
import { TranslationDictionary } from "./languageMaps/types";

export function useTranslation() {
  const { language } = useLanguageContext();

  const getText = useCallback(
    (key: keyof TranslationDictionary) => {
      const translations = getTranslation(language);

      if (!translations[key]) {
        console.warn(`Translation key "${key}" not found.`);
        return key;
      }

      return translations[key];
    },
    [language]
  );

  return { getText };
}
