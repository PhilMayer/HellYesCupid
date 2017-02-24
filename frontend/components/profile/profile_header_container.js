import React from 'react';
import {connect} from 'react-redux';
import ProfileHeader from './profile_header';
import {updateUser} from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';
import {createThread} from '../../actions/thread_actions';

const mapStateToProps = ({session: {currentUser}, lover}) => {
  const ownProfile = (lover.id === currentUser.id);

  return {
    ownProfile,
    id: lover.id,
    age: lover.age,
    gender: lover.gender,
    ownId: currentUser.id,
    location: lover.zipcode,
    username: lover.username,
    profile_pic: lover.image_url,
    currentUser,
    lover
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    createChat: (chat) => dispatch(createThread(chat)),
    updateUser: (id, user) => dispatch(updateUser(id, user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
