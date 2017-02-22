
import React from 'react';
import Nav from './nav';
import {logout, login} from '../../actions/session_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
