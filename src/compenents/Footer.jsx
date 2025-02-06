import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

import logo from "../assets/header/logo.jpg";
import { addressTr, TURKCE } from "../api/dataTr";
import { addressEng } from "../api/dataEng";

const footer = () => {
  const { language } = useContext(UserContext);
  return (
    <footer className="flex flex-col justify-center content-end item-center w-[100%] mr-10 ml-5">
      <div className="flex flex-row">
        <div className="w-[35%]">
          <img className="h-30 w-65 mt-5" src={logo} />
        </div>
        <div className=" flex flex-col w-[45%] ml-40">
          <h4 className="font-bold">
            {language === TURKCE ? addressEng.office : addressTr.office}
          </h4>
          <p> {language === TURKCE ? addressEng.address : addressTr.address}</p>
          <p> {language === TURKCE ? addressEng.pk : addressTr.pk}</p>
          <p> {language === TURKCE ? addressEng.city : addressTr.city}</p>
          <p> {language === TURKCE ? addressEng.tel1 : addressTr.tel1}</p>
          <p> {language === TURKCE ? addressEng.tel2 : addressTr.tel2}</p>
          <a
            className="cursor-pointer hover:underline"
            href={`mailto:${addressTr.mail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {addressTr.mail}
          </a>
        </div>
        <div className=" flex flex-row w-[20%] gap-6 mt-15 mr-10">
          <a
            href={addressTr.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="w-10 h-10" />
          </a>
          <a
            href={addressTr.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-10 h-10" />
          </a>
          <a
            href={addressTr.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a href={addressTr.mail} target="_blank" rel="noopener noreferrer">
            <FaMailBulk className="w-10 h-10" />
          </a>
        </div>
      </div>
      <div className=" text-center text-xs font-bold m-5 mr-20">
        <p>@2025 UTA Group Company - All Rights reserved</p>
      </div>
    </footer>
  );
};

export default footer;
