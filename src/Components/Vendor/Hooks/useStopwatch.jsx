import { useState, useRef } from "react";
import { StopwatchTime } from "./StopwatchTime";

const useStopwatchHook = (fromTime) => {
  const [miltime, setmiltime] = useState(fromTime);

  let ref = useRef(null);

  const start = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setmiltime((prev) => {
          return prev + 1000;
        });
      }, 1000);
    }

    // settime(`${obj.hr}:${obj.min}:${obj.sec}`);
  };
  const pause = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  const reset = () => {
    clearInterval(ref.current);
    setmiltime(0);
  };
  let time = StopwatchTime(miltime);

  return { time, start, pause, reset };
};

export default useStopwatchHook;
