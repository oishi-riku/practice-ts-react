import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Toggle} from './toggle/toggle';
import {Tab} from './tab/tab';
import {Todo} from './todo/todo';
import {App} from './tutorial/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Toggle /> */}
    {/* <Tab /> */}
    {/* <Todo /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
