import { useEffect, useState } from "react";
import { carousel } from "../api/dataTr.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Her 3000 milisaniyede bir (3 saniye) slayt geçişi yapar

    return () => clearInterval(intervalId); // Bileşen unmont edildiğinde interval silinir
  }, []);
  return (
    <div className="flex justify-center mb-5 items-center">
      <div className="relative  w-[65%] 2xl:w-[35%] h-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carousel.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full  w-[14rem] h-[3.9rem]"
        >
          <FaChevronLeft className="text-white text-2xl md:text-4xl bg-transparent" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full "
        >
          <FaChevronRight className="text-white text-2xl md:text-4xl bg-transparent" />
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
