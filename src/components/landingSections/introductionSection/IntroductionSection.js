import ArrowRight from "../../../assets/images/arrow-right-long.png";
import "./IntroductionSection.css";
import React from "react";

const IntroductionSection = () => {
  return (
    <div className="intro-container">
      <div className="intro-title-container">
        <p className="intro-big-title">INTRODUCTION</p>
        <div className="arrow-section">
          <p className="intro-small-header">TO HYDRA VR</p>
          <img
            src={ArrowRight}
            alt="intro-picture"
            className="intro-picture"
          />
        </div>
      </div>
      <p className="intro-text">
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
        Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
        mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
        sit amet tellus. Ornare  lectus sit amet est placerat in. Lectus magna
        fringilla urna porttitor rhoncus vitae.
      </p>
    </div>
  );
};

export default IntroductionSection;
