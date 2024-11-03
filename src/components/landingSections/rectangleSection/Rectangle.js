import LocationImg from "../../../assets/images/rectangle-img/location.png";
import PhoneImg from "../../../assets/images/rectangle-img/phone.png";
import MailImg from "../../../assets/images/rectangle-img/mail.png";
import React from "react";
import "./Rectangle.css";

const Rectangle = () => {
  return (
    <div className="contact-info">
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
  );
};

export default Rectangle;
