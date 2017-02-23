import React from 'react';
import {submitResponse} from '../../util/question_api_util';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);

    let weight;
    let existingAnswer;
    let acceptableAnswers;

    if(this.props.userResponses) {
      const responses = this.props.userResponses;
      const mostRecentResponse = Object.keys(this.props.userResponses).pop();

      weight = responses[mostRecentResponse].weight;
      existingAnswer = responses[mostRecentResponse].answer_id;
      acceptableAnswers = responses[mostRecentResponse].acceptable_answers;
    }

    this.state={
      editing: false,
      weight: weight,
      updatedResponse: existingAnswer,
      acceptableAnswers: acceptableAnswers
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
    const {updatedResponse, acceptableAnswers, weight} = this.state;

    submitResponse({
      weight: weight,
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
    const acceptables = this.state.acceptableAnswers;
      if (acceptables && acceptables.includes(answer.id.toString())) {
        return <input
          defaultChecked={true}
          type="checkbox" value={answer.id}
          onClick={(e) => this.handleCheckboxChange(e)}/>;
      } else {
        return <input
          type="checkbox"
          value={answer.id}
          onClick={(e) => this.handleCheckboxChange(e)}/>;
      }
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

  getWeights () {
    return (
      <div className="weights">
        <div>
          <div
            className = "weight-block"
            id={this.state.weight >= 10 ? "blue-weight" : ""}
            onClick={() => this.setState({weight: 10})}>
          </div>
          <span>A little</span>
        </div>

        <div>
          <div
            className = "weight-block"
            id={this.state.weight >= 50 ? "blue-weight" : ""}
            onClick={() => this.setState({weight: 50})}>
          </div>
          <span id="weight-label-middle">Somewhat</span>
        </div>

        <div>
          <div
            className = "weight-block"
            id={this.state.weight >= 100 ? "blue-weight" : ""}
            onClick={() => this.setState({weight: 100})}>
          </div>
          <span>Very</span>
        </div>
      </div>
    );
  }

  render() {
    let displayAnswers;
    const radioAnswers = this.getRadioButtons();
    const acceptableAnswers = this.getAcceptableAnswers();
    const weights = this.getWeights();

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

        <div className={this.state.editing ? "acceptable-answers" : "hidden"}>
          <p>Answers you'll accept</p>
          {acceptableAnswers}
        </div>

        <div className={this.state.editing ? "weight-section" : "hidden"}>
          <p>Importance</p>
          {weights}
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
