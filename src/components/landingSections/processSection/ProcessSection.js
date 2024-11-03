import Process01 from "../../../assets/images/process-img/process-01.png";
import Process02 from "../../../assets/images/process-img/process-02.png";
import Process03 from "../../../assets/images/process-img/process-03.png";
import Process04 from "../../../assets/images/process-img/process-04.png";
import ArrowRight from "../../../assets/images/arrow-right-long.png";
import OutlineArrow from "../../../assets/images/outline.png";
import React, { useState } from "react";
import "./ProcessSection.css";

const ProcessSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const processItems = [
    { id: Process01, title: "3D Conception & Design" },
    { id: Process02, title: "Interaction Design" },
    { id: Process03, title: "VR World User Testing" },
    { id: Process04, title: "Hydra VR Deploy" },
  ];

  const nextProcess = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % processItems.length);
  };

  const prevProcess = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + processItems.length) % processItems.length
    );
  };

  return (
    <div>
      <div className="process-section-1">
        <div className="process-container">
          <div className="process-title-container">
            <p className="process-big-title">WHY BUILD</p>
            <div className="process-arrow-section">
              <p className="process-small-header">WITH HYDRA?</p>
              <img
                src={ArrowRight}
                alt="process-picture"
                className="process-picture"
              />
            </div>
          </div>
          <p className="process-text">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className="process-images-section">
        <button className="arrow left" onClick={prevProcess}>
          <img src={OutlineArrow} alt="Left Arrow" />
        </button>
        <div className="process-picture">
          <div className="circle">
            <span>{(currentIndex + 1).toString().padStart(2, "0")}</span>
          </div>
          <div className="process-text-section">
            <p>{processItems[currentIndex].title}</p>
            <img
              src={processItems[currentIndex].id}
              alt={processItems[currentIndex].title}
            />
          </div>
        </div>
        <button className="arrow right" onClick={nextProcess}>
          <img src={OutlineArrow} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default ProcessSection;
