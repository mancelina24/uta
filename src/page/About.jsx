import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { aboutEng } from "../api/dataEng";
import { aboutTr, TURKCE } from "../api/dataTr";

const About = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <div className="flex flex-col mt-10">
      <div>
        <div className="w-[80%] flex flex-col justify-center items-center mx-auto my-10">
          <h2 className="text-center mb-5 font-bold">
            {" "}
            {language === TURKCE ? aboutEng.title1 : aboutTr.title1}
          </h2>
          <p className="text-center">
            {" "}
            {language === TURKCE ? aboutEng.desc1 : aboutTr.desc1}
          </p>
        </div>
        <div className="flex flex-row w-[80%] justify-center items-center mx-auto my-10 gap-10">
          <div>
            <img
              src={aboutTr.img1}
              className="img-fluid rounded max-w-full h-auto"
              alt=""
            />
          </div>
          <div className="flex flex-col w-[70%] justify-center items-center mx-auto my-10">
            <h2 className="mb-5 font-bold">
              {" "}
              {language === TURKCE ? aboutEng.title2 : aboutTr.title2}
            </h2>
            <p> {language === TURKCE ? aboutEng.desc2 : aboutTr.desc2}</p>
          </div>
        </div>
        <div className="flex flex-row w-[80%] justify-center items-center mx-auto my-10 gap-10">
          <div>
            <img
              src={aboutTr.img2}
              className="img-fluid rounded max-w-full h-auto"
              alt=""
            />
          </div>
          <div className="flex flex-col w-[90%] justify-center items-center mx-auto my-10">
            <h2 className="mb-5 font-bold">
              {" "}
              {language === TURKCE ? aboutEng.title3 : aboutTr.title3}
            </h2>
            <p> {language === TURKCE ? aboutEng.desc3 : aboutTr.desc3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
