import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    username: state.session.currentUser.username,
    gender: state.session.currentUser.gender,
    age: state.session.currentUser.age,
    zipcode: state.session.currentUser.zipcode,
    min_age: state.session.currentUser.min_age,
    max_age: state.session.currentUser.max_age,
    profile_pic: state.session.currentUser.profile_pic,
    summary: state.session.currentUser.summary,
    doing_with_life: state.session.currentUser.doing_with_life,
    really_good_at: state.session.currentUser.really_good_at,
    favorite_things: state.session.currentUser.favorite_things,
    six_things: state.session.currentUser.six_things,
    think_about: state.session.currentUser.think_about,
    typical_friday: state.session.currentUser.typical_friday,
    message_me_if: state.session.currentUser.message_me_if
  }
}

export default connect(mapStateToProps)(Profile);
