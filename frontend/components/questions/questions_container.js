import React from 'react';
import Questions from './questions';
import {connect} from 'react-redux';
import {fetchQuestions} from '../../actions/question_actions'

const mapStateToProps = ({session: {currentUser}, questions}) => {
  const responses = Object.keys(currentUser.questionResponses);
  return {
    questions,
    userResponses: responses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {fetchQuestions: () => dispatch(fetchQuestions())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
