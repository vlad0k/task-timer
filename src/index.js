import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router basename={'/task-timer'}>
      <App />
    </Router>
  </Provider>
    
    ,
  document.getElementById('root')
);

