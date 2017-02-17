import React from 'react';
class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state={editing: false}
  }

  render() {
    let displayAnswers;
    let answers = this.props.question.answers.map(ans => {
      if (this.props.userResponses.includes(ans.id.toString())){
        displayAnswers = true;
      }
      return <li key={ans.id}>{ans.answer}</li>
    })



    return (
      <li>
        <p>{this.props.question.title}</p>
        <ul className={displayAnswers ? "" : "hidden"}>
          {answers}
        </ul>

        <button
          onClick={this.setState({editing: true})}
          className={displayAnswers ? "hidden" : ""}>
          Answer
        </button>
      </li>
    );
  }
}

export default SingleQuestion;
