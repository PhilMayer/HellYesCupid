import * as APIUtil from '../util/thread_api_util';

export const RECEIVE_THREAD = "RECEIVE_THREAD";
export const RECEIVE_THREADS = "RECEIVE_THREADS";

export const fetchThreads = () => (dispatch) => {
  return APIUtil.fetchThreads()
    .then((threads) => dispatch(receiveThreads(threads)));
};

export const fetchThread = (id) => (dispatch) => {
  return APIUtil.fetchThread(id)
    .then((thread) => dispatch(receiveThread(thread)));
};

export const createThread = (thread) => (dispatch) => {
  return APIUtil.createThread(thread)
    .then((thread) => dispatch(receiveThread(thread)));
};

const receiveThreads = (threads) => ({
  type: RECEIVE_THREADS,
  threads
});

const receiveThread = (thread) => ({
  type: RECEIVE_THREAD,
  thread
});
