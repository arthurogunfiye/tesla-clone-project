import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import TeslaAccount from "./pages/TeslaAccount";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  // Read up on firebase persistence
  // https://firebase.google.com/docs/auth/web/auth-state-persistence
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // If User is signed in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/teslaaccount" /> : <Login />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/teslaaccount"
            element={
              !user ? (
                <Navigate to="/login" />
              ) : (
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Stopped at 3:31:00
// email: arthur.ogunfuye@yahoo.com
// email: nike.ogunfuye@yahoo.com
// email: elizabeth.ogunfuye@yahoo.com
// email: joshua.ogunfuye@yahoo.com
// password: 12345qwert
