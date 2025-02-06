import React from "react";
import logo from "../assets/header/logo.jpg";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-row">
        <img src={logo} className="h-20 w-50 m-2" alt="" />
        <address>TR Office</address>
        <div></div>
      </div>

      <div>©2025 UTA Group Company - All rights reserved.</div>
    </footer>
  );
};

export default Footer;
