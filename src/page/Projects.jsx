import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { projectsEng } from "../api/dataEng";
import { projectsTr, TURKCE } from "../api/dataTr";

const Projects = () => {
  const { language, darkMode } = useContext(UserContext);

  const selectedProjects =
    language === TURKCE ? projectsEng.description : projectsTr.description;

  function CardColor(i) {
    if (i % 2 === 0) {
      return "bg-[#f7c75e] dark:bg-[#2D3235]";
    } else {
      return "bg-[#a2a2a2] dark:bg-[#495351]";
    }
  }

  return (
    <section className="flex flex-col items-center">
      <div>
        {" "}
        <div>
          <p
            className=" text-3xl my-10 md:text-5xl leading-[58.09px] tracking-[1%]  font-medium text-center "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {" "}
            {language === TURKCE ? "Projects" : "Projeler"}
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-15 mt-10 mb-15">
          {selectedProjects.map((desc, i) => (
            <div key={i} className="w-[40%] mx-2 mb-10 ">
              {" "}
              {/* Her Card için kapsayıcı div eklendi */}
              <Card
                className={`flex flex-row items-center flex-wrap gap-10 h-190 w-full rounded-3xl ${CardColor(
                  i
                )}`}
              >
                <Card.Body className="p-8 content-center ">
                  <Card.Title
                    className="text-3xl my-8 font-bold"
                    style={{
                      fontFamily: "Playfair Display",
                    }}
                  >
                    {desc.titledesc}
                  </Card.Title>
                  <Card.Text
                    className="my-8"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {desc.desc}
                  </Card.Text>

                  <div className="flex justify-between my-8 font-bold">
                    <Link
                      to="/galery"
                      className="hover:bg-[#7a7a7a] hover:text-black"
                    >
                      View Galery
                    </Link>
                  </div>
                  <div>
                    <Card.Img
                      variant="top"
                      src={desc.img}
                      className="w-full h-80 object-cover mb-2 rounded-2xl   mt-3" // Resim için yuvarlatma
                    />
                  </div>
                </Card.Body>
              </Card>
            </div> // Kapsayıcı div burada kapatılıyor
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
