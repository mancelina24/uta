import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { aboutEng, addressEng } from "../api/dataEng";
import { aboutTr, grups, TURKCE } from "../api/dataTr";
import {
  FaFilePdf,
  FaDownload,
  FaBuilding,
  FaCertificate,
  FaGavel,
  FaBullseye,
  FaHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BiTask } from "react-icons/bi";

const About = () => {
  const { language, darkMode } = useContext(UserContext);
  const [openTitle, setOpenTitle] = useState(null);

  const toggleDescription = (title) => {
    setOpenTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  const textColor = darkMode ? "text-gray-300" : "text-gray-700";
  const headingColor = darkMode ? "text-white" : "text-black";

  return (
    <div className="flex flex-col mt-10 mb-15">
      <div>
        <h4
          className=" text-3xl my-10 md:text-5xl leading-[58.09px] tracking-[1%] font-medium text-center "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {language === TURKCE ? "About" : "Hakkımızda"}
        </h4>
      </div>

      {/* Company Intro Section */}
      <section className="bg-white dark:bg-gray-800 py-8">
        <div className="w-[80%] mx-auto flex flex-col items-center md:items-start">
          <h2
            className={`text-3xl font-semibold ${headingColor} mb-4 flex items-center`}
          >
            {language === TURKCE ? "About UTA" : "UTA Hakkında"}
            <FaHandshake className="ml-2 text-xl text-blue-500" />
          </h2>
          <p className={`text-start my-5 md:my-2 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc1 : aboutTr.desc1}
          </p>
          <p className={`text-start my-5 md:my-2 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc11 : aboutTr.desc11}
          </p>
          <hr className="w-full my-4 border-gray-200 dark:border-gray-700" />
          <p className={`text-start my-5 md:my-2 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc12 : aboutTr.desc12}
          </p>
          <hr className="w-full my-4 border-gray-200 dark:border-gray-700" />
          <p className={`text-start my-5 md:my-2 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc13 : aboutTr.desc13}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-100 dark:bg-gray-700 py-8">
        <div className="w-[80%] mx-auto flex flex-col items-center md:items-start">
          <h2
            className={`text-3xl font-semibold ${headingColor} mb-4 flex items-center`}
          >
            {language === TURKCE
              ? "Our Mission & Vision"
              : "Misyonumuz & Vizyonumuz"}
            <FaGlobeAmericas className="ml-2 text-xl text-green-500" />
          </h2>
          <p className={`text-start my-5 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc2 : aboutTr.desc2}
          </p>
          <p className={`text-start my-5 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc21 : aboutTr.desc21}
          </p>
          <p className={`text-start my-5 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc22 : aboutTr.desc22}
          </p>
          <p className={`text-start my-5 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc23 : aboutTr.desc23}
          </p>
          <p className={`text-start my-5 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc24 : aboutTr.desc24}
          </p>
          <p className={`text-start my-5 ${textColor}`}>
            {language === TURKCE ? aboutEng.desc25 : aboutTr.desc25}
          </p>
        </div>
      </section>

      {/* Our Target Section */}
      <section className="bg-white dark:bg-gray-800 py-8">
        <div className="w-[80%] mx-auto flex flex-col items-center md:items-start">
          <h2
            className={`text-3xl font-semibold ${headingColor} mb-4 flex items-center`}
          >
            {language === TURKCE ? "Our Target" : "Hedefimiz"}
            <FaBullseye className="ml-2 text-xl text-red-500" />
          </h2>
          <p className={`text-start ${textColor}`}>
            {language === TURKCE ? aboutEng.desc3 : aboutTr.desc3}
          </p>
        </div>
      </section>

      {/* Document Links Section */}
      <section className="bg-gray-100 dark:bg-gray-700 py-8">
        <div className="w-[80%] mx-auto flex flex-col items-center">
          <h2 className={`text-3xl font-semibold ${headingColor} mb-4`}>
            {language === TURKCE ? "Our Documents" : "Belgelerimiz"}
          </h2>
          <div className="flex flex-row flex-wrap gap-8 justify-center items-center mb-15">
            {/* Patent Belgesi Link */}
            <div className="flex flex-col items-center justify-center">
              <a
                href="https://drive.google.com/file/d/1WrTiwPMW8r4cV-sbBYSJ7kcKPoPQPNf5/view?usp=sharing"
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
                href="https://drive.google.com/file/d/1QHSwiYIF-8CMOH44fCtMMqDtPbu9tNY0/view?usp=sharing"
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
                href="https://drive.google.com/file/d/1Fg_pJW8V8zOBfYVdidSPcqN0wNzGa0sL/view?usp=sharing"
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
        </div>
      </section>

      {/* Group Companies Section */}
      <section className="bg-white dark:bg-gray-800 py-8">
        <div className="w-[80%] mx-auto flex flex-col items-center">
          <h2 className={`text-3xl font-semibold ${headingColor} mb-4`}>
            {language === TURKCE ? "Our Group Companies" : "Grup Şirketlerimiz"}
          </h2>
          <div>
            <figure className="grid md:grid-cols-4 grid-cols-2 gap-8 md:gap-2 mt-10">
              {grups.map((grup, i) => (
                <div key={i} className="px-2 ">
                  <img
                    src={grup}
                    className="w-40 h-auto"
                    alt={`Group Company ${i + 1}`}
                  />
                </div>
              ))}
            </figure>
          </div>
        </div>
      </section>

      {/* Download Links Section */}
      <section className="bg-gray-100 dark:bg-gray-700 py-8">
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center mb-15 mt-15">
          {/* Catalog Link */}
          <div className="flex flex-col items-center justify-center">
            <a
              href="https://drive.google.com/file/d/1Y8wkhO_0c7SU2wkTYn1tmhUgBwAU8kzH/view?usp=sharing"
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
              href="https://drive.google.com/file/d/1xnxCBZi_ys_VZYljphAffxoI5qjgqWOo/view?usp=sharing"
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
              href="https://drive.google.com/file/d/1Ca1dGBRrqYM5k6een9sCXYWlEonVIMt7/view?usp=sharing"
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
      </section>
    </div>
  );
};

export default About;
