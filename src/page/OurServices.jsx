import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { ourServicesEng } from "../api/dataEng";
import { ourServicesTr, TURKCE } from "../api/dataTr";

const OurServices = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <article>
      <div className="flex flex-col mt-10">
        <div className="w-[80%] flex flex-col justify-center items-center mx-auto my-10">
          <h2 className="text-center mb-5 font-bold">
            {" "}
            {language === TURKCE ? ourServicesEng.title1 : ourServicesTr.title1}
          </h2>
          <p className="text-center">
            {" "}
            {language === TURKCE ? ourServicesEng.title2 : ourServicesTr.title2}
          </p>
        </div>
        <div>
          <div className="flex flex-row w-[80%] justify-center items-center mx-auto my-10 gap-10">
            <div>
              <img
                src={ourServicesTr.img1}
                className="img-fluid rounded max-w-full h-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col w-[70%] justify-center items-center mx-auto my-10">
              <h2 className="mb-5 font-bold">
                {" "}
                {language === TURKCE
                  ? ourServicesEng.titledesc1
                  : ourServicesTr.titledesc1}
              </h2>
              <p>
                {" "}
                {language === TURKCE
                  ? ourServicesEng.desc1
                  : ourServicesTr.desc1}
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default OurServices;
