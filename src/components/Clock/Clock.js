import React from 'react';
import style from './Clock.module.css';

import { msToHMS } from '../../utils/timerUtils';

const Clock = ({ time }) => {
  let { hours, minutes, seconds } = msToHMS(time);

  return (
    <div className={style.Clock}>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
};

export default Clock;
