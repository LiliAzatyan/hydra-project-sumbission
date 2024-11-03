// import Process01 from "../../../assets/images/process-img/process-01.png";
// import Process02 from "../../../assets/images/process-img/process-02.png";
// import Process03 from "../../../assets/images/process-img/process-03.png";
// import Process04 from "../../../assets/images/process-img/process-04.png";
// import ProcessWork from "../../../assets/images/process-work.png";
import ArrowRight from "../../../assets/images/arrow-right-long.png";
import "./ProcessSection.css";
import React from "react";
import OutlineArrow from "../../../assets/images/outline.png";

const ProcessSection = () => {
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
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>
        </div>
      <div className="process-images-section">
        <button className="arrow left">
          <img src={OutlineArrow} alt="Left Arrow" />
        </button>

        <div className="process-picture">
          <div className="circle">
            <span>01</span>
          </div>
          <div className="process-text-section">
            <p>3D Conception & Design</p>
          </div>
        </div>

        <div className="process-picture">
          <div className="circle">
            <span>02</span>
          </div>
          <div className="process-text-section">
            <p>Interaction Design</p>
          </div>
        </div>

        <div className="process-picture">
          <div className="circle">
            <span>03</span>
          </div>
          <div className="process-text-section">
            <p>VR World User Testing</p>
          </div>
        </div>

        <div className="process-picture">
          <div className="circle">
            <span>04</span>
          </div>
          <div className="process-text-section">
            <p>Hydra VR Deploy</p>
          </div>
        </div>

        <button className="arrow right">
          <img src={OutlineArrow} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default ProcessSection;
