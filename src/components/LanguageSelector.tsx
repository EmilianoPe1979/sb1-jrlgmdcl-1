import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage("es")}
        className={`px-2 py-1 text-sm rounded-md ${
          i18n.language === "es"
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 text-sm rounded-md ${
          i18n.language === "en"
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
