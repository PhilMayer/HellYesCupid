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

  sortByDistance () {
    const sorted = [];
    this.props.matches.forEach(match => {
      for(var zipcode in match) {
        let distance;

        this.calcDistance(zipcode).then((result) => distance = result);
        debugger
      }
    });
  }

  calcDistance(zipcode) {
    // const ownZip = this.props.currentUser.zipcode;

    return $.ajax({
      method: "GET",
      url: "https://www.zipcodeapi.com/rest/js-D9q7M4s7kyo3NubgHEkpIrQm8j0xl61Zgr63wzaQ8zUV35cLKwasX0P6kPEGWFFc/distance.json/10001/85718/mile"
    });
  }

  render() {
    this.sortByDistance();
    let matches;
    if(this.props.matches) {
      matches = this.props.matches.map((match, idx) => {
        return(
          <SingleMatch key={idx} match={match}/>
        );
      });
    }

    return(
      <div>
        <MatchesHeader
          currentUser={this.props.currentUser}
          fetchMatches = {this.props.fetchMatches}/>
        <section className="matches">
          {matches}
        </section>
      </div>
    );
  }
}
