import TechnologiesPicture from "../../../assets/images/technologies-picture.png";
import ArrowTechSection from "../../../assets/images/arrow-techSection.png";
import "./TechSection.css";
import React from "react";

const TechSection = () => {
  return (
    <div>
      <div>
        <img
          src={TechnologiesPicture}
          alt="technologies-picture"
          className="technologies-picture"
        />
        <img src={ArrowTechSection} alt="ArrowTechSection" className="arrow-tech-section"/>
      </div>

      <div></div>
    </div>
  );
};

export default TechSection;
