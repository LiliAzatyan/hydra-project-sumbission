import LocationImg from "../../../assets/images/rectangle-img/location.png";
import PhoneImg from "../../../assets/images/rectangle-img/phone.png";
import MailImg from "../../../assets/images/rectangle-img/mail.png";
import PrevArrow from "../../../assets/images/arrow/prev-arrow.png";
import NextArrow from "../../../assets/images/arrow/next-arrow.png";
import React, { useRef } from "react";
import "./Rectangle.css";

const Rectangle = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="rectangle-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        <img src={PrevArrow} alt="Scroll Prev" />
      </button>

      <div className="contact-info" ref={scrollRef}>
        <div className="contact-item">
          <img src={LocationImg} alt="Location img" className="rectangle-img" />
          <div className="rectangle-text-section">
            <h3>Pay Us a Visit</h3>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>

        <div className="divider" />

        <div className="contact-item">
          <img src={PhoneImg} alt="Phone Img" className="rectangle-img" />
          <div className="rectangle-text-section">
            <h3>Give Us a Call</h3>
            <p>(110) 111-1010</p>
          </div>
        </div>

        <div className="divider" />

        <div className="contact-item">
          <img src={MailImg} alt="Mail Img" className="rectangle-img" />
          <div className="rectangle-text-section">
            <h3>Send Us a Message</h3>
            <p>Contact@HydraVTech.com</p>
          </div>
        </div>
      </div>

      <button className="scroll-button right" onClick={scrollRight}>
        <img src={NextArrow} alt="Scroll Next" />
      </button>
    </div>
  );
};

export default Rectangle;
