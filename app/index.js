import React from 'react';
import reactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import PreCheckout from './components/PreCheckout';
import Checkout from './components/Checkout';
import * as $ from 'jquery';
import hammerjs from 'hammerjs';
import './styles/main.css';
import './styles/checkout.css';
import './styles/cartItem.css';
import './components/Product/Product.css';
// require("./stylesheet.css");

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
