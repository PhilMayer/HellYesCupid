import React from 'react';
import {Link} from 'react-router';

export default class SingleMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="match">
        <img src="https://s-media-cache-ak0.pinimg.com/originals/3a/68/64/3a68647e12ed77292548f46a05b29c82.jpg"/>
        <Link to={`/profile/${this.props.match.id}`} className="matches-username">{this.props.match.username}</Link>
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
