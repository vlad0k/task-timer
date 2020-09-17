import { createStore, applyMiddleware } from 'redux'

import reducer from './app-reducer'

const localStorage = window.localStorage

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action)
    localStorage.setItem('applicationState', JSON.stringify(getState()))
    return result
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'))
  }
}

const store = createStore(
  reducer,
  reHydrateStore(),
  applyMiddleware(localStorageMiddleware)
)

export default store
