import React, { useContext, useEffect, useState } from "react";
import { DataApp } from "../../../App";

const Clock = (props) => {
  const stateGlobal = useContext(DataApp);
  const [timeDown, setTimeDown] = useState(2700);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timer = timeDown;

      if (timer > 0) setTimeDown(timer - 1);
    }, 1000);

    stateGlobal.setTimeCountDownV2(timeDown);

    if (timeDown === 0) {
      props.handleFinishV2();
      stateGlobal.setTimePauseV2(0)
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [timeDown]);

  return <>{stateGlobal.seconds_to(timeDown)}</>;
};

export default Clock;
