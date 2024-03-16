import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      console.log("CLEARING TIMEOUT");
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("SETTING INTERVAL");
      setRemainingTime((prevState) => prevState - 10);
    }, 10);

    return () => {
      console.log("CLEARING INTERVAL");
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timeout} className={mode}></progress>
  );
};

export default QuestionTimer;
