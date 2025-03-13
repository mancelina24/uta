import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaMailBulk,
  FaYoutube,
} from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

import { addressTr, TURKCE } from "../api/dataTr";
import { addressEng } from "../api/dataEng";

const footer = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <footer className="flex flex-col justify-center content-end item-center w-full  bg-gray-300 pt-5">
      <div className="flex-grow ">
        <div className="flex flex-col md:flex-row gap-y-10 justify-center items-center md:justify-between ">
          <div className=" flex flex-col justify-center text-center md:text-start md:justify-start  md:ml-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-extrabold  mb-2 text-grey">
                UTA GROUP COMPANIES
              </h3>
            </div>
            <h4 className="text-xl font-bold text-start">
              {language === TURKCE ? addressEng.office : addressTr.office}
            </h4>
            <div className="flex flex-row gap-5">
              <MdCall className="mt-1" />
              <p> {language === TURKCE ? addressEng.tel1 : addressTr.tel1}</p>
            </div>
            <div className="flex flex-row gap-5">
              <FaMobileScreen className="mt-1" />
              <p> {language === TURKCE ? addressEng.tel2 : addressTr.tel2}</p>
            </div>
            <div className="flex flex-row gap-5">
              <IoIosMail className="mt-1" />
              <a
                className="cursor-pointer hover:bg-[#f7c75e] rounded-md"
                href={`mailto:${addressTr.mail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {addressTr.mail}
              </a>
            </div>
          </div>

          <div className=" flex flex-row justify-center items-center w-[23%] md:mr-15 gap-6">
            <a
              href={addressTr.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                className="w-7 h-7 hover:bg-[#f7c75e] rounded-md"
                fill="#3b5998"
              />
            </a>
            <a
              href={addressTr.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="w-7 h-7 hover:bg-[#f7c75e] rounded-md"
                fill="#e4405f"
              />
            </a>
            <a
              href={addressTr.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="w-7 h-7 hover:bg-[#f7c75e] rounded-md"
                fill="#0077b5"
              />
            </a>
            <a
              href={addressTr.youTube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="w-7 h-7 hover:bg-[#f7c75e] rounded-md"
                fill="#ff0000"
              />
            </a>
            <a
              href={`mailto:${addressTr.mail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMailBulk
                className="w-7 h-7 hover:bg-[#f7c75e] rounded-md"
                fill="#fcbc04"
              />
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
