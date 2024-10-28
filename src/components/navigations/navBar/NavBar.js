import PATHS from "../../../constant/paths";
import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-links">
        <Link to={PATHS.COMING_SOON}>ABOUT</Link>
        <Link to={PATHS.COMING_SOON}>SERVICES</Link>
        <Link to={PATHS.COMING_SOON}>TECHNOLOGIES</Link>
        <Link to={PATHS.COMING_SOON}>HOW TO</Link>
      </nav>
    </div>
  );
};

export default NavBar;
