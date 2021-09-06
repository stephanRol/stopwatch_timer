import React, { useState, useEffect } from "react";
import alarmSound from "../../assets/alarm.wav";

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
    <div className="timer">
      <div className="timer-box">
        {time === 0 && message === false ? (
          <div className="inputs">
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
          </div>
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
            {/* .<span>{Math.floor((time / 100) % 10).toString()}</span>,
            <span>{Math.floor((time / 10) % 10).toString()}</span> */}
          </div>
        )}

        <div className="buttons">
          {time === 0 ? (
            message === false ? (
              <button onClick={presetTime}>Set Time</button>
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
    </div>
  );
};

export default Timer;
