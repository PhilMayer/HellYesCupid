import React from 'react';
import ProfileQuestions from './profile_questions';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/session_actions';

const mapStateToProps = ({session: {currentUser}}) => {
  return {
    id: currentUser.id,
    summary: currentUser.summary,
    doing_with_life: currentUser.doing_with_life,
    really_good_at: currentUser.really_good_at,
    favorite_things: currentUser.favorite_things,
    six_things: currentUser.six_things,
    think_about: currentUser.think_about,
    typical_friday: currentUser.typical_friday,
    message_me_if: currentUser.message_me_if
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, user) => dispatch(updateUser(id, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileQuestions);
