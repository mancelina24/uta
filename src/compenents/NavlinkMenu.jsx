import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { TURKCE } from "../api/dataTr.js";

export const NavlinkMenu = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <nav className=" mt-3">
      <ul className="flex flex-row justify-center gap-10  font-bold py-8 px-6 ">
        <li>
          <NavLink className="hover:bg-[#f7c75e]  px-4 py-2 rounded-md" to="/">
            {language === TURKCE ? "Home" : "Ana Sayfa"}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
            to="/projects"
          >
            {language === TURKCE ? "Projects" : "Projeler"}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
            to="/ourservices"
          >
            {language === TURKCE ? "Our Services" : "Hizmetlerimiz"}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
            to="/galery"
          >
            {language === TURKCE ? "Gallery" : "Galeri"}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
            to="/about"
          >
            {language === TURKCE ? "About" : "Hakkımızda"}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
            to="/contact"
          >
            {language === TURKCE ? "Contact " : "İletişim"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
