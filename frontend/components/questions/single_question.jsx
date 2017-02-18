import React from 'react';
import {submitResponse} from '../../util/question_api_util';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);

    let existingAnswer;
    if(this.props.userResponses) {
      existingAnswer = Object.keys(this.props.userResponses).pop();
    }

    this.state={
      editing: false,
      updatedResponse: existingAnswer
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick () {
    if(this.state.editing) {
      this.handleSubmit();
    } else {
      this.setState({editing: true});
    }
  }

  handleSubmit () {
    const userId = this.props.userId;
    const response = this.state.updatedResponse;

    submitResponse({user_id: userId, answer_id: response});
    
    this.setState({editing: false});
  }

  render() {
    let displayAnswers;
    const answers = this.props.question.answers.map(answer => {
      displayAnswers = this.props.userResponses ? true : false;

      return (
        <div>
          <span className="dot">•</span>
          <li key={answer.id}>{answer.answer}</li>
        </div>
      );
    });

    const radioAnswers = this.props.question.answers.map(answer => {
      return(
        <label>
          <input
            type="radio"
            value={answer.id}
            checked={this.state.updatedResponse === answer.id.toString()}
            onChange={(e) => this.setState({updatedResponse: e.currentTarget.value})}/>
          {answer.answer}
        </label>
      );
    });

    return (
      <li className="question">
        <p>{this.props.question.title}</p>

        <div>
          <ul className={!this.state.editing && displayAnswers ? "" : "hidden"}>
            {answers}
          </ul>

          <div className={!displayAnswers || this.state.editing ? "hidden" : "re-answer"}
            onClick={this.handleClick}>
            Re-answer
          </div>
        </div>

        <div className={this.state.editing ? "" : "hidden"}>
          {radioAnswers}
        </div>

        <button
          onClick={this.handleClick}
          className={!this.state.editing && displayAnswers ? "hidden" : "answer-button"}>
          Answer
        </button>
      </li>
    );
  }
}
export default SingleQuestion;
