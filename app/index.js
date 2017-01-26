import React from 'react';
import reactDOM from 'react-dom';
// import Routes from './config/routes';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import PreCheckout from './components/PreCheckout';
import Checkout from './components/Checkout';
import './styles/materialize.css';
import * as $ from 'jquery';
import hammerjs from 'hammerjs';
import './shared/materialize';

reactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='/precheck' component={PreCheckout} />
        <Route path='/checkout' component={Checkout} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
