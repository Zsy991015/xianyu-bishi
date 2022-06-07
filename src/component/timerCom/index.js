import React, { useEffect, memo, useState } from "react";
import { timer } from "../../utils";

function Index({ ExpirationTime }) {
  const [obj, setobj] = useState({});
  useEffect(() => {
    var timers = setTimeout(() => {
      setobj(timer(ExpirationTime));
      setInterval(() => {
        setobj(timer(ExpirationTime));
      }, 1000);
    });
    return () => {
      clearTimeout(timers);
    };
  }, []);

  if (typeof obj === "string") return "已结束";

  if (obj?.day && obj?.day > 0 && obj?.seconds) {
    return <div>{`${obj?.day}天${obj?.hours}小时`}</div>;
  } else if (obj?.seconds) {
    return <div>{`${obj?.hours}:${obj?.minutes}:${obj?.seconds}`}</div>;
  }
  return;
}

export default memo(Index);
