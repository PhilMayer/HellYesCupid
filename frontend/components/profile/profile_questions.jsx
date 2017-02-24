import React from 'react';
import ProfileQuestionsItem from './profile_questions_item';

class ProfileQuestions extends React.Component {

  componentWillReceiveProps (newProps) {

    if (newProps.params.id !== this.props.params.id) {
      this.props.fetchUser(newProps.params.id);
    }
  }

  render () {
    debugger
    let questions = Object.keys(this.props.questions);
    questions = questions.map((question, idx) => (
      <li key={idx}>
        <ProfileQuestionsItem
          question={question}
          id={this.props.currentUser}
          response={this.props.questions[question]}
          updateUser={this.props.updateUser}
          />
      </li>
    )
  );

  return (
    <ul className="profile-questions">
      {questions}
    </ul>
  );

  }
}


export default ProfileQuestions;
