import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
} from '../actions/types';

const initialState = {
  token: null,
  user: {},
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    // LOGIN
    case LOGIN_REQUEST:
      return { ...state, authenticating: true, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        loading: false,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    // LOGOUT
    case LOGOUT_REQUEST:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return { ...initialState, loading: false };
    case LOGOUT_FAILURE:
      return { ...initialState, loading: false, error: action.payload.error };

    // SIGNUP
    case SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        loading: false,
      };
    case SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}
