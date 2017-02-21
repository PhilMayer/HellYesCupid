import * as APIUtil from '../util/thread_api_util';

export const RECEIVE_THREADS = "RECEIVE_THREADS";

export const fetchThreads = () => (dispatch) => {
  return APIUtil.fetchThreads()
    .then((threads) => dispatch(receiveThreads(threads)));
};

const receiveThreads = (threads) => ({
  type: RECEIVE_THREADS,
  threads
});
