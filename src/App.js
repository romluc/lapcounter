import React, { useState, useEffect } from 'react';
import ShowLaps from './ShowLaps';
import ShowTime from './ShowTime';
import Button from './Button';

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
