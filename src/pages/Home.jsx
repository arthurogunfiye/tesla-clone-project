import React from "react";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import Header from "../components/Header";

function Home({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <Header />
    </div>
  );
}

export default Home;
