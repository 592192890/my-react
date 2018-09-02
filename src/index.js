import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import App from './App';
import Login from './login/Login';
import Consult from './consult/Consult';
import Announce from './announce/Announce';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="login" component={Login}/>
            <Route path="consult" component={Consult}/>
            <Route path="announce" component={Announce}/>
        </Route>
    </Router>,
  document.getElementById('root')
);

