import React from 'react';
import ProfileQuestionsItem from './profile_questions_item';

const ProfileQuestions = (props) => {
  let questions = Object.keys(props.questions);
  questions = questions.map((question, idx) => (
    <li key={idx}>
      <ProfileQuestionsItem
        question={question}
        id={props.currentUser}
        response={props[question]}
        updateUser={props.updateUser}
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
