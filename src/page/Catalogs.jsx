import React from "react";
import { UserContext } from "../contexts/UserContext";

const Catalogs = () => {
  const { language } = useContext(UserContext);

  return (
    <div>
      <h3 className="mt-5 mb-1 mr-5 font-bold ml-5">
        {" "}
        {language === TURKCE ? "Catalogs" : "Kataloglar"}
      </h3>
    </div>
  );
};

export default Catalogs;
