import {RECEIVE_USER, RECEIVE_MATCHES} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const loverReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return action.lover;
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default loverReducer;
