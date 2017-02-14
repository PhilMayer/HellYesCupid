
import React from 'react';
import {connect} from 'react-redux';
import {signup, login, receiveErrors} from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.session.currentUser ? true : false;
  let formType;
  if(ownProps.formType) {
    formType = ownProps.formType;
  } else {
    formType = 'login';
  }

  let errors;
  if(state.session.errors){
    errors = Object.keys(state.session.errors).map(key => state.session.errors[key]);
  }
  return {
    loggedIn,
    errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType ? signup : login;

  return {
    processForm: (user) => dispatch(action(user)),
    // clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
