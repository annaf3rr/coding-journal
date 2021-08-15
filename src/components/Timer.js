import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState();

  function Toggle() {
    setIsActive(!isActive);
  }
  function Reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  return (
    <div>
      <label>Timer: {seconds}</label>
      <button onClick={Toggle}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={Reset}>RESET</button>
    </div>
  );
};
export default Timer;
