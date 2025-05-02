import { translations } from "./dictionaries";
import { useLanguageContext } from "./LanguageContext";

export function useTranslation() {
  const { language } = useLanguageContext();

  const getText = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translation[language];
  };

  return { getText };
}
