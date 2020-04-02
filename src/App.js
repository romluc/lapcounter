import React, { useState, useEffect } from 'react';

const ShowLaps = props => {
  return (
    <p>
      {props.laps}
      <br />
      laps
    </p>
  );
};

const ShowTime = props => {
  return (
    <p>
      {props.time}
      <br />
      Average time per lap
    </p>
  );
};

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

function App() {
  const [numLaps, setNumLaps] = useState(15);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(`chamou`);
    }, 1000);
  }, []);

  const increment = () => {
    setNumLaps(numLaps + 1);
  };

  const decrement = () => {
    setNumLaps(numLaps - 1);
  };

  return (
    <div>
      <ShowLaps laps={numLaps} />
      <Button text='+' onClick={increment} />
      <Button text='-' onClick={decrement} />
      <ShowTime time={time} />
      <Button text='Start' />
      <Button text='Restart' />
    </div>
  );
}

export default App;
