import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { TURKCE } from "../api/dataTr.js";

export const NavlinkMenu = ({ isMenuOpen, toggleMenu }) => {
  const { language } = useContext(UserContext);

  const navItems = [
    { to: "/", labelEn: "Home", labelTr: "Ana Sayfa" },
    { to: "/about", labelEn: "About", labelTr: "Hakkımızda" },
    { to: "/ourservices", labelEn: "Our Services", labelTr: "Hizmetlerimiz" },
    { to: "/projects", labelEn: "Projects", labelTr: "Projeler" },
    { to: "/catalogs", labelEn: "Catalogs", labelTr: "Kataloglar" },
    { to: "/galery", labelEn: "Gallery", labelTr: "Galeri" },
    { to: "/contact", labelEn: "Contact", labelTr: "İletişim" },
  ];

  return (
    <nav className="lg:mt-3">
      <ul
        className={`lg:flex flex-col lg:flex-row justify-center gap-5 font-bold py-8 px-3 space-y-4 lg:space-y-0 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              className="block hover:bg-[#f7c75e] px-4 py-2 rounded-md"
              to={item.to}
              onClick={() => toggleMenu()}
            >
              {language === TURKCE ? item.labelEn : item.labelTr}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
