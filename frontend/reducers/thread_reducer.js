import {RECEIVE_THREADS} from '../actions/thread_actions';

const threadReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_THREADS:
      return action.threads;
    default:
      return state;
  }
};

export default threadReducer;
