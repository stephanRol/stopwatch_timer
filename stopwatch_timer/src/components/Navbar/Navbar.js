import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger.js/Hamburger";

const Navbar = () => {
  return (
    <div className="navbar">
      <Hamburger />
      <ul className="stopwatch-timer-list">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/timer">
          Timer
        </Link>
        <Link className="link" to="/stopwatch">
          Stopwatch
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
