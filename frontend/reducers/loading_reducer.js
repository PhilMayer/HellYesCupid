import {RECEIVE_USER, START_LOADING_USER} from '../actions/user_actions.js';

const loadingReducer = (state = false, action) => {
  // Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return false;
    case START_LOADING_USER:
      return true;
    default:
      return state;
  }
}

export default loadingReducer;
