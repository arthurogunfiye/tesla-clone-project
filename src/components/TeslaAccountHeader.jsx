import React from "react";
import { Link } from "react-router-dom";
import Car from "./Car";
import "./TeslaAccountHeader.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function TeslaAccountHeader({ logoutOfApp }) {
  const user = useSelector(selectUser);

  return (
    <div className="teslaAccountHeader">
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s"} Tesla</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link to="/">Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign Out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
}

export default TeslaAccountHeader;
