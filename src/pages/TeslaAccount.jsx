import React from "react";
import "./TeslaAccount.css";
import Menu from "../components/Menu";
import TeslaAccountNav from "../components/TeslaAccountNav";
import TeslaAccountHeader from "../components/TeslaAccountHeader";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { selectUser, logout } from "../features/userSlice";

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutOfApp() {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className="teslaAccount">
      <TeslaAccountNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        logoutOfApp={logoutOfApp}
      />
      {isMenuOpen && <Menu />}
      <TeslaAccountHeader logoutOfApp={logoutOfApp} />
    </div>
  );
}

export default TeslaAccount;
