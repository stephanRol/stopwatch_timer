import React, { useState, useEffect, Fragment } from "react";
import alarmSound from "../../assets/alarm.wav";
import { motion } from "framer-motion";

const Timer = () => {
  const [audio, setAudio] = useState(new Audio(alarmSound));
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    let interval = null;
    // let alarmInterval = null;
    if (timeOn) {
      interval = setInterval(() => {
        if (time === 0) {
          setMessage(true);
          clearInterval(interval);
          audio.play();

          // alarmInterval = setInterval(() => {
          //   audio.play();
          // }, 10000);
        } else {
          setTime((prevTime) => prevTime - 1000);
        }
      }, 1000);
    } else {
      audio.pause();
      audio.currentTime = 0;
      // clearInterval(alarmInterval);
      clearInterval(interval);
    }
    return () => clearTimeout(interval);
  }, [timeOn, time]);

  const presetTime = () => {
    setTime(hours * 1000 * 60 * 60 + minutes * 1000 * 60 + seconds * 1000);
    setMessage(false);
  };

  return (
    <motion.div
      className="timer"
      initial={{
        boxShadow: "36px 36px 72px #323232, -36px -36px 72px #343434",
      }}
      animate={{
        boxShadow: "36px 36px 73px #282828, -36px -36px 73px #3e3e3e",
      }}
      exit={({ y: 0 }, { duration: 0.1 })}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="timer-box">
        {time === 0 && message === false ? (
          <motion.div
            className="inputs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={({ y: 0 }, { duration: 0.1 })}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <input
              type="number"
              name="hours"
              value={hours}
              onChange={(e) => {
                setHours(e.target.value);
              }}
              placeholder="h"
              min="0"
              max="23"
              required
              title="Input hours"
            />
            <input
              type="number"
              name="minutes"
              value={minutes}
              onChange={(e) => {
                setMinutes(e.target.value);
              }}
              placeholder="m"
              min="0"
              max="59"
              required
              title="Input minutes"
            />
            <input
              type="number"
              name="seconds"
              value={seconds}
              onChange={(e) => {
                setSeconds(e.target.value);
              }}
              placeholder="s"
              min="0"
              max="59"
              required
              title="Input seconds"
            />
          </motion.div>
        ) : time === 0 ? (
          <p>Time is up!</p>
        ) : (
          <div className="numbers">
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
          </div>
        )}
        <div className="buttons">
          {time === 0 ? (
            message === false ? (
              <motion.button
                onClick={presetTime}
                initial={{
                  background: "#333333",
                  boxShadow: "36px 36px 72px #323232, -36px -36px 72px #343434",
                }}
                animate={{
                  background: "linear-gradient(145deg, #373737, #2e2e2e)",
                  boxShadow: "20px 20px 40px #272727, -20px -20px 40px #3f3f3f",
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
                  Set Time
                </motion.div>
              </motion.button>
            ) : (
              <button
                onClick={() => {
                  setTime(0);
                  setTimeOn(false);
                  setMessage(false);
                }}
              >
                Reset
              </button>
            )
          ) : (
            <>
              {timeOn ? (
                <button
                  onClick={() => {
                    setTimeOn(false);
                  }}
                >
                  Stop
                </button>
              ) : (
                <button
                  onClick={() => {
                    setTimeOn(true);
                  }}
                >
                  Start
                </button>
              )}
              <button
                onClick={() => {
                  setTime(0);
                  setTimeOn(false);
                  setMessage(false);
                }}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Timer;
