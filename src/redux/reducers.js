const SET_TIMER_INTERVAL = 'SET-TIMER-INTERVAL'
const SET_START_TIME = 'SET-START-TIME'
const SET_TIME = 'SET-TIME'
const SET_TASKS = 'SET-TASKS'
const SET_TASK_NAME = 'SET-TASK-NAME'

const initialState = {
    startTime: null,
    time: ['00','00','00'],
    taskName: '',
    taskInterval: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TIMER_INTERVAL: {
            return {
                ...state,
                taskInterval: action.taskInterval
            }
        }
        case SET_START_TIME: {
            return {
                ...state,
                startTime: action.startTime
            }
        }
        case SET_TIME: {
            return {
                ...state,
                time: action.time
            }
        }
        case SET_TASKS: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case SET_TASK_NAME: {
            return {
                ...state,
                taskName: action.taskName
            }
        }

        default: {
            return { ...state }
        }
    }
}

export const setTimerInterval = (taskInterval) => ({type: SET_TIMER_INTERVAL, taskInterval})

export const setStartTime = (startTime) => ({type: SET_START_TIME, startTime})

export const setTime = (time) => ({type: SET_TIME, time})

export const setTasks = (tasks) => ({type: SET_TASKS, tasks})

export const setTaskName = (taskName) => ({type: SET_TASK_NAME, taskName})