import React from 'react';
import ProfileQuestions from './profile_questions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps)(ProfileQuestions);
