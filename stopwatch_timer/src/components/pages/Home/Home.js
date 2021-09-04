import React from "react";
import { Link } from "react-router-dom";
import clock from "../../../assets/clock.mp4";

const Home = () => {
  return (
    <div className="home">
      <section>
        <video src={clock} muted loop autoPlay></video>
        <div className="elements">
          <h2>Home</h2>
          <Link to="/stopwatch">Stopwatch</Link>
          <Link to="/timer">Timer</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
