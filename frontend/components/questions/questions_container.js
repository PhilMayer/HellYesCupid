import React from 'react';
import Questions from './questions';
import {connect} from 'react-redux';
import {fetchQuestions} from '../../actions/question_actions'

const mapStateToProps = ({questions}) => {
  return {
    // titles: Object.keys(questions).map(id => questions[id].title),
    questions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {fetchQuestions: () => dispatch(fetchQuestions())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
