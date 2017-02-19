import {RECEIVE_MATCHES} from '../actions/user_actions';

const matchesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_MATCHES:
      return action.matches;
    default:
      return state;
  }
};

export default matchesReducer;
