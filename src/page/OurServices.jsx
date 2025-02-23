import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { ourServicesEng } from "../api/dataEng";
import { ourServicesTr, TURKCE, katalog } from "../api/dataTr";

import { FaFilePdf, FaDownload, FaBuilding } from "react-icons/fa"; // Font Awesome icons
import { TbBuildingSkyscraper } from "react-icons/tb";

const OurServices = () => {
  const { language, darkMode } = useContext(UserContext);

  const selectedProjects =
    language === TURKCE
      ? ourServicesEng.description
      : ourServicesTr.description;

  function CardColor(i) {
    if (i % 2 === 0) {
      return "bg-[#f7c75e] dark:bg-[#2D3235]";
    } else {
      return "bg-[#a2a2a2] dark:bg-[#495351]";
    }
  }

  return (
    <article className="min-h-screen">
      <div className="flex flex-col mt-10">
        <div>
          <p
            className="text-3xl my-5 md:text-5xl leading-[58.09px] tracking-[1%] font-medium text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {language === TURKCE ? "Our Services" : "Hizmetlerimiz"}
          </p>
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center mx-auto my-5">
          <p className="text-center font-bold">
            {language === TURKCE ? ourServicesEng.title2 : ourServicesTr.title2}
          </p>
        </div>
        <div className="w-full flex flex-col mt-10 mb-15 justify-center items-center">
          <div className="flex flex-col gap-10 w-full max-w-6xl">
            {selectedProjects.map((desc, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row justify-center items-center p-8 rounded-lg ${CardColor(
                  i
                )}`}
              >
                <img
                  src={desc.img}
                  alt={desc.titledesc}
                  className="w-full md:w-2/5 h-auto md:h-80 object-cover mb-4 md:mb-0 md:mr-6 rounded-2xl"
                />
                <div className="w-full md:w-3/5">
                  <h3
                    className="text-2xl md:text-3xl my-4 md:my-8 font-bold"
                    style={{
                      fontFamily: "Playfair Display",
                    }}
                  >
                    {desc.titledesc}
                  </h3>
                  <p
                    className="my-4 md:my-8"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {desc.desc}
                  </p>
                  <div className="flex justify-between my-4 md:my-8 font-bold"></div>
                </div>
              </div>
            ))}
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
    </article>
  );
};

export default OurServices;
