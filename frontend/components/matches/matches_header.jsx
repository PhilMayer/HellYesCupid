import React from 'react';

export default class MatchesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 25,
      editAge: false,
      editDistance: false,
      minAge: this.props.currentUser.min_age,
      maxAge: this.props.currentUser.max_age
    };
  }

  getGender() {
    let matchGender;
    const gender = this.props.currentUser.gender;
    const sexuality = this.props.currentUser.sexuality;

    if(sexuality === "Straight") {
      matchGender = gender === "Man" ? "Women " : "Men ";
      return matchGender;
    } else if (sexuality === "Gay"){
      matchGender = gender === "Man" ? "Men " : "Women ";
      return matchGender;
    } else {
      return "All genders ";
    }
  }

  changeAgeRange () {
    return(
      <div className={this.state.editAge === true ? "change-age-range" : "hidden"}>
        <div className='square'></div>
        <h3>Ages</h3>
        <input
          value={this.state.minAge}
          onChange={(e) => this.setState({minAge: e.target.value}, this.queryAges())}/>
        <span className='to'>to</span>
        <input
          value={this.state.maxAge}
          onChange={(e) => this.setState({maxAge: e.target.value}, this.queryAges())}/>
      </div>
    );
  }

  queryAges () {
    return () => {
      this.props.fetchMatches({
        min_age: this.state.minAge,
        max_age: this.state.maxAge
      });
    };
  }

  // changeDistance () {
  //
  // }

  render () {
    const matchGender = this.getGender();

    return(
      <div className="matches-header">
        <span>{matchGender}</span>

        <span
          className='age-preference'
          onClick={() => this.setState({editAge: !this.state.editAge})}>
          between the ages of {this.state.minAge} and {this.state.maxAge + " "}

          {this.changeAgeRange()}
        </span>

        <span>located within {this.state.distance} miles of</span>
        <span>{" " + this.props.currentUser.zipcode}</span>


      </div>
    );
  }
}
