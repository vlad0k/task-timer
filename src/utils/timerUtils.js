export const createTimer = (startTime = null, timerId, setTimer) => {
  if (startTime && !timerId) {
    const timerId = setInterval(() => {
      const time = Date.now() - startTime
      setTimer((prev) => ({ ...prev, time }))
    })
    setTimer((prev) => ({ ...prev, id: timerId }))
  }
}

export const msToHMS = (timer = 0) => {
  let milliseconds = parseInt((timer % 1000) / 100),
    seconds = parseInt((timer / 1000) % 60),
    minutes = parseInt((timer / (1000 * 60)) % 60),
    hours = parseInt((timer / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? `0${hours}` : hours
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds

  return { hours, minutes, seconds, milliseconds }
}
