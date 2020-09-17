import React, { useState } from 'react';
import './App.css';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, setTasks } from './redux/app-reducer';

// material-ui
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// react-router
import { Route } from 'react-router-dom';

// components
import Clock from './components/Clock/Clock';
import Logs from './components/Logs/Logs';
import Chart from './components/Chart/Chart';
import Info from './components/Info/Info';
import Tabs from './components/Tabs/Tabs';
import TaskNameInput from './components/TaskNameInput/TaskNameInput';
import Dialog from './components/Dialog/Dialog';

// utils
import generateTasks from './utils/generateTasks';

const App = () => {
  const [timer, setTimer] = useState({ id: null, time: null });
  const [alertIsVisible, setAlertIsVisible] = useState(false);

  const { startTime, tasks, taskName } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onStartButtonPress = () => {
    dispatch(startTimer());
  };

  const onStopButtonPress = () => {
    if (!taskName) {
      setAlertIsVisible(true);
      return;
    }

    const task = {
      taskName,
      startTime,
      endTime: Date.now(),
    };

    clearInterval(timer.id);

    setTimer({});

    dispatch(stopTimer(task));
  };

  const onGenerateButtonPress = () => {
    const newTasks = generateTasks();
    dispatch(setTasks(newTasks));
  };

  return (
    <div className="App">
      <Route path={['/', '/chart']} exact>
        <TaskNameInput />

        <Clock timer={timer} startTime={startTime} setTimer={setTimer} />

        <div style={{ paddingBottom: 12 }}>
          {!startTime && (
            <Button variant="contained" color="primary" onClick={onStartButtonPress}>
              START
            </Button>
          )}
          {startTime && (
            <Button variant="contained" color="secondary" onClick={onStopButtonPress}>
              STOP
            </Button>
          )}
        </div>
      </Route>

      <Dialog open={alertIsVisible} setVisible={setAlertIsVisible} />

      <Paper style={{ margin: 16 }}>
        <Route path="/" exact>
          <Tabs />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <Logs />

            <Button style={{ margin: 16 }} variant="outlined" onClick={onGenerateButtonPress}>
              GENERATE
            </Button>
          </div>
        </Route>

        <Route path="/chart" exact>
          <Tabs />
          <Chart tasks={tasks} />
        </Route>

        <Route path="/tasks/:id">
          <Info />
        </Route>
      </Paper>
    </div>
  );
};

export default App;
