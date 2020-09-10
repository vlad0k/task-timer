import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setStartTime, setTasks, setTaskName} from './redux/reducers'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper, AppBar } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {
  useLocation,
  Route
} from "react-router-dom"


import Clock from './components/Clock/Clock'
import Logs from './components/Logs/Logs';
import Chart from './components/Chart/Chart';
import Info from './components/Info/Info';

const App = () => {
  const [timer, setTimer] = useState({})
  const {pathname: path} = useLocation()
  const [tabsValue, setTabsValue] = useState(path === '/chart' ? 1 : 0)
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleTabsChange = (event, newValue) => {
    const routerValues = ['/logs', '/chart']
    history.push(routerValues[newValue])
    setTabsValue(newValue)
  }

  const { startTime, tasks, taskName } = state;
  
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

  const getRandom = (min, max) => (Math.floor(Math.random() * (max - min) ) + min)

  const generateTasks = () => {
    const todayDate = (new Date( (new Date()).toDateString() )).getTime()
    console.log(todayDate);
    const quantity = getRandom(10, 15)

    let startTime = 0
    const newTasks = [] 

    while (newTasks.length < quantity) {
      startTime = todayDate + getRandom(0, 22.5 * 3600000)
      newTasks.push({startTime})
      newTasks.filter((t, i) => (newTasks.indexOf(t) === i))
      newTasks.sort(function (a, b) {
        if (a.startTime > b.startTime) {
          return 1;
        }
        if (a.startTime < b.startTime) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      startTime = newTasks[newTasks.length - 1].startTime + 10 * 60000 
    }

    for (let i = 0; i < quantity; i++ ) {
      // const startTime = getRandom(0, 22.5 * 3600000)
      
      let maxLengthOfTask;
      if (i === quantity - 1) {
        maxLengthOfTask = 90 * 60000
      } else {
        if ( newTasks[i + 1].startTime - newTasks[i].startTime < 90 * 60000) {
          maxLengthOfTask = newTasks[i + 1].startTime - newTasks[i].startTime 
        } else {
          maxLengthOfTask = 90 * 60000
        }
      }
      
      const endTime = getRandom(10 * 60000, maxLengthOfTask)

      newTasks[i] = {
        ...newTasks[i],
        taskName: `Task ${i + 1}`,
        endTime: newTasks[i].startTime + getRandom(10 * 60000, maxLengthOfTask)
      }
  
    }

    dispatch(setTasks(newTasks))
  }

  return (
    <div className="App">
      <TextField value={taskName} onChange={(e) => dispatch(setTaskName(e.target.value))} id="standard-basic" label="Name of your task" />
      
      <Clock timer={timer.time}/>

      {!startTime && <Button onClick={startTimer}>START</Button>

      }
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
          <Button onClick={() => generateTasks()}>GENERATE</Button>
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
