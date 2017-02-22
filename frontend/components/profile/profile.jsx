import React from 'react';
import ProfileHeaderContainer from './profile_header_container';
import ProfileQuestionsContainer from './profile_questions_container';
import {hashHistory} from 'react-router';

class Profile extends React.Component {

  profileNav () {
    const id = this.props.params.id;
    const location = this.props.location.pathname;

    return (
      <div className="profile-nav">
        <span
          className={location === `/profile/${id}` ? "underline" : ""}
          onClick={() => hashHistory.push(`profile/${id}`)}>
          Profile
        </span>

        <span
          className={location === `/profile/${id}/threads` ? "underline" : ""}
          onClick={() => hashHistory.push(`profile/${id}/threads`)}>
          Chats
        </span>

        <span
          className={location === `/profile/${id}/questions` ? "underline" : ""}
          onClick={() => hashHistory.push(`profile/${id}/questions`)}>
          Questions
        </span>
      </div>
    );
  }

  render() {
    return (
      <div>
        <ProfileHeaderContainer/>
        {this.profileNav()}
        {this.props.children}
      </div>
    );
  }
}

export default Profile;
