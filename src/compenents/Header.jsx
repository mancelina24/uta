import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { languageEng } from "../api/dataEng.js";
import { TURKCE, languageTr } from "../api/dataTr.js";
// import Switch from "@mui/material/Switch";
import logo from "../../public/assets/header/logo.jpg";
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
    <header className="w-full bg-gray-400 dark:bg-gray-800 shadow-md transition-colors duration-300">
      {" "}
      {/* Lighter background, shadow, and transition */}
      <div className="w-full">
        {" "}
        {/* Center content */}
        <div className="mx-auto flex flex-col lg:flex-row justify-between items-center px-5 lg:px-5 py-3 gap-3 lg:gap-10">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <img
              src={logo || "/placeholder.svg"}
              className="w-[10rem] lg:w-[12rem]  h-auto mt-5 lg:mt-2"
              alt="Logo"
            />
            <button
              onClick={toggleMenu}
              className="lg:hidden text-2xl text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className={`lg:flex ${
              isMenuOpen ? "flex flex-col mt-2" : "hidden" // Show menu items stacked on mobile
            } w-full lg:w-auto justify-center`}
          >
            <NavlinkMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          <div className="flex md:flex-col justify-center items-center mt-4 lg:mt-0 space-x-2">
            {" "}
            {/* Space between elements */}
            {/* <span className="font-bold mx-2 md:hidden">|</span> */}
            <div>
              <label onClick={languageChange} className="cursor-pointer">
                <span className="text-[#f7c75e] text-sm font-bold hover:text-[#e0b351]">
                  {" "}
                  {/* Hover effect */}
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
