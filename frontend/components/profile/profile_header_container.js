import React from 'react';
import ProfileHeader from './profile_header';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/session_actions';

const mapStateToProps = ({session: {currentUser}}) => {
  return {
    id: currentUser.id,
    username: currentUser.username,
    gender: currentUser.gender,
    age: currentUser.age,
    location: currentUser.zipcode,
    profile_pic: currentUser.image_url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, user) => dispatch(updateUser(id, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
