import {RECEIVE_QUESTIONS} from '../actions/question_actions';

const questionReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}

export default questionReducer;
