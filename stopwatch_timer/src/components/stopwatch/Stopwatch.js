import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    } else {
      clearInterval(interval);
    }
    return () => clearTimeout(interval);
  }, [timeOn]);

  return (
    <div>
      <h2>stopwatch</h2>
      <div className="numbers">
        <span>
          {Math.floor((time / 100000) % 24)
            .toString()
            .padStart(2, "0")}
        </span>
        :
        <span>
          {Math.floor((time / 10000) % 60)
            .toString()
            .padStart(2, "0")}
        </span>
        :
        <span>
          {Math.floor((time / 1000) % 60)
            .toString()
            .padStart(2, "0")}
        </span>
        .<span>{Math.floor((time / 100) % 10).toString()}</span>,
        <span>{Math.floor((time / 10) % 10).toString()}</span>
      </div>
      <button
        onClick={() => {
          setTimeOn(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setTimeOn(false);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
