import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/icons/pinterest.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import FooterLine from "../../assets/images/footerLine.png";
import FooterUnderLine from "../../assets/images/footerUnderLine.png";
import FooterLogo from "../../assets/images/logoPicture.png";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
    <div className="footer-container">
      <div className="footer-section-1">
        <img src={FooterLogo} alt="FooterLogo" className="footer-logo" />
      </div>
      <img src={FooterLine} alt="FooterLine" />
      <div className="footer-section-2">
        <ul className="footer-navigations">
          <li>
            <a href="/" className="footer-elements">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/" className="footer-elements">
              SERVICES
            </a>
          </li>
          <li>
            <a href="/" className="footer-elements">
              TECHNOLOGIES
            </a>
          </li>
          <li>
            <a href="/" className="footer-elements">
              HOW TO
            </a>
          </li>
          <li>
            <a href="/" className="footer-elements">
              JOIN HYDRA
            </a>
          </li>
        </ul>
      </div>
      <img src={FooterLine} alt="FooterLine" />

      <div className="footer-section-3">
        <ul className="footer-navigations">
          <li>
            <a href="/" className="footer-elements">
              F.A.Q
            </a>
          </li>
          <li>
            <a href="/" className="footer-elements">
              SITEMAP
            </a>
          </li>
          <li>
            <a href="/" className="footer-elements">
              CONDITIONS
            </a>
          </li>
          <li>
            <a href="/" className="footer-elements">
              LICENSES
            </a>
          </li>
        </ul>
      </div>
      <img src={FooterLine} alt="FooterLine" />

      <div className="footer-section-4">
          <span className="footer-elements">SOCIALIZE WITH HYDRA</span>
          <div className="social-media-icons">
            <a href="/">
              <Facebook />
            </a>
            <a href="/">
              <Instagram />
            </a>
            <a href="/">
              <Linkedin />
            </a>
            <a href="/">
              <Pinterest />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <Youtube />
            </a>
          </div>
          <button className="footer-btn">BUILD YOUR WORLD</button>
        </div>
    </div>
        <div>
            <div className="footer-section-5">
            <img src={FooterUnderLine} alt="FooterUnderLine"/>
            </div>
            <span className="underline-text">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </span>
        </div>
    </div>
  );
};

export default Footer;
