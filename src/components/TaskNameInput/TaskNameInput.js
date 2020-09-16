import React from 'react';

import { Input } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'
import { setTaskName } from '../../redux/app-reducer'

const TaskNameInput = () => {

    const taskName = useSelector( state => state.taskName)
    const dispatch = useDispatch()

    const handleInputChange = event => dispatch(setTaskName(event.target.value))

    return (
        <Input 
            value={ taskName } 
            onChange={ handleInputChange } 
            placeholder="Name of your task" 
        />
    );
}

export default TaskNameInput;
