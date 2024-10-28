import Logo from "../../../assets/images/logoPicture.png";
import LogoName from "../../../assets/images/logo.png";
import PATHS from "../../../constant/paths";
import { Link } from "react-router-dom";
import React from "react";
import "./HeaderLogo.css";

const HeaderLogo = () => {
  return (
    <div>
      <Link to={PATHS.HOME}>
        <div className="logo">
          <img src={Logo} alt="Hydra Logo" className="logo-image" />
          <img src={LogoName} alt="logo-name" className="logo-name" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
