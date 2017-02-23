import React from 'react';
import {Link, hashHistory} from 'react-router';

export default class SingleMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateMatch () {
    const {loverOne, loverTwo} = this.props;
    const firstPercent = this.subCalc(loverOne, loverTwo);
    const secondPercent = this.subCalc(loverTwo, loverOne);
  }

  subCalc (lover, otherLover) {
    let numerator = 0;
    let denomenator = 0;
    let loverQuestions = Object.keys(lover.questionResponses);
    let otherLoverQuestions = Object.keys(otherLover.questionResponses);

    loverQuestions.forEach(question => {
      if (otherLoverQuestions.includes(question)) {
        // const weight = lover.questionResponses[question].weight || 1;
        // denomenator += weight;
        const weight = 1;
        const loverResponseKeys = Object.keys(lover.questionResponses[question]);
        const otherLoverResponseKeys = Object.keys(otherLover.questionResponses[question]);

        const loverResponse = lover.questionResponses[question][loverResponseKeys[loverResponseKeys.length - 1]];
        const otherLoverResponse = otherLover.questionResponses[question][otherLoverResponseKeys[otherLoverResponseKeys.length - 1]];

        if (loverResponse.acceptable_answers
          .includes(otherLoverResponse.answer_id.toString())) {
              numerator += weight;
        }
      }
    });

    return numerator / denomenator;
  }

  render () {
    const matchPercent = this.calculateMatch();

    return(
      <li className="match" key={this.props.idx}>
        <img src={this.props.match.image}
          onClick={() => hashHistory.push(`/profile/${this.props.match.id}`)}/>

        <Link
          to={`/profile/${this.props.match.id}`}
          className="matches-username">
          {this.props.match.username}
        </Link>

        <div className="matches-user-info">
          <span>{this.props.match.age}</span>
          <span className="dot">•</span>
          <span>{this.props.match.zipcode}</span>
        </div>

        <p>88%</p>
        <p>Match</p>
      </li>
    );
  }
}
