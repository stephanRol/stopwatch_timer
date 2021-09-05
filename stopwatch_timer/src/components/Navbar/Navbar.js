import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
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
