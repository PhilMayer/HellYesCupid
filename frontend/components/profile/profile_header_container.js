import React from 'react';
import ProfileHeader from './profile_header';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = ({session: {currentUser}, lover}) => {

  return {
    username: lover.username,
    gender: lover.gender,
    age: lover.age,
    location: lover.zipcode,
    profile_pic: lover.image_url
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, user) => dispatch(updateUser(id, user)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
