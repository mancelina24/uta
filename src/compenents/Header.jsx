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
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8 py-4 gap-2">
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
          <div
            className={`lg:flex ${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:w-auto justify-center`}
          >
            <NavlinkMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          <div className="flex md:flex-col justify-center items-center mt-4 lg:mt-0">
            <div className="flex items-center mr-4 md:mr-0">
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                sx={{
                  width: 48, // Adjusted width
                  height: 28, // Adjusted height
                  padding: 0,
                  "& .MuiSwitch-switchBase": {
                    // Add this to adjust switch position
                    padding: 1,
                  },
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "#f7c75e",
                    width: 16, // Adjusted width
                    height: 16, // Adjusted height
                    transform: "translateY(-6px)",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: darkMode
                      ? "rgba(255,0,0,0.6)"
                      : "rgba(0,0,0,0.6)", // Use rgba for slightly transparent colors
                    borderRadius: "9999px",
                    opacity: 1, // Make sure track is visible
                  },
                  "& .MuiSwitch-checked+.MuiSwitch-track": {
                    // Track color when checked
                    backgroundColor: "rgba(255,0,0,0.6)",
                  },
                }}
                inputProps={{ "aria-label": "dark mode switch" }} // Accessibility
              />
              <label className="ml-2 text-sm">{themeName}</label>{" "}
              {/* Increased text size */}
            </div>
            <span className="font-bold mx-2 md:hidden">|</span>
            <div>
              <label onClick={languageChange} className="cursor-pointer">
                <span className="text-[#f7c75e] text-sm font-bold">
                  {" "}
                  {/* Increased text size */}
                  {language === TURKCE
                    ? languageEng.tr + languageEng.ekTr
                    : languageTr.ekEng + languageTr.eng}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
