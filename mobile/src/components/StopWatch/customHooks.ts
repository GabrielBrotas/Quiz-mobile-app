import { useState, useEffect, useCallback } from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(600);

  useEffect( () => {
    let interval: any;
    interval = setInterval(
      () => setElapsedTime(prevElapsedTime => prevElapsedTime - 0.1),
      100
    );
    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    setIsRunning,
    elapsedTime,
  };
};

export const useStopwatch = () => {
  const { setIsRunning, elapsedTime } = useTimer();

  const format = useCallback( (time: number) => {
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var timeFormated = "";

    timeFormated += "" + mins + ":" + (secs < 10 ? "0" : "");
    timeFormated += "" + secs;
    return timeFormated;
  }, [])

  return {
    elapsedTime: format(elapsedTime),
    startTimer: () => setIsRunning(true),
  };
};
