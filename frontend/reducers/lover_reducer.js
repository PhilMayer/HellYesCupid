import {RECEIVE_USER} from '../actions/user_actions';

const loverReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return action.lover;
    default:
      return state;
  }
};

export default loverReducer;
