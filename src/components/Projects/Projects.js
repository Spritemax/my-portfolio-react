import { useState } from "react";
import { sliderData } from "./data";
import "./Projects.scss";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClickArrow = (where) => {
    where === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
      : setCurrentSlide(currentSlide < sliderData.length - 1 ? currentSlide + 1 : sliderData.length -1);
  };

  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
      >
        {sliderData.map((i) => (
          <div className="container" key={i.id}>
            <div className="slide">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={i.icon} alt={i.title} />
                  </div>
                  <h2>{i.title}</h2>
                  <p>{i.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={i.img} alt={i.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="arrow"
        onClick={() => handleClickArrow("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="arrow"
        onClick={() => handleClickArrow()}
      />
    </div>
  );
};

export default Projects;
