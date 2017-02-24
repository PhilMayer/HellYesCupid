import React from 'react';
import ProfileQuestionsItem from './profile_questions_item';

class ProfileQuestions extends React.Component {

  // componentDidMount () {
  //   this.props.fetchUser(this.props.currentUser);
  // }

  componentWillReceiveProps (newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.fetchUser(newProps.params.id);
    }
  }

  render () {
    let questionTitles = Object.keys(this.props.questions);
    const questionsAndResponses = questionTitles.map((question, idx) => (
      <li key={idx}>
        <ProfileQuestionsItem
          question={question}
          id={this.props.currentUser}
          response={this.props.questions[question]}
          updateUser={this.props.updateUser}/>
      </li>
    )
  );

  return (
    <ul className="profile-questions">
      {questionsAndResponses}
    </ul>
  );

  }
}


export default ProfileQuestions;
