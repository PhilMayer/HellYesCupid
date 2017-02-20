import React from 'react';
import {Link, hashHistory} from 'react-router';

export default class SingleMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="match">
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
      </div>
    );
  }
}
