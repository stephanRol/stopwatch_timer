import React from "react";
import { Link } from "react-router-dom";
import clock from "../../../assets/clock.mp4";

const Home = () => {
  return (
    <div className="home">
      <section>
        <video src={clock} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="elements">
          <h2>Time</h2>
          <p>is running out</p>
          <Link to="/timer" className="start-link">
            <button>START</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
