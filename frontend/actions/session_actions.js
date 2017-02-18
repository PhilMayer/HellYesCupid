export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = user => dispatch => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
};


export const updateUser = (id, user) => (dispatch) => {
  return APIUtil.updateUser(id, user)
    .then(user => dispatch(receiveCurrentUser(user)));
};


export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(dispatch(receiveCurrentUser(null)));
};

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
