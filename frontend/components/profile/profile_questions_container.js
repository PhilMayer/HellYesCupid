import React from 'react';
import ProfileQuestions from './profile_questions';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/session_actions';

const mapStateToProps = ({session: {currentUser}, lover}) => {
  return {
    currentUser: currentUser.id,
    // id: lover.id,
    summary: lover.summary,
    doing_with_life: lover.doing_with_life,
    really_good_at: lover.really_good_at,
    favorite_things: lover.favorite_things,
    six_things: lover.six_things,
    think_about: lover.think_about,
    typical_friday: lover.typical_friday,
    message_me_if: lover.message_me_if
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, user) => dispatch(updateUser(id, user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileQuestions);
