import PATHS from "../../../constant/paths";
import { Link } from "react-router-dom";
import "./HeaderButtons.css";
import React from "react";

const HeaderButtons = () => {
  return (
    <div>
      <div className="header-buttons">
        <Link to={PATHS.COMING_SOON} className="contact-btn">
          CONTACT US
        </Link>
        <Link to={PATHS.COMING_SOON} className="join-btn">
          JOIN HYDRA
        </Link>
      </div>
    </div>
  );
};

export default HeaderButtons;
