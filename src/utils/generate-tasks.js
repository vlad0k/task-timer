const getRandom = (min, max) => (Math.floor(Math.random() * (max - min) ) + min)

const generateTasks = () => {

  const generateStartPoints = (numberOfStartPoints = getRandom(10, 15), startPoints = []) => {

    if (startPoints.length === numberOfStartPoints) return startPoints
    
    startPoints.push( Math.random() * 1440 )
    startPoints.sort( (prev, next) => (next > prev) ? -1 : 1)
    startPoints = startPoints.filter( (t, i, arr) => {
      if (i === 0) return true
      if ( (t - arr[i - 1]) < 10) return false
      if ( i === (arr.length - 1) && (1440 - t) < 10) return false
      return true
    })
    
    return generateStartPoints(numberOfStartPoints, startPoints);
  }

  const startPoints = generateStartPoints()

  const endPoints = startPoints.map((sp, i) => {
    let maxLength;
    if (i < startPoints.length -1) maxLength = (startPoints[i + 1] - sp) < 90 ? (startPoints[i + 1] - sp) : 90
    else maxLength = maxLength = 90
    return sp + getRandom(10, maxLength)
  })

  const todayDate = (new Date( (new Date()).toDateString() )).getTime()

  const tasks = startPoints.map( (sp, i) => ({
    taskName: `Task ${i + 1}`,
    startTime: todayDate + sp * 60000,
    endTime: todayDate + endPoints[i] * 60000
  }))

  return tasks
}

export default generateTasks;