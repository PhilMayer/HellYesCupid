import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import QuestionReducer from './question_reducer';
import LoverReducer from './lover_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionReducer,
  lover: LoverReducer
});

export default rootReducer;
