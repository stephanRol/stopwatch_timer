import React from "react";
import { Link } from "react-router-dom";
import clock from "../../../assets/clock.mp4";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <video src={clock} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="elements">
          <h2>Time</h2>
          <p>&nbsp;&nbsp;is running out</p>
          <Link to="/timer" className="start-link">
            <button>START</button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
