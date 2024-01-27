import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__infoText">
          <h1 className="header__infoText--title">Model 3</h1>
          <h4 className="header__infoText--sub-title">
            Order Online for{" "}
            <span className="touchlessDelivery">Touchless Delivery</span>
          </h4>
        </div>
        <div className="header__ctas">
          <button className="header__btnPry">custom order</button>
          <button className="header__btnSec">existing inventory</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
