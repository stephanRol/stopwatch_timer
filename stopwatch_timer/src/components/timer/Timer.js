import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        if (time === 0) {
          setMessage(true);
          clearInterval(interval);
        } else {
          setTime((prevTime) => prevTime - 10);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearTimeout(interval);
  }, [timeOn, time]);

  const presetTime = () => {
    setTime(hours * 1000 * 60 * 60 + minutes * 1000 * 60 + seconds * 1000);
    setMessage(false);
  };

  return (
    <>
      <h2>Timer</h2>
      {time === 0 && message === false ? (
        <>
          <input
            type="number"
            name="hours"
            value={hours}
            onChange={(e) => {
              setHours(e.target.value);
            }}
            placeholder="hours"
            min="0"
            max="59"
            required
          />
          <input
            type="number"
            name="minutes"
            value={minutes}
            onChange={(e) => {
              setMinutes(e.target.value);
            }}
            placeholder="minutes"
            min="0"
            max="59"
            required
          />
          <input
            type="number"
            name="seconds"
            value={seconds}
            onChange={(e) => {
              setSeconds(e.target.value);
            }}
            placeholder="seconds"
            min="0"
            max="59"
            required
          />
        </>
      ) : time === 0 ? (
        <p>Time is out!</p>
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
          .<span>{Math.floor((time / 100) % 10).toString()}</span>,
          <span>{Math.floor((time / 10) % 10).toString()}</span>
        </div>
      )}

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
    </>
  );
};

export default Timer;
