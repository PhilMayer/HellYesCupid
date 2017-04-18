import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";
export const START_LOADING_USER = "START_LOADING_USER";

export const fetchMatches = (params) => (dispatch) => {
    return APIUtil.fetchUsers(params)
      .then((matches) => dispatch(receiveMatches(matches)));
};

export const fetchUser = (id) => (dispatch) => {
  dispatch(startLoadingUser());
  return APIUtil.fetchUser(id)
    .then((lover) => dispatch(receiveUser(lover)));
};

const receiveMatches = (matches) => ({
    type: RECEIVE_MATCHES,
    matches
});

const receiveUser = (lover) => ({
  type: RECEIVE_USER,
  lover
});

const startLoadingUser = () => ({
  type: START_LOADING_USER
});
