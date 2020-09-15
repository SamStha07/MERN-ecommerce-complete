import axios from '../helpers/axios';

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
} from './types';

export const login = (user) => {
  return async function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const response = await axios.post('/admin/login', { ...user });

    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem('token', token); // save
      localStorage.setItem('user', JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response.data, token },
      });
    }
    if (response.status === 401) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: response.data.error },
      });
    }
  };
};

export const signup = (user) => {
  return async function (dispatch) {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    const response = await axios.post('/admin/signup', { ...user });

    if (response.status === 201) {
      const { token } = response.data;
      localStorage.setItem('token', token); // save
      localStorage.setItem('user', JSON.stringify(user));

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { token, user: response.data },
      });
    }
    if (response.status === 401) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: { error: response.data.error },
      });
    }
  };
};

// to check if user is logged in or not
export const isUserLoggedIn = () => {
  return async function (dispatch) {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          error: 'Login required',
        },
      });
    }
  };
};

export const logout = () => {
  return async function (dispatch) {
    dispatch({ type: LOGOUT_REQUEST });

    const response = await axios.post('/admin/logout');

    if (response.status === 200) {
      localStorage.clear();
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGOUT_FAILURE,
        payload: { error: response.data.error },
      });
    }
  };
};
