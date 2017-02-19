import {RECEIVE_USER, RECEIVE_MATCHES} from '../actions/user_actions';

const loverReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return action.lover;
    // case RECEIVE_MATCHES:
    //   return action.matches;
    default:
      return state;
  }
};

export default loverReducer;
