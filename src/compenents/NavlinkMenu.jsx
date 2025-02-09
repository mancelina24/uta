import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { TURKCE } from "../api/dataTr.js";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export const NavlinkMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, darkMode } = useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" mt-3">
      <div className="sm:hidden flex items-center justify-between px-6 py-3">
        <button onClick={toggleMenu} className="text-xl">
          {/* Hamburger ikonu */}
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
      <ul
        className={`lg:flex flex-row justify-center gap-10 font-bold py-8 px-6 space-y-4 lg:space-y-0 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
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
