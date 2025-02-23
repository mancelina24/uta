import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { aboutEng, addressEng } from "../api/dataEng";
import { aboutTr, grups, TURKCE, katalog, patent } from "../api/dataTr";
import {
  FaFilePdf,
  FaDownload,
  FaBuilding,
  FaCertificate,
  FaGavel,
} from "react-icons/fa"; // Font Awesome icons
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BiTask } from "react-icons/bi";

const About = () => {
  const { language, darkMode } = useContext(UserContext);
  const [openTitle, setOpenTitle] = useState(null);

  const toggleDescription = (title) => {
    setOpenTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  return (
    <div className="flex flex-col mt-10 mb-15">
      <div>
        <h4
          className=" text-3xl font-bold  md:text-5xl leading-[58.09px] tracking-[1%]  text-center "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {language === TURKCE ? "About" : "Hakkımızda"}
        </h4>
      </div>
      <div>
        <div className="w-[80%] flex flex-col justify-center items-center md:justify-start md:text-start md:items-start mx-auto my-5">
          <p className="text-start my-5 md:my-2">
            {language === TURKCE ? aboutEng.desc1 : aboutTr.desc1}
          </p>

          <p className="text-start my-5 md:my-2">
            {language === TURKCE ? aboutEng.desc11 : aboutTr.desc11}
          </p>
          <hr />
          <p className="text-start my-5 md:my-2">
            {language === TURKCE ? aboutEng.desc12 : aboutTr.desc12}
          </p>
          <hr />
          <p className="text-start my-5 md:my-2">
            {language === TURKCE ? aboutEng.desc13 : aboutTr.desc13}
          </p>
        </div>
        <div className="flex flex-col w-[80%] justify-start items-start text-start mx-auto ">
          {/* Başlık 1 */}
          <div className="flex flex-col w-full justify-center items-center mx-auto mt-5">
            <h2 className="mb-5 font-bold text-center cursor-pointer text-3xl">
              {language === TURKCE ? aboutEng.title2 : aboutTr.title2}
            </h2>

            <div>
              <p className="text-start my-5 ">
                {language === TURKCE ? aboutEng.desc2 : aboutTr.desc2}
              </p>
              <p className="text-start my-5">
                {language === TURKCE ? aboutEng.desc21 : aboutTr.desc21}
              </p>
              <p className="text-start my-5">
                {language === TURKCE ? aboutEng.desc22 : aboutTr.desc22}
              </p>
              <p className="text-start my-5">
                {language === TURKCE ? aboutEng.desc23 : aboutTr.desc23}
              </p>
              <p className="text-start my-5">
                {language === TURKCE ? aboutEng.desc24 : aboutTr.desc24}
              </p>
              <p className="text-start my-5">
                {language === TURKCE ? aboutEng.desc25 : aboutTr.desc25}
              </p>
            </div>
          </div>
          <br />

          {/* Başlık 2 */}
          <div className="flex flex-col w-full justify-center items-center mx-auto my-5">
            <h2 className="mb-5 font-bold cursor-pointer text-3xl">
              {language === TURKCE ? aboutEng.title3 : aboutTr.title3}
            </h2>
            <div>
              <p className="text-start">
                {language === TURKCE ? aboutEng.desc3 : aboutTr.desc3}
              </p>
            </div>
          </div>
          <br />

          <div className="flex flex-row gap-8 md:ml-70 mb-15">
            {/* Patent Belgesi Link */}
            <div className="flex flex-col items-center justify-center">
              <a
                href={patent[0]}
                download="UTA_Patent.pdf"
                className="group flex flex-col items-center justify-center text-black dark:text-[#f7c75e] hover:text-[#f7c75e]"
              >
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                  <FaGavel
                    size={48}
                    className="text-yellow-500 group-hover:text-yellow-400 transition-colors duration-200"
                  />
                </div>
                <span className="mt-2 text-xl font-semibold underline">
                  UTA Patent
                </span>
                <div className="hidden group-hover:flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <FaDownload className="mr-1" /> Download PDF
                </div>
              </a>
            </div>

            {/* Ilk 1000 Belgesi Link */}
            <div className="flex flex-col items-center justify-center">
              <a
                href={patent[1]}
                download="UTA_1000.pdf"
                className="group flex flex-col items-center justify-center text-black dark:text-[#f7c75e] hover:text-[#f7c75e]"
              >
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                  <FaCertificate
                    size={48}
                    className="text-green-500 group-hover:text-green-400 transition-colors duration-200"
                  />
                </div>
                <span className="mt-2 text-xl font-semibold underline">
                  {language === TURKCE ? "UTA Success" : "UTA İlk 1000 Belgesi"}
                </span>
                <div className="hidden group-hover:flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <FaDownload className="mr-1" /> Download PDF
                </div>
              </a>
            </div>

            {/* Faaliyet Belgesi Link */}
            <div className="flex flex-col items-center justify-center">
              <a
                href={patent[2]}
                download="UTA_Faaliyet.pdf"
                className="group flex flex-col items-center justify-center text-black dark:text-[#f7c75e] hover:text-[#f7c75e]"
              >
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                  <BiTask
                    size={48}
                    className="text-purple-500 group-hover:text-purple-400 transition-colors duration-200"
                  />
                </div>
                <span className="mt-2 text-xl font-semibold underline">
                  UTA Faaliyet
                </span>
                <div className="hidden group-hover:flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <FaDownload className="mr-1" /> Download PDF
                </div>
              </a>
            </div>
          </div>
          {/* Başlık 3 */}
          <div className="flex flex-col w-full justify-center items-center mx-auto my-5">
            <h2 className="mb-5 font-bold text-center cursor-pointer text-3xl ">
              {language === TURKCE
                ? "Our Group Componies"
                : "Grup Şirketlerimiz"}
            </h2>
            <div>
              <div>
                <figure className="grid md:grid-cols-4 grid-cols-2 gap-8 md:gap-2 mt-10">
                  {grups.map((grup, i) => (
                    <div key={i} className="px-2 ">
                      <img src={grup} className="w-40 h-auto" />
                    </div>
                  ))}
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-8 justify-center items-center mb-15 mt-15">
        {/* Catalog Link */}
        <div className="flex flex-col items-center justify-center">
          <a
            href={katalog[0]}
            download="UTA_Catalog.pdf"
            className="group flex flex-col items-center justify-center text-black dark:text-[#f7c75e] hover:text-[#f7c75e]"
          >
            <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <FaFilePdf
                size={48}
                className="text-red-500 group-hover:text-red-400 transition-colors duration-200"
              />
            </div>
            <span className="mt-2 text-xl font-semibold underline">
              {language === "TURKCE" ? "UTA Catalog" : "UTA Katalog"}
            </span>
            <div className="hidden group-hover:flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
              <FaDownload className="mr-1" /> Download PDF
            </div>
          </a>
        </div>

        {/* Corporate Profile Presentation Link */}
        <div className="flex flex-col items-center justify-center">
          <a
            href={katalog[1]}
            download="UTA_CorporateProfilePresentation.pdf"
            className="group flex flex-col items-center justify-center text-black dark:text-[#f7c75e] hover:text-[#f7c75e]"
          >
            <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <TbBuildingSkyscraper
                size={48}
                className="text-blue-500 group-hover:text-blue-400 transition-colors duration-200"
              />
            </div>
            <span className="mt-2 text-xl font-semibold underline">
              {language === "TURKCE"
                ? "UTA Corparate Profile Presentation"
                : "UTA Sunum Dosyası"}
            </span>
            <div className="hidden group-hover:flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
              <FaDownload className="mr-1" /> Download PDF
            </div>
          </a>
        </div>

        {/* Group Spor Malzeme Link */}
        <div className="flex flex-col items-center justify-center">
          <a
            href={katalog[2]}
            download="UTA_SportsEquipments.pdf"
            className="group flex flex-col items-center justify-center text-black dark:text-[#f7c75e] hover:text-[#f7c75e]"
          >
            <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <FaBuilding
                size={48}
                className="text-green-500 group-hover:text-green-400 transition-colors duration-200"
              />
            </div>
            <span className="mt-2 text-xl font-semibold underline">
              {language === "TURKCE"
                ? "UTA Sport Equipments"
                : "UTA Spor Malzemeleri"}
            </span>
            <div className="hidden group-hover:flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
              <FaDownload className="mr-1" /> Download PDF
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
