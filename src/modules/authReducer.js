import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actionTypes";

const initialState = {
  token: null,
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, token: null, isAuthenticated: false };
    case LOGOUT:
      return { ...state, token: null, isAuthenticated: false };
    default:
      return state;
  }
}
