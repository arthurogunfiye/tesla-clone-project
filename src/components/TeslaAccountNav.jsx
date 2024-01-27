import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import "./TeslaAccountNav.css";

function TeslaAccountNav({ isMenuOpen, setIsMenuOpen, logoutOfApp }) {
  return (
    <div className="teslaAccountNav">
      <div className="teslaAccountNav__logo">
        <Link to="/">
          <img
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
            className="teslaAccountNav__logo--img"
          />
        </Link>
      </div>
      <div className="teslaAccount__nav--links">
        <Link to="/teslaaccount">Model S</Link>
        <Link to="/teslaaccount">Model 3</Link>
        <Link to="/teslaaccount">Model X</Link>
        <Link to="/teslaaccount">Model Y</Link>
        <Link to="/teslaaccount">Solar Roof</Link>
        <Link to="/teslaaccount">Solar Panels</Link>
        <Link to="/teslaaccount">Shop</Link>
        <Link to="/teslaaccount">Tesla Account</Link>
        <Link onClick={logoutOfApp}>Log Out</Link>
        <div
          className="teslaAccountNav__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseIcon className="teslaAccount__closeMenu" />
          ) : (
            <MenuIcon />
          )}
        </div>
      </div>
    </div>
  );
}

export default TeslaAccountNav;
