import React from 'react';
import {submitResponse} from '../../util/question_api_util';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);

    let existingAnswer;
    let acceptableAnswers;

    if(this.props.userResponses) {
      const mostRecentResponse = Object.keys(this.props.userResponses).pop();
      existingAnswer = this.props.userResponses[mostRecentResponse].answer_id;
      acceptableAnswers = this.props.userResponses[mostRecentResponse].acceptable_answers;
    }

    this.state={
      editing: false,
      updatedResponse: existingAnswer,
      acceptableAnswers: acceptableAnswers,
      weight: 1
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
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
    const {updatedResponse, acceptableAnswers} = this.state;

    submitResponse({
      user_id: userId,
      answer_id: updatedResponse,
      acceptable_answers: acceptableAnswers
    });

    this.setState({editing: false});
  }

  handleCheckboxChange (e) {
    let newAcceptableAnswers = this.state.acceptableAnswers;
    const answer = e.target.value;

    if (newAcceptableAnswers.includes(answer)) {
      const idx = newAcceptableAnswers.indexOf(answer);
      delete newAcceptableAnswers[idx];
    } else {
      newAcceptableAnswers.push(e.target.value);
    }

    this.setState({acceptableAnswers: newAcceptableAnswers});
  }

  getCheckbox (answer) {

    if (this.state.acceptableAnswers.includes(answer.id.toString())) {
      return <input defaultChecked={true} type="checkbox" value={answer.id} onClick={(e) => this.handleCheckboxChange(e)}/>;
    } else {
      return <input type="checkbox" value={answer.id} onClick={(e) => this.handleCheckboxChange(e)}/>;
    }
    // return this.state.acceptableAnswers.includes(value) ? "checked" : null;
  }

  getAcceptableAnswers () {
    return this.props.question.answers.map(answer => {
      return(
        <label key={answer.id}>
          {this.getCheckbox(answer)}
        {answer.answer}
        </label>
      );
    });
  }

  getRadioButtons () {
    return this.props.question.answers.map(answer => {
      return(
        <label key={answer.id}>
          <input
            type="radio"
            value={answer.id}
            checked={this.state.updatedResponse === answer.id}
            onChange={(e) => this.setState({updatedResponse: answer.id})}/>
          {answer.answer}
        </label>
      );
    });
  }

  render() {
    let displayAnswers;

    const answers = this.props.question.answers.map(answer => {
      displayAnswers = this.props.userResponses ? true : false;

      return (
        <div key={answer.id}>
          <span className={answer.id === this.state.updatedResponse ? "checkmark" : "dot"}>
            {answer.id === this.state.updatedResponse ? "✓" : "•"}
          </span>
          <li id={answer.id === this.state.updatedResponse ? "selected-answer" : ""}>{answer.answer}</li>
        </div>
      );
    });

    const radioAnswers = this.getRadioButtons();
    const acceptableAnswers = this.getAcceptableAnswers();

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

        <p>Answers you'll accept</p>
        <div className={this.state.editing ? "" : "hidden"}>
          {acceptableAnswers}
        </div>

        <button
          onClick={this.handleClick}
          className={!this.state.editing && displayAnswers ? "hidden" : "answer-button"}>
          Answer
        </button>
        <button
          onClick={() => this.setState({editing: false})}
          className={this.state.editing ? "cancel-button" : "hidden"}>
          Cancel
        </button>
      </li>
    );
  }
}

export default SingleQuestion;
