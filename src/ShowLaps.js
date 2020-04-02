import React from 'react';

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

export default ShowLaps;
