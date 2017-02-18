import React from 'react';
import SingleQuestion from './single_question';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchQuestions();
  }

  render() {
    let questions;
    if(this.props.questions) {
      questions = this.props.questions.map(question => (
        <SingleQuestion
          key={question.id}
          question={question}
          userId={this.props.userId}
          userResponses={this.props.userResponses[question.id]}/>
      ));
    }
    return (
      <div>
        <h2 className="questions-header">Match Questions</h2>
        <ul>
          {questions}
        </ul>
      </div>
    );
  }
}

export default Questions;
