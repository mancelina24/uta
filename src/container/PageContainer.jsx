import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const PageContainer = ({ children }) => {
  const { darkMode, languageClass, darkModeClass } = useContext(UserContext);

  return (
    <div className={`flex justify-center ${darkModeClass} ${languageClass}`}>
      <div
        className={`w-full h-[3094px] bg-white ${
          darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
