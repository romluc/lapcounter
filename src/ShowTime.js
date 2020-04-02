import React from 'react';

const ShowTime = props => {
  const time = props.time;
  const minutes = Math.round(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <p>
      <span className='time'>{`${minutesStr}:${secondsStr}`} </span>
      <br />
      Average time per lap
    </p>
  );
};

export default ShowTime;
