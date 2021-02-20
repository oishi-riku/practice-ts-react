import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {Toggle} from './toggle/toggle';
import {Tab} from './tab/tab';
import {Todo} from './todo/todo';
import {App} from './tutorial/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <p>テスト</p>
        <Link to="/toggle/">トグル</Link>
        <Link to="/toggle/tab/">タブ</Link>
        <Link to="/todo/">TODO</Link>
        <Link to="/app/">三目並べ</Link>
        <Route path="/toggle/">
            <Toggle />
            <Route path="/toggle/tab/">
                <Tab />
            </Route>
        </Route>
        <Route path="/todo/" component={Todo} />
        <Route path="/app/" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
