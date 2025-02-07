import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const PageContainer = ({ children }) => {
  const { darkMode, languageClass, darkModeClass } = useContext(UserContext);

  return (
    <div
      className={`flex min-h-screen justify-center ${darkModeClass} ${languageClass}`}
    >
      <div
        className={`w-full min-h-screen bg-white ${
          darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
