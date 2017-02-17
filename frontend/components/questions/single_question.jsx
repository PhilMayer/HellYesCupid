import React from 'react';
class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      editing: false,
      updatedResponse: ""
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
    updateUser()
  }

  render() {
    let displayAnswers;
    const answers = this.props.question.answers.map(ans => {
      if (this.props.userResponses.includes(ans.id.toString())){
        displayAnswers = true;
      }
      return <li key={ans.id}>{ans.answer}</li>
    })

    const radioAnswers = this.props.question.answers.map(ans => {
      return(
        <label key={ans.id}>
          <input
            type="radio"
            value={ans.answer}
            checked={this.state.updatedResponse === ans.answer}
            onChange={() => this.setState({updatedResponse: ans.answer})}/>
          {ans.answer}
        </label>
      )
    })

    // <div onClick={() => this.setState({editing: true})}>Re-answer</div>
    // <button onClick={this.handClick}>Answer</button>

    return (
      <li>
        <p>{this.props.question.title}</p>

        <div>
          <ul className={displayAnswers ? "" : "hidden"}>
            {answers}
          </ul>
        </div>

        <div className={this.state.editing ? "" : "hidden"}>
          {radioAnswers}
        </div>

        <button
          onClick={this.handleClick}
          className={displayAnswers ? "hidden" : ""}>
          Answer
        </button>
      </li>
    );
  }
}
export default SingleQuestion;
