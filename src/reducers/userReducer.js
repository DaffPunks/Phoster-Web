import {
  SET_TOKEN,
} from '../actions/user';

const initialState = {
  isLoggedIn: false,
  token: ''
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      state.isLoggedIn = true;
      state.token = action.token;
      return state;
    default:
      return state
  }
}
