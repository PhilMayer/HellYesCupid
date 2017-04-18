import {combineReducers} from 'redux';
import ChatReducer from './chat_reducer';
import LoverReducer from './lover_reducer';
import ThreadReducer from './thread_reducer';
import LoadingReducer from './loading_reducer';
import MatchesReducer from './matches_reducer';
import SessionReducer from './session_reducer';
import QuestionReducer from './question_reducer';

const rootReducer = combineReducers({
  chat: ChatReducer,
  lover: LoverReducer,
  threads: ThreadReducer,
  matches: MatchesReducer,
  loading: LoadingReducer,
  session: SessionReducer,
  questions: QuestionReducer
});

export default rootReducer;
