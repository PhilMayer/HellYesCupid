import React from 'react';
import SingleMatch from './single_match';

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
          <SingleMatch key={idx} match={match}/>
        );
      });
    }

    return(
      <section className="matches">
        {matches}
      </section>
    );
  }
}
