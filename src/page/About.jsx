import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { aboutEng, addressEng } from "../api/dataEng";
import { aboutTr, grups, TURKCE } from "../api/dataTr";

const About = () => {
  const { language, darkMode } = useContext(UserContext);
  const [openTitle, setOpenTitle] = useState(null);

  const toggleDescription = (title) => {
    setOpenTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  return (
    <div className="flex flex-col mt-10 mb-10">
      <div>
        <h4
          className=" text-3xl font-bold  md:text-5xl leading-[58.09px] tracking-[1%]  text-center "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {language === TURKCE ? "About" : "Hakkımızda"}
        </h4>
      </div>
      <div>
        <div className="w-[80%] flex flex-col justify-center items-center md:justify-start md:text-start md:items-start mx-auto">
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
        <div className="flex flex-col w-[80%] justify-start items-start text-start mx-auto gap-5">
          {/* Başlık 1 */}
          <div className="flex flex-col w-full justify-center items-center mx-auto my-5">
            <h2
              className="mb-5 font-bold text-center cursor-pointer text-3xl hover:bg-[#fcbc04] hover:rounded-xl hover:p-2"
              onClick={() =>
                toggleDescription(
                  language === TURKCE ? aboutEng.title2 : aboutTr.title2
                )
              }
            >
              {language === TURKCE ? aboutEng.title2 : aboutTr.title2}
            </h2>
            {openTitle ===
              (language === TURKCE ? aboutEng.title2 : aboutTr.title2) && (
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
            )}
          </div>
          <br />

          {/* Başlık 2 */}
          <div className="flex flex-col w-full justify-center items-center mx-auto my-5">
            <h2
              className="mb-5 font-bold cursor-pointer text-3xl hover:bg-[#fcbc04] hover:rounded-xl hover:p-2"
              onClick={() =>
                toggleDescription(
                  language === TURKCE ? aboutEng.title3 : aboutTr.title3
                )
              }
            >
              {language === TURKCE ? aboutEng.title3 : aboutTr.title3}
            </h2>
            {openTitle ===
              (language === TURKCE ? aboutEng.title3 : aboutTr.title3) && (
              <div>
                <p className="text-start">
                  {language === TURKCE ? aboutEng.desc3 : aboutTr.desc3}
                </p>
              </div>
            )}
          </div>
          <br />
          {/* Başlık 3 */}
          <div className="flex flex-col w-full justify-center items-center mx-auto my-5">
            <h2
              className="mb-5 font-bold text-center cursor-pointer text-3xl hover:bg-[#fcbc04] hover:rounded-xl hover:p-2"
              onClick={() =>
                toggleDescription(
                  language === TURKCE ? aboutEng.title2 : aboutTr.title2
                )
              }
            >
              {language === TURKCE
                ? "Our Group Componies"
                : "Grup Şirketlerimiz"}
            </h2>
            {openTitle ===
              (language === TURKCE ? aboutEng.title2 : aboutTr.title2) && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
