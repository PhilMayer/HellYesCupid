import {combineReducers} from 'redux';
import LoverReducer from './lover_reducer';
import MatchesReducer from './matches_reducer';
import SessionReducer from './session_reducer';
import QuestionReducer from './question_reducer';

const rootReducer = combineReducers({
  lover: LoverReducer,
  matches: MatchesReducer,
  session: SessionReducer,
  questions: QuestionReducer
});

export default rootReducer;
