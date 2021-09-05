import React from "react";
import Navbar from "../../Navbar/Navbar";
import Stopwatch from "../../stopwatch/Stopwatch";

const Stopwatch_page = () => {
  return (
    <div className="stopwatch_page">
      <Navbar />
      <section>
        <Stopwatch />
      </section>
    </div>
  );
};

export default Stopwatch_page;
