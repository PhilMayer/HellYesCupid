import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.fetchUser(id)
    .then((lover) => dispatch(receiveUser(lover)));
};

const receiveUser = (lover) => ({
  type: RECEIVE_USER,
  lover
});
