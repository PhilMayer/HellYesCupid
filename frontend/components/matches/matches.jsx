import React from 'react';
import SingleMatch from './single_match';
import MatchesHeader from './matches_header';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchMatches();

  }

  render() {
    let matches;
    if(this.props.matches) {
      matches = this.props.matches.map((match, idx) => {
        return(
          <SingleMatch idx={idx} loverOne={this.props.currentUser} loverTwo={match} />
        );
      });
    }

    return(
      <div className="match-page">
        <MatchesHeader
          currentUser={this.props.currentUser}
          fetchMatches = {this.props.fetchMatches}/>
        <ul className="matches">
          {matches}
        </ul>
      </div>
    );
  }
}
