import React from 'react';
import ProfileQuestions from './profile_questions';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = ({session: {currentUser}, lover}) => {
  const profile = lover.id === currentUser.id ? currentUser : lover

  return {
    currentUser: currentUser.id,
    // id: lover.id,
    questions: {
      summary: profile.summary,
    doing_with_life: profile.doing_with_life,
    really_good_at: profile.really_good_at,
    favorite_things: profile.favorite_things,
    six_things: profile.six_things,
    think_about: profile.think_about,
    typical_friday: profile.typical_friday,
    message_me_if: profile.message_me_if}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, user) => dispatch(updateUser(id, user)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileQuestions);
