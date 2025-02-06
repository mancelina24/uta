import React from "react";
import { NavLink } from "react-router-dom";

export const NavlinkMenu = () => {
  return (
    <div>
      <nav>
        <ul
          className="flex flex-row justify-center gap-10 mt-5 font-bold hover:bg-[
#f7c75e]"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/ourservices">Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
