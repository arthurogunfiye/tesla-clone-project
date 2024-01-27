import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { LanguageOutlined } from "@material-ui/icons";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signIn(event) {
    event.preventDefault();

    if (!email) alert("Please enter your email!");
    if (!password) alert("Please enter your password!");

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
        navigate("/teslaaccount");
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
              className="logo"
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlined /> <span>en-GB</span>
        </div>
      </div>
      <div className="login__info">
        <h1 className="login__info--title">Sign In</h1>
        <form className="login__form">
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
            name="Sign In"
            type="submit"
            onClick={signIn}
          />
        </form>
        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="create account" />
        </Link>
      </div>
    </div>
  );
}

export default Login;

// We could use React-Form but chose to use the standard HTML form
// Read https://www.w3schools.com/react/react_forms.asp
