import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setStartTime, setTasks, setTaskName} from './redux/reducers'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {
  useLocation,
  Route
} from "react-router-dom"


import Clock from './components/Clock/Clock'
import Logs from './components/Logs/Logs';
import Chart from './components/Chart/Chart';
import Info from './components/Info/Info';

const getRandom = (min, max) => (Math.floor(Math.random() * (max - min) ) + min)

export const generateTasks = () => {

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


const App = () => {
  const [timer, setTimer] = useState({})
  const {pathname: path} = useLocation()
  const [tabsValue, setTabsValue] = useState(path === '/chart' ? 1 : 0)
  const { startTime, tasks, taskName } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleTabsChange = (event, newValue) => {
    const routerValues = ['/logs', '/chart']
    history.push(routerValues[newValue])
    setTabsValue(newValue)
  }
  
  if (startTime && !timer.id) {
    const timerId = setInterval(() => {
      const time = Date.now() - startTime
      setTimer(prev => ({...prev, time}))
    })
    setTimer(prev => ({...prev, id: timerId}))
  }

  const startTimer = () => {
    dispatch(setStartTime(Date.now()))
  }

  const stopTimer = () => {
    if (!taskName) {
      alert('Enter task name first!')
      return;
    }
    const task = {
      taskName,
      startTime,
      endTime: Date.now()
    }
    const newTasks = tasks ? [ ...tasks, task ] : [ task ];
    window.clearInterval(timer.id)
    setTimer({})
    dispatch(setStartTime(null))
    dispatch(setTasks(newTasks))
    dispatch(setTaskName(''))
  }

  const deleteTask = (task) => {
    const newTasks = tasks.filter(t => t.startTime !== task.startTime)
    dispatch(setTasks(newTasks))
  }

  return (
    <div className="App">
      <TextField value={taskName} onChange={(e) => dispatch(setTaskName(e.target.value))} id="standard-basic" label="Name of your task" />
      
      <Clock timer={timer.time}/>

      {!startTime && <Button onClick={startTimer}>START</Button>}
      {startTime && <Button onClick={stopTimer}>STOP</Button>}
  
      <AppBar position="static" color='primary'>
        <Tabs
          value={tabsValue}
          onChange={handleTabsChange}
          aria-label="disabled tabs example"
          variant="fullWidth"
        >
          <Tab label="TASKS LOG" />
          <Tab label="TASKS CHART" />
        </Tabs>
      </AppBar>
      
      {tabsValue === 0 && <>
        <Logs tasks={tasks} deleteTask={deleteTask}/>
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
          <Button onClick={() => {
            const newTasks = generateTasks()
            dispatch(setTasks(newTasks))
          }}>GENERATE</Button>
        </div>
      </>}
      {tabsValue === 1 && <Chart tasks={tasks} />}

      <Route path="/tasks/:id">
        <Info tasks={ tasks } deleteTask={deleteTask}/>
      </Route>
      
    </div>
  );
}

export default App;
