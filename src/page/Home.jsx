import React from "react";
import HomeCarousel from "../compenents/HomeCarousel";

const Home = () => {
  return (
    <div className="mt-20 flex flex-col ">
      <div className="flex-grow">
        <p>Home</p>
        <div>
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
