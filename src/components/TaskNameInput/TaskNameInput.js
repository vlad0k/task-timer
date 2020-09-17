import React, { useState, useEffect } from 'react';

import { Input } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { setTaskName } from '../../redux/app-reducer';

import useDebounced from '../../hooks/useDebounced';

const TaskNameInput = () => {
  const taskName = useSelector((state) => state.taskName);
  const dispatch = useDispatch();

  const [value, setValue] = useState(taskName);

  const debouncedDispatch = useDebounced((nextValue) => dispatch(setTaskName(nextValue)), 400);

  useEffect(() => {
    setValue(taskName);
  }, [taskName]);

  const handleInputChange = (e) => {
    const nextValue = e.target.value;
    setValue(nextValue);
    debouncedDispatch(nextValue);
  };
  return <Input value={value} onChange={handleInputChange} placeholder="Name of your task" />;
};

export default TaskNameInput;
