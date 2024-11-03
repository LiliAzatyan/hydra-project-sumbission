import GirlWeb from "../../../assets/images/girlWeb.png";
import Outline from "../../../assets/images/outline.png";
import Button from "../../../components/button/Button";
import "./HeroSection.css";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-intro">
        <div className="hero-text-container">
        <div className="hero-title">
            <span className="hero-text-color">Dive</span> Into The Depths{" "}
            <br />
            Of <span className="hero-text-color">Virtual Reality</span>
          </div>
          <div className="hero-lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore <br />
            nisl tincidunt eget. Lectus mauris eros in vitae.
          </div>
          <div className="hero-btn-section">
            <Button className="hero-button">BUILD YOUR WORLD</Button>
            <img src={Outline} alt="Outline" className="outline" />
          </div>
        </div>
      </div>
      <img src={GirlWeb} alt="GirlWeb" className="girl-web" />
    </div>
  );
};

export default HeroSection;
