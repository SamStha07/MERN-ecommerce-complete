import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// if user is not logged in it will show the login page
// if user having account and user is not admin then it will not let login because of our backend login api
// if user is admin then after logged in, token will be stored in localStorage and can let access every page in aour admin dashboard

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        // gets the token from login api
        const token = window.localStorage.getItem('token');
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={'/login'} />;
        }
      }}
    />
  );
}
