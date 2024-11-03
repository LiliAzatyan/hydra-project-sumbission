import TechnologiesPicture from "../../../assets/images/technologies-picture.png";
import UnrealImage from "../../../assets/images/tech-img/unreal.png";
import OculusImage from "../../../assets/images/tech-img/oculus.png";
import PrevArrow from "../../../assets/images/arrow/prev-arrow.png";
import NextArrow from "../../../assets/images/arrow/next-arrow.png";
import UnityImage from "../../../assets/images/tech-img/unity.png";
import ViveImage from "../../../assets/images/tech-img/vive.png";
import React, { useState } from "react";
import "./TechSection.css";

const images = [
  { src: UnrealImage, alt: "Unreal image" },
  { src: UnityImage, alt: "Unity image" },
  { src: OculusImage, alt: "Oculus image" },
  { src: ViveImage, alt: "Vive image" },
];

const TechSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="tech-section">
      <div className="main-image-section">
        <img
          src={TechnologiesPicture}
          alt="technologies-picture"
          className="technologies-picture"
        />
      </div>

      <div className="tech-images-section">
        <div className="tech-images-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="tech-image"
            />
          ))}
        </div>

        <div className="carousel">
          <button onClick={handlePrev} className="carousel-arrow left-arrow">
            <img src={PrevArrow} alt="Previous Arrow" />
          </button>
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="carousel-image"
          />
          <button onClick={handleNext} className="carousel-arrow right-arrow">
            <img src={NextArrow} alt="Next Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
