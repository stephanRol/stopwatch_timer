import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="stopwatch"
      initial={{
        boxShadow: "11px 11px 22px #b8b8b8, -11px -11px 22px #bcbcbc",
      }}
      animate={{
        boxShadow: "11px 11px 22px #a4a4a4, -11px -11px 22px #d0d0d0",
      }}
      exit={({ y: 0 }, { duration: 0.1 })}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="stopwatch-box">
        <motion.div
          className="numbers"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={({ y: 0 }, { duration: 0.1 })}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span>
            {Math.floor((time / (1000 * 60 * 60)) % 24)
              .toString()
              .padStart(2, "0")}
          </span>
          :
          <span>
            {Math.floor((time / (1000 * 60)) % 60)
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
        </motion.div>
        <div className="buttons">
          {timeOn ? (
            <button
              onClick={() => {
                setTimeOn(false);
              }}
            >
              Stop
            </button>
          ) : (
            <motion.button
              onClick={() => {
                setTimeOn(true);
              }}
              initial={{
                background: "#bababa",
                boxShadow: "11px 11px 22px #b8b8b8, -11px -11px 22px #bcbcbc",
              }}
              animate={{
                background: "#bababa",
                boxShadow: "11px 11px 22px #a4a4a4, -11px -11px 22px #d0d0d0",
              }}
              exit={({ y: 0 }, { duration: 0.1 })}
              transition={{ duration: 0.8, delay: 1, ease: "easeIn" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={({ y: 0 }, { duration: 0.1 })}
                transition={{ duration: 0.3, delay: 1.5, ease: "easeIn" }}
              >
                Start
              </motion.div>
            </motion.button>
          )}
          <motion.button
            onClick={() => {
              setTime(0);
            }}
            initial={{
              background: "#bababa",
              boxShadow: "11px 11px 22px #b8b8b8, -11px -11px 22px #bcbcbc",
            }}
            animate={{
              background: "#bababa",
              boxShadow: "11px 11px 22px #a4a4a4, -11px -11px 22px #d0d0d0",
            }}
            exit={({ y: 0 }, { duration: 0.1 })}
            transition={{ duration: 0.8, delay: 1, ease: "easeIn" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={({ y: 0 }, { duration: 0.1 })}
              transition={{ duration: 0.3, delay: 1.5, ease: "easeIn" }}
            >
              Reset
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Stopwatch;
