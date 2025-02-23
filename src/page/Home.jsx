import React, { useContext } from "react";
import HomeCarousel from "../compenents/HomeCarousel";
import { addressTr, grups, TURKCE } from "../api/dataTr";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { language } = useContext(UserContext);
  return (
    <div>
      <div className="flex flex-col justify-center text-center gap-5 mt-5">
        <h1 className="text-3xl font-bold">
          {language === TURKCE
            ? "Your Local Office in Turkey:"
            : "Türkiye’deki Lokal Ofisiniz"}
        </h1>
        <h4 className="text-lg font-medium">
          {language === TURKCE
            ? "We are with you at every step with a knowledgeable team, providing safe, transparent, and complete support!"
            : "İşini Bilen Bir Ekip ile Güvenli, Şeffaf ve Tam Destek Her Adımda Yanınızdayız!"}
        </h4>
      </div>
      <div className="my-5 flex flex-col ">
        <div className="flex-grow">
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
