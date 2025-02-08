import { useEffect, useState } from "react";
import { carousel } from "../api/dataTr.js";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );

    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000); // Her 3000 milisaniyede bir (3 saniye) slayt geçişi yapar

      return () => clearInterval(intervalId); // Bileşen unmont edildiğinde interval silinir
    }, []);
  };
  return (
    <div className="relative w-full overflow-hidden">
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ⬅️
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ➡️
      </button>
    </div>
  );
};

export default HomeCarousel;
