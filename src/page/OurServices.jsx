import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { ourServicesEng } from "../api/dataEng";
import { ourServicesTr, TURKCE } from "../api/dataTr";

import Card from "react-bootstrap/Card";

const OurServices = () => {
  const { language, darkMode } = useContext(UserContext);

  const selectedProjects =
    language === TURKCE
      ? ourServicesEng.description
      : ourServicesTr.description;

  function CardColor(i) {
    if (i % 2 === 0) {
      return "bg-[#f7c75e] dark:bg-[#2D3235]";
    } else {
      return "bg-[#a2a2a2] dark:bg-[#495351]";
    }
  }

  return (
    <article>
      <div className="flex flex-col mt-10">
        <div>
          <p
            className=" text-3xl my-5 md:text-5xl leading-[58.09px] tracking-[1%]  font-medium text-center "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {" "}
            {language === TURKCE ? "Our Services" : "Hizmetlerimiz"}
          </p>
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center mx-auto my-5">
          <p className="text-center font-bold">
            {" "}
            {language === TURKCE ? ourServicesEng.title2 : ourServicesTr.title2}
          </p>
        </div>
        <div className="w-full flex flex-col mt-10 mb-15 justify-center items-center">
          <Card className="flex flex-col gap-10 h-auto w-full max-w-6xl  ">
            {selectedProjects.map((desc, i) => (
              <Card.Body
                key={i}
                className={`flex flex-row justify-center p-8  rounded-lg" ${CardColor(
                  i
                )}`}
              >
                <Card.Img
                  variant="top"
                  src={desc.img}
                  className="w-45% h-80 object-cover mb-2 mr-6 rounded-2xl"
                />
                <div>
                  <Card.Title
                    className="text-3xl my-8 font-bold"
                    style={{
                      fontFamily: "Playfair Display",
                    }}
                  >
                    {desc.titledesc}
                  </Card.Title>
                  <Card.Text
                    className="my-8 "
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {desc.desc}
                  </Card.Text>

                  <div className="flex justify-between my-8 font-bold "> </div>
                </div>
              </Card.Body>
            ))}
          </Card>
        </div>
      </div>
    </article>
  );
};

export default OurServices;
