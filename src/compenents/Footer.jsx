import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

import { addressTr, grups, katalog, TURKCE } from "../api/dataTr";
import { addressEng } from "../api/dataEng";

const footer = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <footer className="flex flex-col justify-center content-end item-center w-full ">
      <div className="flex-grow">
        <div className="flex flex-row gap-5">
          <div className="w-[35%] flex flex-col justify-center items-center">
            <div>
              <a
                href={katalog.Catalog}
                download="UTA_Catalog.pdf"
                className="text-black dark:text-[#f7c75e]  hover:text-[#f7c75e] underline text-2xl items-center font-bold"
              >
                {language === TURKCE ? "UTA Catalog" : "UTA Katalog"}
              </a>
            </div>
            <figure className="grid grid-cols-3 gap-2 mt-8">
              {grups.map((grup, i) => (
                <div key={i} className="px-2 ">
                  <img src={grup} className="w-30 h-auto" />
                </div>
              ))}
            </figure>
          </div>
          <div className=" flex flex-col w-[32%] ml-40">
            <h4 className="text-xl font-bold">
              {language === TURKCE ? addressEng.office : addressTr.office}
            </h4>
            <p>
              {" "}
              {language === TURKCE ? addressEng.address : addressTr.address}
            </p>
            <p> {language === TURKCE ? addressEng.pk : addressTr.pk}</p>
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

          <div className=" flex flex-row w-[23%] gap-6">
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
          </div>
        </div>
        <div className=" text-center text-xs font-bold  my-5 ml-10 dark:text-[#f7c75e]">
          <p>@2025 UTA Group Company - All Rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
