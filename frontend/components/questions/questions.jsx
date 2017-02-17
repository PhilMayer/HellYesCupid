import React from 'react';
import SingleQuestion from './single_question';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchQuestions();

    return;
  }

  render() {
    let questions;
    if(this.props.questions) {
      questions = this.props.questions.map(question => (
        <SingleQuestion key={question.id} question={question} />
      ))
    }
    return (
      <ul>
        {questions}
      </ul>
    );
  }
}

export default Questions;
