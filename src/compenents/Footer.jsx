import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaMailBulk,
  FaYoutube,
} from "react-icons/fa";

import { addressTr, grups, katalog, TURKCE } from "../api/dataTr";
import { addressEng } from "../api/dataEng";

const footer = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <footer className="flex flex-col justify-center content-end item-center w-full ">
      <div className="flex-grow ">
        <div className="flex flex-col md:flex-row gap-y-10 justify-center items-center md:justify-between ">
          <div className=" flex flex-col md:w-[40%] md:ml-10">
            <h4 className="text-xl font-bold">
              {language === TURKCE ? addressEng.office : addressTr.office}
            </h4>
            <p> {language === TURKCE ? addressEng.city : addressTr.city}</p>
            <p> {language === TURKCE ? addressEng.tel1 : addressTr.tel1}</p>
            <p> {language === TURKCE ? addressEng.tel2 : addressTr.tel2}</p>
            <a
              className="cursor-pointer hover:bg-[#f7c75e] w-60 rounded-md"
              href={`mailto:${addressTr.mail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {addressTr.mail}
            </a>
          </div>

          <div className=" flex flex-row justify-center items-center w-[23%] md:mr-15 gap-6">
            <a
              href={addressTr.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="w-10 h-10 hover:bg-[#f7c75e] rounded-md" />
            </a>
            <a
              href={addressTr.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-10 h-10 hover:bg-[#f7c75e] rounded-md" />
            </a>
            <a
              href={addressTr.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-10 h-10 hover:bg-[#f7c75e] rounded-md" />
            </a>
            <a href={addressTr.mail} target="_blank" rel="noopener noreferrer">
              <FaMailBulk className="w-10 h-10 hover:bg-[#f7c75e] rounded-md" />
            </a>
            <a href={addressTr.mail} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-10 h-10 hover:bg-[#f7c75e] rounded-md" />
            </a>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center text-center text-xs font-bold  my-5 md:ml-10 dark:text-[#f7c75e]">
          <p>@2025 UTA Group Company - All Rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
