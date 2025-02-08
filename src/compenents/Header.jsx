import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

import { languageEng } from "../api/dataEng.js";
import { TURKCE, languageTr } from "../api/dataTr.js";

import Switch from "@mui/material/Switch";
import logo from "../assets/header/logo.jpg";
import { NavlinkMenu } from "./NavlinkMenu.jsx";

const Header = () => {
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const { languageChange, toggleTheme, language, themeName, darkMode } =
    useContext(UserContext);

  return (
    <header className="w-full">
      <div className="flex justify-around">
        <div className="w-[15%]">
          <img src={logo} className="w-45 h-auto ml-5 mt-5" alt="" />
        </div>
        <div className="w-[80%]">
          <NavlinkMenu />
        </div>
        <div className="mt-10 w-[25%]">
          <div className="flex bottom-15 bg-none border-none ">
            <div className="flex flex-row cursor-pointer pr-4 font-bold  ">
              <Switch
                {...label}
                checked={darkMode}
                onChange={toggleTheme}
                sx={{
                  width: 40,
                  height: 24,
                  padding: 0,
                  display: "flex",
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "#f7c75e",
                    width: 13, // Thumb (circle) width
                    height: 16, // Thumb (circle) height
                    transform: "translateY(-6px)",
                  },

                  "& .MuiSwitch-track": {
                    backgroundColor: darkMode ? "red" : "black",
                    borderRadius: "9999px", // Keep the track rounded
                    width: 55, // Thumb (circle) width
                    height: 24, // Thumb (circle) height
                  },
                }}
              />
              <label className=" ml-2 mt-[0.4rem] text-xs">{themeName}</label>
            </div>
            <span className="font-bold pr-2"> | </span>
            <div className="flex flex-row">
              <label onClick={languageChange}>
                <span className="text-[#f7c75e] text-xs font-bold">
                  {language === TURKCE ? languageEng.tr + languageEng.ekTr : ""}
                </span>
                <span className="text-[##f7c75e] text-xs font-bold">
                  {language === TURKCE ? "" : languageTr.ekEng + languageTr.eng}
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
