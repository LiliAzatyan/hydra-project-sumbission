import LogoName from "../../assets/images/logoPicture.png";
import Logo from "../../assets/images/logo.png";
import React, { useState } from "react";
import "./Header.css";
import Button from "../../components/button/Button";
import HamburgerLongLine from "../../assets/images/hamburgerLongLine.png";
import HamburgerShortLine from "../../assets/images/hamburgerShortLine.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={LogoName} alt="logo-name" className="logo-image" />
        <img src={Logo} alt="Hydra Logo" className="logo-text" />
      </div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about" className="nav-items">
          About
        </a>
        <a href="#services" className="nav-items">
          Services
        </a>
        <a href="#technologies" className="nav-items">
          Technologies
        </a>
        <a href="#howto" className="nav-items">
          How To
        </a>
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
