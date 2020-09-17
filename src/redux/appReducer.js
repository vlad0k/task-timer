const SET_TASKS = 'SET-TASKS'
const SET_TASK_NAME = 'SET-TASK-NAME'
const START_TIMER = 'START_TIMER'
const STOP_TIMER = 'STOP_TIMER'
const DELETE_TASK = 'DELETE_TASK'

const initialState = {
  startTime: null,
  taskName: null,
  tasks: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return {
        ...state,
        tasks: action.tasks,
      }
    }
    case SET_TASK_NAME: {
      return {
        ...state,
        taskName: action.taskName,
      }
    }

    case START_TIMER: {
      return {
        ...state,
        startTime: action.startTime,
      }
    }

    case STOP_TIMER: {
      return {
        ...state,
        startTime: null,
        taskName: '',
        tasks: [...state.tasks, action.newTask],
      }
    }

    case DELETE_TASK: {
      return {
        ...state,
        startTime: null,
        taskName: '',
        tasks: state.tasks.filter((t) => t.startTime !== action.startTime),
      }
    }

    default: {
      return { ...state }
    }
  }
}

export const setTasks = (tasks) => ({ type: SET_TASKS, tasks })

export const setTaskName = (taskName) => ({ type: SET_TASK_NAME, taskName })

export const startTimer = () => ({ type: START_TIMER, startTime: Date.now() })

export const stopTimer = (newTask) => ({ type: STOP_TIMER, newTask })

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  startTime: task.startTime,
})
