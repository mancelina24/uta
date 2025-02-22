import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { ourServicesEng } from "../api/dataEng";
import { ourServicesTr, TURKCE } from "../api/dataTr";

import Card from "react-bootstrap/Card";

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
      </div>
    </article>
  );
};

export default OurServices;
