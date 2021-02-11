import React from 'react';
import ReactDOM from 'react-dom';
import {Toggle} from './toggle/toggle';
import {Tab} from './tab/tab';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Toggle />
    <Tab />
  </React.StrictMode>,
  document.getElementById('root')
);
