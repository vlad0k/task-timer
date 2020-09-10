import React from 'react'
import style from './Clock.module.css'

const formatTimer = timer => {
    let milliseconds = parseInt((timer%1000)/100)
        , seconds = parseInt((timer/1000)%60)
        , minutes = parseInt((timer/(1000*60))%60)
        , hours = parseInt((timer/(1000*60*60))%24)

    hours = (hours < 10) ? `0${hours}` : hours
    minutes = (minutes < 10) ? `0${minutes}` : minutes
    seconds = (seconds < 10) ? `0${seconds}` : seconds

    return {hours, minutes, seconds, milliseconds}
}

const Clock = ({timer = 0}) => {
    const { hours, minutes, seconds } = formatTimer(timer)
    return (
        <div className={style.Clock}>
            <span>{hours}:{minutes}:{seconds}</span>
        </div>
    );
}

export default Clock;