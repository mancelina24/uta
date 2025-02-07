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
      return "bg-[#DDEEFE] dark:bg-[#2D3235]";
    } else {
      return "bg-[#D9F6F1] dark:bg-[#495351]";
    }
  }

  return (
    <section>
      <div>
        <div className="w-[90%] lg:w-[70%]">
          <Card className="flex flex-col md:flex-row gap-20 h-auto ">
            {selectedProjects.map((desc, i) => (
              <Card.Body key={i} className={`p-8 rounded-3xl" ${CardColor(i)}`}>
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

                <div className="flex justify-between my-8 font-bold ">
                  {" "}
                  <Card.Link href="/" className="hover:bg-[#EA2678]">
                    View on Galeri
                  </Card.Link>
                </div>

                <Card.Img
                  variant="top"
                  src={desc.img}
                  className="w-45% h-80 object-cover mb-2 rounded-2xl"
                />
              </Card.Body>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
