import React, { createContext, useContext, ReactNode } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, selectLanguage } from '../store/languageSlice';
import { Language } from "./languageMaps/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const handleSetLanguage = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
}
