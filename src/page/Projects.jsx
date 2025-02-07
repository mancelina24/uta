import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import Card from "react-bootstrap/Card";

import { ourServicesEng } from "../api/dataEng";
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
      <div className="w-[80%] flex flex-wrap justify-center items-center gap-15 mt-10 mb-15">
        {selectedProjects.map((desc, i) => (
          <div key={i} className="w-[40%] mx-2 mb-10 ">
            {" "}
            {/* Her Card için kapsayıcı div eklendi */}
            <Card
              className={`flex flex-row flex-wrap gap-10 h-190 w-full rounded-3xl ${CardColor(
                i
              )}`}
            >
              <Card.Body className="p-8">
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
                  <Card.Link
                    href="/"
                    className="hover:bg-[#7a7a7a] hover:text-black"
                  >
                    View on Galeri
                  </Card.Link>
                </div>
                <div>
                  <Card.Img
                    variant="top"
                    src={desc.img}
                    className="w-full h-80 object-cover mb-2 rounded-2xl mt-3" // Resim için yuvarlatma
                  />
                </div>
              </Card.Body>
            </Card>
          </div> // Kapsayıcı div burada kapatılıyor
        ))}
      </div>
    </section>
  );
};

export default Projects;
