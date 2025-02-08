import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { TURKCE, galeryTr } from "../api/dataTr.js";
import { galeryEng } from "../api/dataEng.js";

const Galery = () => {
  const { language, darkMode } = useContext(UserContext);

  const galleryData = language === TURKCE ? galeryEng : galeryTr;
  return (
    <section>
      <div className="flex flex-col">
        <div>
          <p
            className=" text-3xl my-10 md:text-5xl leading-[58.09px] tracking-[1%]  font-medium text-center "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {" "}
            {language === TURKCE ? "Gallery" : "Galeri"}
          </p>
        </div>
        <figure className="grid grid-cols-1 gap-2 justify-items-center">
          {galleryData.desc.map((galery) => (
            <div
              key={galery.id}
              className="flex flex-col items-center justify-center py-2"
            >
              <p
                className={`font-medium text-center text-2xl ${
                  darkMode ? "dark:text-[#d9d9d9]" : "text-[#777777]"
                }`}
              >
                {galery.title}
              </p>
              <div className="flex flex-row justify-center content-center gap-5 w-[90%]">
                <img src={galery.img1} className="w-[28%] h-auto my-5" />
                <img src={galery.img2} className="w-[28%] h-auto my-5" />
                <img src={galery.img3} className="w-[28%] h-auto my-5" />
              </div>
            </div>
          ))}{" "}
        </figure>
      </div>
    </section>
  );
};

export default Galery;
