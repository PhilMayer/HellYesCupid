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

    const product = firstPercent * secondPercent;
    const numQuestions = Object.keys(loverOne.questionResponses).length;

    const match_percentage = Math.pow(product, 1 / numQuestions) * 100;
    return Math.round(match_percentage);
  }

  subCalc (lover, otherLover) {
    let numerator = 0;
    let denomenator = 0;
    let loverQuestions = Object.keys(lover.questionResponses);
    let otherLoverQuestions = Object.keys(otherLover.questionResponses);

    loverQuestions.forEach(question => {
      if (otherLoverQuestions.includes(question)) {
        const loverOneResponses = lover.questionResponses[question];
        const loverTwoResponses = otherLover.questionResponses[question];

        // const loverResponseKeys = Object.keys(lover.questionResponses[question]);
        // const otherLoverResponseKeys = Object.keys(otherLover.questionResponses[question]);

        const loverResponseKeys = Object.keys(loverOneResponses);
        const otherLoverResponseKeys = Object.keys(loverTwoResponses);

        const loverResponse = loverOneResponses[loverResponseKeys[loverResponseKeys.length - 1]];
        const otherLoverResponse = loverTwoResponses[otherLoverResponseKeys[otherLoverResponseKeys.length - 1]];

        const weight = loverResponse.weight;
        denomenator += weight;
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
        <img src={this.props.loverTwo.image}
          onClick={() => hashHistory.push(`/profile/${this.props.loverTwo.id}`)}/>

        <Link
          to={`/profile/${this.props.loverTwo.id}`}
          className="matches-username">
          {this.props.loverTwo.username}
        </Link>

        <div className="matches-user-info">
          <span>{this.props.loverTwo.age}</span>
          <span className="dot">•</span>
          <span>{this.props.loverTwo.zipcode}</span>
        </div>

        <p>{matchPercent}%</p>
        <p>Match</p>
      </li>
    );
  }
}
