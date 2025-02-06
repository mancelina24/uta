import React from "react";
import { Link } from "react-router-dom";

export const NavlinkMenu = () => {
  return (
    <nav>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center bold">
        <div className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link exact to="/" className="text-gray-800 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                exact
                to="/products"
                className="text-gray-800 hover:text-blue-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                exact
                to="/ourservices"
                className="text-gray-800 hover:text-blue-600"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="text-gray-800 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
