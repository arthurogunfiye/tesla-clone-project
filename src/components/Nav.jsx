import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Nav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
            className="nav__logo--img"
          />
        </Link>
      </div>
      <div className="nav__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panels</Link>
      </div>
      <div className="nav__right">
        <Link to="/" className={isMenuOpen ? "nav__link--hidden" : undefined}>
          Shop
        </Link>
        <Link
          to="/login"
          className={isMenuOpen ? "nav__link--hidden" : undefined}
        >
          Tesla Account
        </Link>
        <div className="nav__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Nav;
