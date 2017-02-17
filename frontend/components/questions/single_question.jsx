import React from 'react';
class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const answers = this.props.question.answers.map(ans => (
      <li key={ans.id}>{ans.answer}</li>
    ))
    return (
      <li>
        <p>{this.props.question.title}</p>
        <ul>
          {answers}
        </ul>
      </li>
    );
  }
}

export default SingleQuestion;
