import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = ({session: {currentUser}, loading}) => {
  return {
    ownId: currentUser.id,
    loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
