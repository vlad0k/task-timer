import React from 'react'
import style from './Clock.module.css'

import { createTimer, msToHMS } from '../../utils/timerUtils'

const Clock = ({ startTime, timer, setTimer }) => {
  createTimer(startTime, timer.id, setTimer)

  const { hours, minutes, seconds } = msToHMS(timer.time)

  return (
    <div className={style.Clock}>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  )
}

export default Clock
