import React from "react";
import Navbar from "../../Navbar/Navbar";
import Stopwatch from "../../stopwatch/Stopwatch";
import { motion } from "framer-motion";

const Stopwatch_page = () => {
  return (
    <motion.div
      className="stopwatch_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <section>
        <Stopwatch />
      </section>
    </motion.div>
  );
};

export default Stopwatch_page;
