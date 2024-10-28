import HeaderButtons from "../../components/navigations/headerButtons/HeaderButtons";
import HeaderLogo from "../../components/navigations/headerLogo/HeaderLogo";
import NavBar from "../../components/navigations/navBar/NavBar";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <NavBar />
      <HeaderButtons />
    </header>
  );
};

export default Header;
