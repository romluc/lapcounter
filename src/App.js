import React, { useState, useEffect } from 'react';

const ShowLaps = props => {
  const lapsStr = props.laps < 10 ? `0${props.laps}` : props.laps;
  return (
    <p>
      {lapsStr}
      <br />
      laps
    </p>
  );
};

const ShowTime = props => {
  const time = props.time;
  const minutes = Math.round(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <p>
      {`${minutesStr}:${secondsStr}`} <br />
      Average time per lap
    </p>
  );
};

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

function App() {
  const [numLaps, setNumLaps] = useState(0);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    setNumLaps(numLaps + 1);
  };

  const decrement = () => {
    setNumLaps(numLaps - 1);
  };

  const reset = () => {
    setNumLaps(0);
    setTime(0);
  };

  return (
    <div>
      <ShowLaps laps={numLaps} />
      <Button text='+' onClick={increment} />
      <Button text='-' onClick={decrement} />
      {numLaps > 0 && <ShowTime time={Math.round(time / numLaps)} />}
      <Button text='Start' onClick={toggleRunning} />
      <Button text='Restart' onClick={reset} />
    </div>
  );
}

export default App;
