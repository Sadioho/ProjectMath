import React, { useContext, useEffect, useState } from "react";
import { DataApp } from "../../../App";
import { format_second_to_minutes } from "../../../helpers";

const Clock = (props) => {
  const stateGlobal = useContext(DataApp);
  const [timeDown, setTimeDown] = useState(2700);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timer = timeDown;

      if (timer > 0) setTimeDown(timer - 1);
    }, 1000);

    stateGlobal.setTimeCountDown(timeDown);

    if (timeDown === 0) {
      props.handleFinishV2();
      stateGlobal.setTimePause(0)
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [timeDown]);

  return <>{format_second_to_minutes(timeDown)}</>;
};

export default Clock;
