import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStartStopClick, startStopButtonLabel, timeLeft, timerLabel }) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  return (
    <div>
      <h4 id="timer-label">{timerLabel}</h4>
      <p id="time-left">{formattedTimeLeft}</p>
      <button id="start_stop" onClick={handleStartStopClick}>
        {startStopButtonLabel}
      </button>
    </div>
  );
};

export default TimeLeft;