"use client";

import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { languageEng } from "../api/dataEng.js";
import { TURKCE, languageTr } from "../api/dataTr.js";
import Switch from "@mui/material/Switch";
import logo from "../assets/header/logo.jpg";
import { NavlinkMenu } from "./NavlinkMenu.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { languageChange, toggleTheme, language, themeName, darkMode } =
    useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <img
              src={logo || "/placeholder.svg"}
              className="w-[15rem] h-auto"
              alt="Logo"
            />
            <button onClick={toggleMenu} className="lg:hidden text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="flex items-center mt-4 lg:mt-0">
            <div className="flex items-center mr-4">
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                sx={{
                  width: 40,
                  height: 24,
                  padding: 0,
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "#f7c75e",
                    width: 13,
                    height: 16,
                    transform: "translateY(-6px)",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: darkMode ? "red" : "black",
                    borderRadius: "9999px",
                    width: 55,
                    height: 24,
                  },
                }}
              />
              <label className="ml-2 text-xs">{themeName}</label>
            </div>
            <span className="font-bold mx-2">|</span>
            <div>
              <label onClick={languageChange} className="cursor-pointer">
                <span className="text-[#f7c75e] text-xs font-bold">
                  {language === TURKCE
                    ? languageEng.tr + languageEng.ekTr
                    : languageTr.ekEng + languageTr.eng}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div
          className={`lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:w-auto justify-center`}
        >
          <NavlinkMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
