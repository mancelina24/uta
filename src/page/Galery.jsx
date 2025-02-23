import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { TURKCE, galeryTr } from "../api/dataTr.js";
import { galeryEng } from "../api/dataEng.js";

const Galery = () => {
  const { language, darkMode } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = language === TURKCE ? galeryEng : galeryTr;

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section>
      <div className="flex flex-col">
        <div>
          <p
            className=" text-3xl my-10 md:text-5xl leading-[58.09px] tracking-[1%] font-medium text-center "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
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
              <div className="flex flex-row justify-center items-center gap-5 w-[90%]">
                <img
                  src={galery.img1}
                  className="w-[25%] h-[65%] my-5 cursor-pointer rounded-md shadow-md transition-transform duration-200 hover:scale-105"
                  onClick={() => handleImageClick(galery.img1)}
                  alt={galery.title + " Image 1"}
                />
                <img
                  src={galery.img2}
                  className="w-[25%] h-[65%] my-5 cursor-pointer rounded-md shadow-md transition-transform duration-200 hover:scale-105"
                  onClick={() => handleImageClick(galery.img2)}
                  alt={galery.title + " Image 2"}
                />
                <img
                  src={galery.img3}
                  className="w-[25%] h-[65%] my-5 cursor-pointer rounded-md shadow-md transition-transform duration-200 hover:scale-105"
                  onClick={() => handleImageClick(galery.img3)}
                  alt={galery.title + " Image 3"}
                />
                <img
                  src={galery.img4}
                  className="w-[25%] h-[65%] my-5 cursor-pointer rounded-md shadow-md transition-transform duration-200 hover:scale-105"
                  onClick={() => handleImageClick(galery.img4)}
                  alt={galery.title + " Image 4"}
                />
              </div>
            </div>
          ))}
        </figure>

        {/* Modal for displaying enlarged image */}
        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:text-gray-300 transition-colors duration-200"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Image"
                className="max-w-4xl max-h-4xl rounded-md shadow-lg"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Galery;
