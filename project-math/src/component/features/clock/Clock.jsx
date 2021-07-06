import React, { useContext, useEffect, useState } from "react";
import { DataApp } from "../../../App";

const Clock = ({ flag }) => {
  const stateGlobal = useContext(DataApp);
  const [timeDown, setTimeDown] = useState(600);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timer = timeDown;
      if (timer > 0) setTimeDown(timer - 1);
    }, 1000);
    stateGlobal.setTimerOclock(timeDown)
    return () => {
      clearInterval(timeInterval);
    };
  }, [timeDown]);



  return <>{stateGlobal.seconds_to(timeDown)}</>;
};

export default Clock;
