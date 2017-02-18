import {RECEIVE_USER} from '../actions/user_actions';

const loverReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default loverReducer;
