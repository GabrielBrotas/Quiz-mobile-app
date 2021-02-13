import React, { useEffect } from "react";
import { useStopwatch } from "./customHooks";

import {
  Timer,
  Wrap
} from './styles'

interface StopWatchProps {
  setIsTimeOut: Function
}
const StopWatch: React.FC<StopWatchProps> = ({ setIsTimeOut }) => {
  const {
    elapsedTime,
    startTimer,
  } = useStopwatch();

  useEffect(() => {
    startTimer();
  }, [])

  useEffect(() => {
    if(elapsedTime === '0:00') {
      setIsTimeOut(true)
    }
  }, [elapsedTime])

  return (
    <Wrap>
      <Timer>{elapsedTime}</Timer>
    </Wrap>
  );
};

export default StopWatch;
