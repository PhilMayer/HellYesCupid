import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";

export const fetchMatches = () => (dispatch) => {
    return APIUtil.fetchUsers()
      .then((matches) => dispatch(receiveMatches(matches)));
};

export const fetchUser = (id) => (dispatch) => {
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
