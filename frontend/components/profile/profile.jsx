import React from 'react';
import ProfileHeaderContainer from './profile_header_container';
import ProfileQuestionsContainer from './profile_questions_container';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <ProfileHeaderContainer/>
        <ProfileQuestionsContainer />
      </div>
    );
  }
}

export default Profile;
