import React from "react";
import HomeCarousel from "../compenents/HomeCarousel";

const Home = () => {
  return (
    <div className="my-15 flex flex-col ">
      <div className="flex-grow">
        <div>
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
