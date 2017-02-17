import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import QuestionReducer from './question_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionReducer
});

export default rootReducer;
