import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isActive, setIsActive] = useState("false");

  let menuHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        className={
          isActive
            ? "hamburger hamburger--squeeze "
            : "is-active hamburger hamburger--squeeze "
        }
        onClick={menuHamburger}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={isActive ? "black-bg" : "is-active black-bg"}>
        <ul>
          <li className="hamburger-menu-list">
            <Link to="/" className="hamburger-menu-list">
              Home
            </Link>
          </li>
          <li className="hamburger-menu-list">
            <Link to="/timer" className="hamburger-menu-list">
              Timer
            </Link>
          </li>
          <li className="hamburger-menu-list">
            <Link to="/stopwatch" className="hamburger-menu-list">
              Stopwatch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
