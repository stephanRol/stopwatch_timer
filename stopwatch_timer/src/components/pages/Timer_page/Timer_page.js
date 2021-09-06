import React from "react";
import Navbar from "../../Navbar/Navbar";
import Timer from "../../timer/Timer";
import { motion } from "framer-motion";

const Timer_page = () => {
  return (
    <motion.div
      className="timer_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <section>
        <Timer />
      </section>
    </motion.div>
  );
};

export default Timer_page;
