import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { LanguageOutlined } from "@material-ui/icons";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../features/userSlice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function createAccount(event) {
    event.preventDefault();

    if (!firstname) alert("Please enter your first name!");
    if (!lastname) alert("Please enter your last name!");

    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        updateProfile(user.user, { displayName: firstname }).then(() => {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: firstname,
            })
          );
          navigate("/teslaaccount");
        });
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className="signup">
      <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
              className="logo"
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageOutlined /> <span>en-GB</span>
        </div>
      </div>
      <div className="signup__info">
        <h1 className="signup__info--title">Create Account</h1>
        <form className="signup__form">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name=""
            id="firstname"
            required
            value={firstname}
            onChange={event => setFirstname(event.target.value)}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name=""
            id="lastname"
            required
            value={lastname}
            onChange={event => setLastname(event.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name=""
            id="email"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <ButtonPrimary
            className="btn__primary"
            name="create account"
            type="submit"
            onClick={createAccount}
          />
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="sign in" />
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
