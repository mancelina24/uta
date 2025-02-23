import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card"; // Ensure react-bootstrap is installed

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
    <section className="flex flex-col items-center py-8">
      <div>
        <div>
          <p
            className="text-3xl my-10 md:text-5xl leading-[58.09px] tracking-[1%] font-medium text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {language === TURKCE ? "Projects" : "Projeler"}
          </p>
        </div>
        {/* Responsive Card Grid */}
        <div className="w-full flex flex-wrap justify-center gap-6 mt-10 mb-15">
          {selectedProjects.map((desc, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-6"
            >
              {/* Card Container */}
              <Card
                className={`h-full flex flex-col rounded-3xl ${CardColor(i)}`}
              >
                <Card.Img
                  variant="top"
                  src={desc.img}
                  className="w-full h-64 object-cover rounded-t-3xl"
                  alt={desc.titledesc}
                />
                <Card.Body className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <Card.Title
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "Playfair Display" }}
                    >
                      {desc.titledesc}
                    </Card.Title>
                    <Card.Text
                      className="mb-4"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {desc.desc}
                    </Card.Text>
                  </div>

                  <div className="flex justify-between mt-4">
                    <Link
                      to="/galery"
                      className="hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md transition duration-200"
                    >
                      {language === TURKCE
                        ? "View on Gallery"
                        : "Galeride Görüntüle"}
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
