import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
    // applyMiddleware(thunk, logger())
  )
);

export default configureStore;
