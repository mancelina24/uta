import React from "react";
import { NavLink } from "react-router-dom";

export const NavlinkMenu = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row justify-center gap-10 mt-15 mr-20 font-bold ">
          <li>
            <NavLink className="hover:bg-[#f7c75e] px-4 py-2 rounded-md" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
              to="/ourservices"
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[#f7c75e] px-4 py-2 rounded-md"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
