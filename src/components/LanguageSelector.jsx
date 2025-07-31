import React from "react";
import { useTranslation } from "react-i18next";
import { loadTranslations } from "../i18n";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    loadTranslations(language);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-2 py-1 rounded ${
          i18n.language === "es"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => changeLanguage("es")}
      >
        ES
      </button>
      <button
        className={`px-2 py-1 rounded ${
          i18n.language === "en"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
