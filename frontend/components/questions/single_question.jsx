import React from 'react';
import {submitResponse} from '../../util/question_api_util'

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      editing: false,
      updatedResponse: this.props.question.answers.id //NOOOOOPE
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick () {
    if(this.state.editing) {
      this.handleSubmit();
    } else {
      this.setState({editing: true})
    }
  }

  handleSubmit () {
    const id = this.props.userId;
    const response = this.state.updatedResponse;
    submitResponse({user_id: id, answer_id: response})
    this.setState({editing: false})
  }

  render() {
    let displayAnswers;
    const answers = this.props.question.answers.map(answer => {
      if (this.props.userResponses.includes(answer.id.toString())){
        displayAnswers = true;
      }
      return (
        <div>
          <span className="dot">•</span>
          <li key={answer.id}>{answer.answer}</li>
        </div>
      )
    })

    const radioAnswers = this.props.question.answers.map(answer => {
      return(
        <label>
          <input
            type="radio"
            checked={this.state.updatedResponse === answer.id}
            onChange={() => this.setState({updatedResponse: answer.id})}/>
          {answer.answer}
        </label>
      )
    })

    return (
      <li className="question">
        <p>{this.props.question.title}</p>

        <div>
          <ul className={!this.state.editing && displayAnswers ? "" : "hidden"}>
            {answers}
          </ul>

          <div className={this.state.editing ? "hidden" : "re-answer"}
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
