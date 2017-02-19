import React from 'react';
import ProfileQuestionsItem from './profile_questions_item';

const ProfileQuestions = (props) => {
  let questions = Object.keys(props);
  questions = questions.slice(1, -1);

  questions = questions.map((question, idx) => (
    <li key={idx}>
      <ProfileQuestionsItem
        question={question}
        profileId={props.id}
        response={props[question]}
        updateUser={props.updateUser}
        currentUser={props.currentUser}
        />
    </li>
    )
  );

    return (
      <ul className="profile-questions">
        {questions}
      </ul>
    );
};


export default ProfileQuestions;
