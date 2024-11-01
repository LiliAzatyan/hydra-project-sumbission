import HamburgerLongLine from "../../assets/images/hamburgerLongLine.png";
import HamburgerShortLine from "../../assets/images/hamburgerShortLine.png";
import LogoName from "../../assets/images/logoPicture.png";
import Button from "../../components/button/Button";
import Logo from "../../assets/images/logo.png";
import React, { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
       <Link to="/"> <img src={LogoName} alt="logo-name" className="logo-image" /></Link>
        <img src={Logo} alt="Hydra Logo" className="logo-text" />
      </div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/coming-soon" className="nav-items">
          About
        </Link>
        <Link to="/coming-soon" className="nav-items">
          Services
        </Link>
        <Link to="/coming-soon" className="nav-items">
          Technologies
        </Link>
        <Link to="/coming-soon" className="nav-items">
          How To
        </Link>
        <div className="buttons-mobile">
          <button className="contact-btn">Contact Us</button>
          <Button>JOIN HYDRA</Button>
        </div>
      </nav>
      <div className="buttons-desktop">
        <button className="contact-btn">Contact Us</button>
        <Button>JOIN HYDRA</Button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <img
          src={HamburgerLongLine}
          alt="HamburgerLongLine"
          className="hamburgerLongLine"
        />
        <img
          src={HamburgerShortLine}
          alt="HamburgerShortLine"
          className="hamburgerShortLine"
        />

        <img
          src={HamburgerLongLine}
          alt="HamburgerLongLine"
          className="hamburgerLongLine"
        />
      </div>
    </header>
  );
};

export default Header;