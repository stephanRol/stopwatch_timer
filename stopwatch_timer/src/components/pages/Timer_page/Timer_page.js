import React from "react";
import Navbar from "../../Navbar/Navbar";
import Timer from "../../timer/Timer";

const Timer_page = () => {
  return (
    <div className="timer_page">
      <Navbar />
      <section>
        <Timer />
      </section>
    </div>
  );
};

export default Timer_page;
