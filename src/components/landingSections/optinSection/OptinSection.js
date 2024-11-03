import OptinLine from "../../../assets/images/optin-line.png";
import Button from "../../button/Button";
import "./OptinSection.css";
import React from "react";

const OptinSection = () => {
  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">JOIN HYDRA</h2>
        <img src={OptinLine} alt="Optin-Line" />
        <p className="form-subtitle">Let's Build Your VR Experience</p>

        <form className="form-content">
          <div className="form-row">
            <input
              type="text"
              placeholder="First Name"
              className="form-input"
            />
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" className="form-input" />
            <input
              type="text"
              placeholder="Phone Number"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Subject"
              className="form-input subject"
            />
          </div>
          <div className="form-row">
            <textarea
              placeholder="Tell Us Something..."
              className="form-textarea"
            ></textarea>
          </div>
          <Button className="form-button">SEND TO HYDRA</Button>
        </form>
      </div>
    </div>
  );
};

export default OptinSection;
