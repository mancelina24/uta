import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { ENGLISH, toggleLanguageEng } from "../api/dataEng";
import { TURKCE, toggleLanguageTr } from "../api/dataTr";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("theme", false);
  const [language, setLanguage] = useLocalStorage("lang", "english");
  const [themeName, setThemeName] = useState("");

  const updateThemeName = (darkMode, language) => {
    if (language === TURKCE) {
      return darkMode ? toggleLanguageEng.engLight : toggleLanguageEng.engDark;
    } else {
      return darkMode ? toggleLanguageTr.trLight : toggleLanguageTr.trDark;
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setThemeName(updateThemeName(newDarkMode, language));

    toast.success(`Theme changed to ${darkMode ? "Light" : "Dark"} mode!`, {});
  };

  const languageChange = () => {
    const newLanguage = language === TURKCE ? ENGLISH : TURKCE;
    setLanguage(newLanguage);
    setThemeName(updateThemeName(darkMode, newLanguage));

    toast.success(
      `Language changed to ${language === TURKCE ? TURKCE : ENGLISH}!`,
      {}
    );
  };

  const languageClass = language === TURKCE ? "lang-turkish" : "lang-english";
  const darkModeClass = darkMode ? "light" : "light";

  useEffect(() => {
    setThemeName(updateThemeName(darkMode, language));
  }, [darkMode, language]);

  return (
    <UserContext.Provider
      value={{
        languageChange,
        toggleTheme,
        darkMode,
        language,
        themeName,
        darkModeClass,
        languageClass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
