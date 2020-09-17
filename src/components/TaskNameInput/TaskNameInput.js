import React, { useState, useEffect, useCallback } from 'react'

import { Input } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'
import { setTaskName } from '../../redux/app-reducer'

import debounce from '../../utils/debounce'

const TaskNameInput = () => {
  const taskName = useSelector((state) => state.taskName)
  const dispatch = useDispatch()

  const [value, setValue] = useState(taskName)

  const debouncedDispatch = useCallback(
    debounce((nextValue) => {
      dispatch(setTaskName(nextValue))
    }, 400),
    []
  )

  useEffect(() => {
    setValue(taskName)
  }, [taskName])

  const handleInputChange = (e) => {
    const nextValue = e.target.value
    setValue(nextValue)
    debouncedDispatch(nextValue)
  }
  return (
    <Input
      value={value}
      onChange={handleInputChange}
      placeholder="Name of your task"
    />
  )
}

export default TaskNameInput
