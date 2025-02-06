import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavlinkMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center bold">
        <div className="hidden lg:flex space-x-6">
          <div>
            <ul className="flex space-x-6">
              <li>
                <NavLink to="/" className="text-gray-800 hover:text-blue-600">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-800 hover:text-blue-600"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div>
            <form className="flex space-x-2">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#f7c75e] text-black px-4 py-2 rounded-md hover:bg-green-600"
              >
                Search
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </nav>
  );
};
