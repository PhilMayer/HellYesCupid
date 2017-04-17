import React from 'react';
import {Link, hashHistory} from 'react-router';
import calculateMatch from '../match_algorithm';

export default class SingleMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let matchPercent;
    const {loverOne, loverTwo} = this.props;

    if (loverOne.questionResponses && loverTwo.questionResponses) {
      matchPercent = calculateMatch(loverOne, loverTwo);
    }

    matchPercent = matchPercent || 0;

    return(
      <li className="match">
        <div className="profile-holder">
          <img src={this.props.loverTwo.image}
            onClick={() => hashHistory.push(`/profile/${this.props.loverTwo.id}`)}/>
        </div>

        <Link
          to={`/profile/${this.props.loverTwo.id}`}
          className="matches-username">
          {this.props.loverTwo.username}
        </Link>

        <div className="matches-user-info">
          <span>{this.props.loverTwo.age}</span>
          <span className="dot">•</span>
          <span>New York, NY</span>
        </div>

        <p>{matchPercent}%</p>
        <p>Match</p>
      </li>
    );
  }
}
