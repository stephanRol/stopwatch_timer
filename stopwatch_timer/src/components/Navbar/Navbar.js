import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/stopwatch">Stopwatch</Link>
      </ul>
    </>
  );
};

export default Navbar;
