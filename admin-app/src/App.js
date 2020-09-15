import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Homepage from './containers/Homepage';
import Login from './containers/Login';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn } from './actions/index';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

function App(props) {
  // acts as componentDidMount for hooks
  useEffect(() => {
    props.isUserLoggedIn();
  });

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <PrivateRoute path="/" exact component={Homepage} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/orders" exact component={Orders} />
        <PrivateRoute path="/category" exact component={Category} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </div>
  );
}

export default connect(null, { isUserLoggedIn })(App);
