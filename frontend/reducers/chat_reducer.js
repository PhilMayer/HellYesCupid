import {RECEIVE_THREAD} from '../actions/thread_actions';

const chatReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_THREAD:
      return action.thread;
    default:
      return state;
  }
};

export default chatReducer;
