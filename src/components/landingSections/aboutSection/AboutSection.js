import AboutPicture from "../../../assets/images/about-picture.png";
import Button from "../../button/Button";
import "./AboutSection.css";
import React from "react";

const AboutSection = () => {
  return (
    <div className="about-container">
      <img src={AboutPicture} alt="about-picture" className="about-picture" />
      <div className="about-intro">
        <div className="about-text-container">
          <div className="about-title">
            <span className="about-text-01">ABOUT</span>
            <br />
            <span className="about-text-02">HYDRA VR</span>
          </div>
          <div className="about-lorem-text">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </div>
          <div className="about-btn-section">
            <Button className="about-button">LET'S GET IN TOUCH</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
