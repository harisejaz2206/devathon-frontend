import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

// Create a context for language
type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Create a provider to manage language globally
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ur" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage: handleChangeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
